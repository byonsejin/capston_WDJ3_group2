<template>
    <div class="d-flex flex-wrap" xs12 sm12 md6 style="margin-left:50px;">                   
        <v-card v-for="recommend in recommends" v-bind:key="recommend.id"
            style="margin-top: 100px; height: 400px; width:500px; margin-right:50px;">
            <router-link rounded :to="{ name: 'Detailed',params : {id: recommend.id}}">
                <v-img height="300px" :src="recommend.image"></v-img>
            </router-link>
            <v-card-text class="display-1 black--text font-weight-bold" style="text-align:center;">{{recommend.recommend_name}}</v-card-text>
        </v-card>
    </div>

<!-- 
                    <v-card style="margin-top: 100px; height: 400px; width:500px;">
                        <v-img height="300px" src="/static/b.jpg"></v-img>

                        <v-card-text>
                            <v-card-text class="display-1 black--text font-weight-bold" style="text-align:center;">도미노 피자</v-card-text>
                        </v-card-text>
                    </v-card>
            
                    <v-card style="margin-top: 150px; height: 400px; width:500px; margin-right:50px;">
                        <v-img height="300px" src="/static/c.jpg"></v-img>

                        <v-card-text>
                            <v-card-text class="display-1 black--text font-weight-bold" style="text-align:center;">작은 이태리</v-card-text>
                        </v-card-text>
                    </v-card>

                    <v-card style="margin-top: 150px; height: 400px; width:500px;">
                        <v-img height="300px" src="/static/d.jpg"></v-img>

                        <v-card-text>
                            <v-card-text class="display-1 black--text font-weight-bold" style="text-align:center;">석수 반점</v-card-text>
                        </v-card-text>
                    </v-card>
            
                    <v-card style="margin-top: 150px; height: 400px; width:500px; margin-right:50px;">
                        <v-img height="300px" src="/static/e.jpg"></v-img>

                        <v-card-text>
                            <v-card-text class="display-1 black--text font-weight-bold" style="text-align:center;">양팀장</v-card-text>
                        </v-card-text>
                    </v-card>

                    <v-card style="margin-top: 150px; height: 400px; width:500px;">
                        <v-img height="3`px" src="/static/f.jpg"></v-img>

                        <v-card-text>
                            <v-card-text class="display-1 black--text font-weight-bold" style="text-align:center;">막걸리 한주막</v-card-text>
                        </v-card-text>
                    </v-card>-->

</template>

<script>
import axios from 'axios'

export default {
    name: 'recommend',
    data(){
        return{
            recommends: [],
        }; 
    },
    created : function(){
        axios.get('/static/recommend.json')
        .then((response) => {
            this.recommends = response.data.recommend;
            console.log(this.recommends);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    // methods: {
    //     img_click:function(){
    //        window.open("http://localhost:8080/Detailed");
    //     }
    // }
};
</script>
