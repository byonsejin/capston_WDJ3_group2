<template>
  <v-app class="grey lighten-4">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './app/Navbar.vue';
import Footer from './app/Footer.vue';

export default {
  name: 'App',
  components: { Navbar, Footer },
  data(){
    return {

    }
  }
}
</script>
