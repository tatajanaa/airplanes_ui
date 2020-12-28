<template>
  <div class="chart-wrapper">
    <apexchart class="graph" :series="series" :options=" {
            chart: {
              type: 'pie',
            },
             title: {
          text: chartTitle,
          align: 'center',
          style: style,
        },
          labels: labels,
         }"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "PieChart",
  props: ['chartTitle', 'labels', 'colors', 'series'],
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

<style scoped>

</style>