<template>
    <v-container>
        <v-layout>
            <v-flex>
                <div class="display-1 green--text font-weight-bold" style="text-align:center;">RECOMMEND</div>

                <div style="margin-top: 30px; text-align:center;">
                    <v-btn  class="green--text font-weight-bold" style="margin-right: 40px" router :to="{name:'Recommend'}">식단 추천</v-btn>
                    <v-btn  class="green--text font-weight-bold" router :to="{name:'FootRecommend'}">레시피 추천</v-btn>
                </div>

                <!-- <Recommend /> -->
                <router-view></router-view>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// import Recommend from "../components/Recommend/Recommend.vue";
// import FootRecommend from '@/components/foot_recommend/FootRecommend';

export default {
    name: 'RecommendMain',
	components: {
            // Recommend,
            // FootRecommend
		}
         
    }
</script>