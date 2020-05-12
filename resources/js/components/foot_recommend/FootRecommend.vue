<template>
    <div class="d-flex flex-wrap" xs12 sm12 md6 style="margin-left:50px;">                   
        <v-card v-for="footrecommend in footrecommends" v-bind:key="footrecommend.id"
            style="margin-top: 100px; height: 400px; width:500px; margin-right:50px;">
            <router-link rounded :to="{ name: 'Recipe',params : {id: footrecommend.foot_id}}">
                <v-img height="300px" :src="footrecommend.foot_img"></v-img>
            </router-link>
            <v-card-text class="display-1 black--text font-weight-bold" style="text-align:center;">{{footrecommend.foot_name}}</v-card-text>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FootRecommend',
    data(){
        return{
            footrecommends:[],
        };
    },
    created : function(){
        axios.get('/static/footrecommend.json')
        .then((response) => {
            this.footrecommends = response.data.footrecommend;
            console.log(this.footrecommends);
        })
        .catch((err) => {
            console.log(err);
        })
    }
};
</script>