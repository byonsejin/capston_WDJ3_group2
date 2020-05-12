/*가게 추천 상세보기 */
<template>
<v-container>
        <v-layout>
            <v-flex>
                <div class="display-2 green--text font-weight-bold" style="text-align:center;">상세보기</div>

                <v-layout class="d-flex flex-wrap" style="margin-top: 100px;">
                    <div style="margin-right:100px;" xs12 sm12 md6>
                        <v-img style="width:500px; height: 400px; margin-top:50px; margin-bottom : 50px;" height="300px" :src="shop.image"></v-img>
                    </div>

                    <div xs12 sm12 md6>
                        <div style="width:500px; height: 400px;">
                                <div class="display-1 font-weight-bold">{{shop.recommend_name}}</div>
                                <h3>{{shop.recommend_tel}}</h3>
                                <h3>{{shop.recommend_address}}</h3>
                                <br>
                                <h2 class="green--text font-weight-bold">메뉴</h2>
                                <h3 v-for="menu in menus" v-bind:key="menu.index">
                                    {{menu}}
                                </h3>                           
                        </div>
                    </div>                    
                </v-layout>

                <div>
                    
                    <v-flex class="text-md-center" xs12 sm12 md12>
                        <div class="display-1 font-weight-bold" style="margin-top:100px; text-align:center;">가게 위치</div>
                        <v-img style="  margin-top: 25px;"  :src="shop.gps"></v-img>
                    </v-flex>
                    
                </div>
            </v-flex>
        </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Detailed',
    data(){
        return{
            shop:'',
            menus:'',
        };
    },

    created : function(){
        axios.get('/static/recommend.json')
        .then((response) => {
            this.shop=response.data.recommend.filter(data=>data.id == this.$route.params.id)[0];
            this.menus=this.shop.recommend_menu;
            console.log(this.menus);
        })
        .catch((err) => {
            console.log(err);
        });
    },
}
</script>