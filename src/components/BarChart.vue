<template>
  <div class="chart-wrapper">
    <apexchart class="graph"
               :series="series"
               :options="{
        xaxis: {
          categories: categories,
           labels: {
                rotate: -45
              },
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