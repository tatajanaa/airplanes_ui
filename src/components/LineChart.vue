<template>
  <div class="chart-wrapper">
    <apexchart class="graph"
               :series="series"
               :options="{
        xaxis: {
          type:'datetime',
          labels: {
            format: 'MMM' },
          categories: [ '01-01-2013 GMT', '02-01-2013 GMT', '03-01-2013 GMT','04-01-2013 GMT', '05-01-2013 GMT', '06-01-2013 GMT', '07-01-2013 GMT', '08-01-2013 GMT', '09-01-2013 GMT', '10-01-2013 GMT', '11-01-2013 GMT', '12-01-2013 GMT',
      ],
        },
        chart: {
          type: 'line',
          toolbar: {
                show: true
              },
             zoom: {
                enabled: false
              }
        },
        title: {
          text: this.chartTitle,
          align: 'center',
          style: style,
        },
        colors: this.colors
      }">
    </apexchart>
  </div>
</template>

<script>
//import moment from 'moment'
export default {
  name: "LineChart",
  props: ['chartTitle', 'colors', 'series'],
  data() {
    return {
      style: {
        fontSize: '15px',
        color: '#4b4d54',
        floating: true,
        fontWeight: 400,
        fontFamily: 'Helvetica',
      },
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>