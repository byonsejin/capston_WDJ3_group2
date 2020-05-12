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
            <div class="area">
              <LineChart 
                :chart-data='datacollection' 
             ></LineChart>
            </div>  
            </v-flex>
            <v-flex xs12 sm12 md12 xl11 class="center_card" style="margin-top:30px;">
            <v-layout row wrap justify-center>
                <div class="col-md-12 verify">
                    <form>
                        <fieldset>
                            <legend>영양소선택</legend>
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
import LineChart from '@/components/graph/js/YearChart.js'
import ChartHeader from '@/components/graph/ChartHeader.vue'

export default {
    components:{
        LineChart,
        ChartHeader
    },
    data(){
        return{
            datacollection:null,
            loaded: false
        }
    },
    mounted(){
        this.fillData()

    },
    methods:{
        fillData(){
            this.datacollection = {
                labels : ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep', 'Oct', 'Nov', 'Dev'],
                datasets:[
                    {
                        label:'2019',
                        // backgroundColor:'rgba(255, 0, 0, 0.2)',
                        borderColor:'lightblue',
                        pointBackgroundColor:'blue',
                        borderWidth:1,
                        pointedBorderColor:'blue',
                        data: [40, 39, 31, 11, 45, 50, 12, 45, 17, 44, 54, 20],
                        backgroundColor: 'transparent',
                        // borderColor: 'red',
                    }
                ],
                // options: {
                //     maintainAspectRatio: true,
                //     responsive: false
                //     }
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  display: true
                }
              }],
              xAxes: [ {
                gridLines: {
                  display: false
                }
              }]
            },
            legend: {
              display: true
            },
            responsive: true,
            maintainAspectRatio: false
          }
              }
        },
    }
    
}

</script>

<style scoped>
.area {
    width : 400px;
    height : 400px;
    margin : auto;
}
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

