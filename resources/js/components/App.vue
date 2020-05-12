<template>
  <v-app class="grey lighten-4">
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
