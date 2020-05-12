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
            <canvas id="month-chart" width="800px" height="400px"></canvas>
            </v-flex>
            <v-flex xs12 sm12 md12 xl11 class="center_card" style="margin-top:30px;">
            <v-layout row wrap justify-center>
                <div class="col-md-12 verify">
                    <form>
                        <fieldset>
                            <legend>영양소선택</legend>
                            <button id="btn1">Option 1</button>
                            <button id="btn2">Option 2</button>
                            <input type="radio" name ="ayo" id="a" value="a" onclick="changeA()" />
                            <label>칼로리&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="b" value="b" />
                            <label>탄수화물&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="c" value="c" />
                            <label>단백질&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="d" value="d" />
                            <label>지방&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="e" value="e" />
                            <label>콜레스테롤&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="f" value="f" />
                            <label>식이섬유&nbsp;&nbsp;&nbsp;</label>
                            <input type="radio" name ="ayo" id="g" value="g" />
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
import Chart from 'chart.js'
import monthChartData from '@/components/graph/js/chart-data.js'
import ChartHeader from '@/components/graph/ChartHeader.vue'

export default {
    components:{
        ChartHeader
    },
    data(){
        return{
            monthChartData:monthChartData,
        }    
    },
    methods:{
       createChart(chartId, chartData){
           const ctx = document.getElementById(chartId)
           const myChart = new Chart(ctx,{
               type:chartData.type,
               data:chartData.data,
               options:chartData.options,
           });
       }
    },
    mounted(){
        this.createChart('month-chart', this.monthChartData);
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

