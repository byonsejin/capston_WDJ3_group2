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
                            <input type="radio" name ="ayo" id="a" value="a" />
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
import LineChart from './YearChart.js'
import ChartHeader from './ChartHeader.vue'

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
                labels : [2018,2019,2020],
                datasets:[
                    {
                        label:'ayo',
                        backgroundColor:'rgba(255, 0, 0, 0.2)',
                        borderColor:'lightred',
                        pointBackgroundColor:'red',
                        borderWidth:1,
                        pointedBorderColor:'red',
                        data: [300,350,400]
                    }
                ]
            }
        }
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

