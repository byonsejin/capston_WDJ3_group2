<template>
  <v-fade-transition mode="out-in">
    <v-img
     src="/static/main.jpg"
     max-height="90vh"
    >
      <v-fade-transition mode="out-in">
        <v-container :key="$route.path" fill-height>
          <v-layout align-center>
            <v-fade-transition mode="out-in">
              <v-flex :key="$route.path" text-xs-left>
                <h3 class=" white--text font-weight-bold">
                  AI기반 식단 컨설팅 서비스
                </h3>
                <h1 class="display-2 white--text font-weight-bold">
                  Find your FitFood 
                </h1>
                <div class="title white--text mt-4">
                  <h5 class=" white--text font-weight-light">내 몸에 딱 맞는 식단으로 건강하게</h5>
                </div>
                <v-btn color="white" rounded
                 class="title green--text font-weight-bold mt-4 pl-5 pr-5 pa-4">
                 Start
                </v-btn>
              </v-flex>
            </v-fade-transition>
          </v-layout>        
        </v-container>       
      </v-fade-transition>
    </v-img>
  </v-fade-transition>
</template>


 <style scoped>
  .floating{
    left:49%;
    bottom: 5%;
  }
 </style>