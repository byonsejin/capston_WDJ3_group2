/*레시피 */
<template>
<v-container>
        <v-layout>
            <v-flex>
                <div class="display-2 green--text font-weight-bold" style="text-align:center;">RECIPE</div>

                <v-layout class="d-flex flex-wrap" style="margin-top: 100px;">
                    <div style="margin-right:100px;" xs12 sm12 md6>
                        <v-img style="width:500px; height: 400px; margin-top:50px; margin-left:60px; margin-bottom : 50px;" height="300px" :src="food.foot_img"></v-img>
                    </div>

                    <div xs12 sm12 md6>
                        <div style="width:500px; height: 400px;">
                                <div class="display-1 font-weight-bold">{{food.foot_name}}</div>
                                <br>
                        <h2 class="font-weight-bold">영양소</h2>
                        <div style="margin-right:50px;">
                            중량(1인분):{{food.foot_weight}}
                            열량:{{food.foot_calorimetry}}
                            탄수화물:{{food.foot_Carbohydrate}}
                            단백질:{{food.foot_protein}}
                            지방:{{food.foot_local}}
                            나트륨:{{food.foot_natrium}}
                        </div>
                        <br>
                        <h2 class="green--text font-weight-bold">재료</h2>
                        <div class="d-flex flex-wrap">
                            <h3 style="margin-right:30px;" v-for="material in materials" v-bind:key="material.index">
                                {{material}}
                                    </h3>                           
                                </div>
                        </div>
                    </div>                    
                </v-layout>

                <div>
                    
                    <v-flex class="text-md-center" xs12 sm12 md12>
                        <div class="display-1 font-weight-bold" style="margin-top:100px; text-align:center;">만드는 방법</div>
                        <div v-for="recipe in recipes" v-bind:key="recipe.index">
                            <v-img style="margin-top: 25px;" :src="recipe"></v-img>
                        </div>
                    </v-flex>
                    
                </div>
            </v-flex>
        </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Recipe',
    data(){
        return{
            food:'',
            materials:'',
            recipes:'',
        };
    },

    created : function(){
        axios.get('/static/footrecommend.json')
        .then((response) => {
            this.food=response.data.footrecommend.filter(data=>data.foot_id == this.$route.params.id)[0];
            this.materials=this.food.foot_material;
            this.recipes=this.food.foot_recipe;
            console.log(this.recipes);
        })
        .catch((err) => {
            console.log(err);
        });
    },
}
</script>