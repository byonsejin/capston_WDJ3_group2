<template>
    <div >
        <chart-header></chart-header>
        <v-container 
        fluid grid-list-lg 
        class="my-1">
        <v-layout 
            justify-center 
            fill-height 
            wrap class="pa-5"
            >
            <v-col>
            <v-toolbar flat color="white">
                <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                Today
                </v-btn>
                <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon small>mdi-chevron-right</v-icon>
                </v-btn>
                <v-toolbar-title>{{ title }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu bottom right>
                <template v-slot:activator="{ on }">
                    <v-btn
                    outlined
                    color="grey darken-2"
                    v-on="on"
                    >
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="type = 'day'">
                    <v-list-item-title>Day</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'week'">
                    <v-list-item-title>Week</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'month'">
                    <v-list-item-title>Month</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = '4day'">
                    <v-list-item-title>4 days</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </v-toolbar>
            <v-flex>
            <bar-chart
                :width="300"
                :height="100"
                :labels="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
                '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']"
                :datasets="displayedDatasets"
                :options="$options.options"
            ></bar-chart>
            </v-flex>
            </v-col>
            <v-flex xs12 sm12 md12 xl11 class="center_card">
            <v-layout row wrap justify-center>
                <div class="col-md-12 verify">
                    <form>
                        <fieldset>
                            <legend>영양소선택</legend>
                            <input type="checkbox" :value="1" v-model="selectAyo"/>
                            <label>칼로리&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" :value="2" v-model="selectAyo"/>
                            <label>탄수화물&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" :value="3" v-model="selectAyo"/>
                            <label>단백질&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" :value="4" v-model="selectAyo"/>
                            <label>지방&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" :value="5" v-model="selectAyo"/>
                            <label>콜레스테롤&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" :value="6" v-model="selectAyo"/>
                            <label>식이섬유&nbsp;&nbsp;&nbsp;</label>
                            <input type="checkbox" :value="7" v-model="selectAyo"/>
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
import BarChart from './BarChart.vue'
import ChartHeader from './ChartHeader.vue'

const datasets = {
        1: {
            label: '칼로리(kcal)',
            backgroundColor:'rgba(255, 0, 0, 0.2)',
            borderColor: 'lightblue',
            pointBackgroundColor: 'blue',
            borderWidth: 1,
            pointedBorderColor: 'blue',
            data: [2000, 2300, 2130, 2220, 1890, 1500, 1800, 1780, 2000, 2300, 1200, 2140],
            // backgroundColor: 'transparent',
        },
        2: {
            label: '탄수화물(g)',
            // backgroundColor:'rgba(255, 0, 0, 0.2)',
            borderColor: 'lightred',
            pointBackgroundColor: 'red',
            borderWidth: 1,
            pointedBorderColor: 'red',
            data: [530, 440, 220, 190, 300, 200, 140, 800, 210, 540, 670, 400],
            // backgroundColor: 'transparent',
        }
};

export default {
    name: 'day-chart',
    datasets,
    components:{
        ChartHeader,
        BarChart
    },
    data() {
    return {
      // Select both years by default.
      selectAyo: [1, 2],
      focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    };
  },
  computed: {
    // The datasets to display.
    displayedDatasets() {
      return this.selectAyo.map(ayo => datasets[ayo]);
    },
    title () {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }

      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth

      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear

      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)

      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`
        case 'week':
        case '4day':
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case 'day':
          return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long',
      })
    },
},
mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: this.formatDate(first, !allDay),
          end: this.formatDate(second, !allDay),
          color: this.colors[this.rnd(0, this.colors.length - 1)],
        })
      }

      this.start = start
      this.end = end
      this.events = events
    },
    nth (d) {
      return d > 3 && d < 21
        ? 'th'
        : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    formatDate (a, withTime) {
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    },
  },
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

