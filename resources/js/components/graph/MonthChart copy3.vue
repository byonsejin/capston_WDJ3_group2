<template>
    <div>
        <chart-header></chart-header>
        <v-container 
        fluid grid-list-lg 
        class="my-1">
        <v-layout 
            justify-center 
            fill-height 
            wrap class="pa-5"
            >
            <v-flex>
            <line-chart
                :width="300"
                :height="100"
                :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev']"
                :datasets="$options.datasets"
                :options="$options.options"
            ></line-chart>
            </v-flex>
            <v-flex xs12 sm12 md12 xl11 class="center_card">
            <v-layout row wrap justify-center>
                <div class="col-md-12 verify">
                    <form>
                        <fieldset>
                            <legend>영양소선택</legend>
                            <input type="radio" name ="ayo" id="a" value="a" v-model="selectMonth"/>
                            <label>칼로리&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="b" value="b" v-model="selectMonth"/>
                            <label>탄수화물&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="c" value="c" v-model="selectMonth"/>
                            <label>단백질&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="d" value="d" v-model="selectMonth"/>
                            <label>지방&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="e" value="e" v-model="selectMonth"/>
                            <label>콜레스테롤&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="f" value="f" v-model="selectMonth"/>
                            <label>식이섬유&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="g" value="g" v-model="selectMonth"/>
                            <label>칼륨&nbsp;&nbsp;&nbsp;</label>
                        </fieldset>
                    </form>
                </div>
            </v-layout>
            </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>

<script>
import LineChart from '@/components/graph/LineChart.vue'
import ChartHeader from '@/components/graph/ChartHeader.vue'

const datasets = [
        {
            label: 'a',
            // backgroundColor:'rgba(255, 0, 0, 0.2)',
            borderColor: 'lightblue',
            pointBackgroundColor: 'blue',
            borderWidth: 1,
            pointedBorderColor: 'blue',
            data: [40, 39, 31, 11, 45, 50, 12, 45, 17, 44, 54, 20],
            backgroundColor: 'transparent',
        },
        {
            label: 'b',
            // backgroundColor:'rgba(255, 0, 0, 0.2)',
            borderColor: 'lightred',
            pointBackgroundColor: 'red',
            borderWidth: 1,
            pointedBorderColor: 'red',
            data: [53, 44, 22, 19, 30, 20, 14, 80, 21, 54, 67, 40],
            backgroundColor: 'transparent',
        }
];

export default {
    name: 'month-chart',
    datasets,
    components:{
        ChartHeader,
        LineChart
    }
    }
    

</script>

<style scoped>
fieldset {
  display: block;
  margin-left: 2px;
  margin-right: 2px;
  padding-top: 0.35em;
  padding-bottom: 0.625em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  border: 2px groove (internal value);
}
</style>

