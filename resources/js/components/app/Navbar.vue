<template>
   <nav>
      <v-app-bar flat app absolute="" color="white">
        <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase white--text">
            <span class="green--text font-weight-light" >Fit</span>
            <span class="green--text">Food</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <!-- <v-btn text to="/signup">Sign up</v-btn> -->
          <!--강좌 42:33 로그인 여부에 따른 내 정보 보기, 로그아웃 버튼 구현할 것 -->
          <v-btn text to="/login" class="green--text">Login</v-btn>
        </v-toolbar-items>  
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer" class="white">
        <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title black--text">
              tester
            </v-list-item-title>
            <v-list-item-subtitle class="grey--text">
              user
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </v-list-item> 
        <v-divider></v-divider> 
        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link router :to="item.route">
            <v-list-item-icon>
              <v-icon class="grey--text">{{ item.icon }}</v-icon>
            </v-list-item-icon> 
            <v-list-item-content>
              <v-list-item-title class="black--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
   </nav>
</template>

<script>

import EventBus from '../EventBus'

export default {

  // 사용자 로그인 여부에 따라 로그인 버튼/로그아웃 버튼 구현
  data(){
    return {
      drawer : false,
      items: [
        { title: 'Graph', icon: 'mdi-view-dashboard', route: '/graph/monthchart'},
        { title: 'Recommend', icon: 'mdi-image', route:'/recommendmain/recommend'},
        { title: 'Review', icon: 'mdi-help-box', route:'/review'},
      ],
      right: null,
      miniVariant: false,
      
      auth: '', // 추가기능용(로그아웃)
      user: '',
    }
  },
  
  methods: {
    logout() {
      localStorage.removeItem('usertoken')  //로그아웃 기능
    }
  },

  mounted(){
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
}
</script>
