<template>
  <div>
    <canvas class="chart" id="weather-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
  name: "Chart",
  data() {
    return {
      Chart: null
    }
  },
  props: {
    item :{
      type: Object,
      required: true
    },
  },
  mounted() {
    this.getChart()
  },
  watch: {
    item() {
      this.Chart.destroy()
      this.getChart()
    }
  },
  methods: {
    getChart() {
      const ctx = document.getElementById('weather-chart');
      const labels = this.item.list.map(item => this.dateFormat(item.dt_txt))
      const values = this.item.list.map(item => this.temperatureOnCelsius(item.main.temp))
      this.Chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Temp',
            data: values,
            pointRadius: 2,
            borderColor: "rgba(71, 1, 142, 0.49)",
          }]
        },
      });
    },
    temperatureOnCelsius(value) {
      return Math.ceil(value - 273.15)
    },
    dateFormat(date) {
      let options = { day: 'numeric', hour: '2-digit' };
      let newDate  = new Date(date);
      return new Intl.DateTimeFormat('en-US', options).format(newDate)
    }
  },
}

</script>

<style lang="scss" scoped>
 .chart {
   width: 1500px;
   height: 700px;
 }
</style>
