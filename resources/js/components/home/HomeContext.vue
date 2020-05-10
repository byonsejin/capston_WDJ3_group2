<template>
<div class="service grey lighten-4">
  <v-container fluid grid-list-lg  class="my-1">
    <v-layout row wrap style="margin-top:100px;">
      <v-flex xs12 text-md-center text-xs-center style="margin-bottom:20px;">
        <h1 class="display-1 font-weight-bold">Our Service</h1>
      </v-flex>
      <v-flex xs12 lg4 style="margin-bottom:20px;" v-for="card in service" :key="card.title">
        <v-card flat class="xs12 sm8 md8 lg4 ma-8">
          <v-responsive class="pt-4">
            <v-img :src="card.img"></v-img>
          </v-responsive>
          <v-card-title>
             <div class="subheading font-weight-bold green--text">{{ card.title }}</div>
          </v-card-title>
          <v-card-text>
            <div class="black--text">{{ card.text }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        service : [
          { img : '/static/main2_4.png', title : '영양소 분석 그래프',
          text : 'graph'
          },
          { img : '/static/main2_2.png',title : '음식점, 음식 추천 & 레시피 제공', 
          // text : ' 음식점 추천 서비스는 사용자의 섭취 영양소를 토대로 부족한 영양소를 섭취할 수 있는 학교 주변 음식점의 메뉴를 추천해 줍니다. 음식 추천 서비스는 등록되지 않은 음식점에 가서 식사를 하고 싶은 사용자나 집에서 밥을 해 먹는 사용자를 위해 부족한 영양소를 섭취할 수 있는 음식 추천하고 해당 레시피를 제공하는 서비스입니다.'
          text : 'recommend'
          },
          { img : '/static/main2_3.png', title : '리뷰 게시판', 
          // text : '학교 주변의 음식점 위치와 해당 음식점의 메뉴, 가격, 나오는 시간 등의 정보를 확인할 수 있습니다. 사용자는 음식점의 메뉴에 리뷰 작성이 가능하고 댓글 기능으로 게시판으로도 활용이 가능한 서비스 입니다.'
          text : 'review'
          },
        ]
      }
    }
  }
</script>
