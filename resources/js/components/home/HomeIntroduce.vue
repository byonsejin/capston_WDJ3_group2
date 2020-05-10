<template>
  <v-container class="my-5">
    <v-layout column>
      <v-flex xs6 style="margin-top:30px;">
        <v-layout align-center justify-center row>
            <v-flex xs6 md6 justify-center>
              <v-layout justify-center>
                <!--v-img src="/static/main3_1.png" class="ma-10" max-width="35%"--><!--/v-img-->
                <v-img :src="jpg" class="ma-10" max-width="35%"></v-img>
              </v-layout>
            </v-flex>
            <v-flex xs6 md6>
              <v-layout justify-center>      
                <span class="text-xs-left text-md-left">         
                  <div class="justify-center">
                    <h1 class="green--text font-weight-bold">터치 한 번으로 건강을 지키자</h1>
                  </div>
                  <div class="mt-4 title message" >
                    iOS 및 Android용으로 설계된 FitFood앱을 사용하면<br>
                    촬영 터치 한 번으로 음식의 영양소 분석은 물론이고 <br>
                    식사 조절에 도움을 주는 서비스 이용이 가능합니다.<br>
                    또한 모바일 환경에서 더욱 편리하게 영양소 분석<br>
                    그래프 서비스와 음식점 추천 서비스를 이용하실 수<br>
                    있습니다.
                  </div>
                </span>
              </v-layout>
            </v-flex>
          </v-layout>
      </v-flex>
      <v-flex xs6 text-md-center text-xs-center style="margin-top:50px;">
        <div
          height="30vh" 
          class="pa-5 mt-5"
          data-aos="flip-up" 
          data-aos-delay="200" >
          <div class="mt-4 title message" style="margin-bottom:15px;">
             건강한 식사 시작하시겠습니까?
          </div>
          <!--v-btn color="green" class="white--text" rounded large router :to="{name: 'Signup'}"-->
          <v-btn color="green" class="white--text" rounded large link router :to="item.route">
          START</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data(){
      return {
          jpg: "/static/main3_1.png",
          items: [
            { title: 'Signup', route: "./views/auth/Signup.vue" }
          ]
      }
    }
  }

</script>