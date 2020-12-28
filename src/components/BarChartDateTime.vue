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
          type: 'bar',
          stacked: stacked,
           stackType: stackType,
        },
        title: {
          text: chartTitle,
          align: 'center',
          style: style,
        },
        stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
        plotOptions: {
              bar: barOptions,
            },
        dataLabels: {
              enabled: dataLabelsVisibility
            },
      }">
    </apexchart>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  props: ['chartTitle', 'barOptions', 'stackType', 'dataLabelsVisibility', 'stacked','categories', 'colors', 'series'],
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
}
</script>

<style scoped >

</style>