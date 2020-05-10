<template>
  <div id="app" v-if="this.$route.name == 'review'">  
    <!-- <Map /> -->
    <v-content style="background: #eee">
    <v-container>
        <v-layout justify-cetner>
            <Main />
        </v-layout>
    </v-container>
    </v-content>    
  </div>
  <div v-else>
      <Store />
  </div>
</template>

<script>
// import Map from '@/components/review/Map'
import Main from '../../js/components/review/Main'
import Store from '../../js/components/review/Store'

export default {
    name: 'review',
	components: {
            // Map,
            Main,
            Store
		}
         
    }
    
</script>