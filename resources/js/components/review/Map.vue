<template>
    <div id="map">
    </div>
</template>

<script>
export default {
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=19717956807ff127d923e6d416fe91e3&libraries=services';
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            navigator.geolocation.getCurrentPosition(function(position) {

                var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
                 
            var container = document.getElementById('map');
            var options = {
              center: new kakao.maps.LatLng(lat, lon),
              level: 3
            };
            var infowindow = new kakao.maps.InfoWindow({zIndex:1});
            var map = new kakao.maps.Map(container, options);
            map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);

            var ps = new kakao.maps.services.Places(map);
            ps.categorySearch('FD6', placesSearchCB, {useMapBounds:true});

            function placesSearchCB(data, status){
            
                if (status === kakao.maps.services.Status.OK) {
                    for (var i=0; i<data.length; i++) {
                        displayMarker(data[i]);    
                    }       
                } 
            }

            function displayMarker(place){
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(place.y, place.x) 
                });

                kakao.maps.event.addListener(marker, 'click', function() {

                    var content = '<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>';

                    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                    window.open('http://localhost:8081/review/detail/'+ place.id);
                    // var router = this.$router;
                    // router.push({ name: 'reviewdetail' })
                    // location.href="/review/detail";
                });
            }

            });
        } 
         
    }
    
}
</script>

<style>
#map {
    width: 1200px;
    height: 630px;
}
</style>