<template>
   <nav>
      <v-app-bar flat app absolute="" color="white">
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase white--text">
            <span class="green--text font-weight-light" text to="/">Fit</span>
            <span class="green--text" text to ="/">Food</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <!-- <v-btn text to="/signup">Sign up</v-btn> -->
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
export default {
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
    }
  }   
}
</script>
