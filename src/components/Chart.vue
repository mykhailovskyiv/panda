<template>
  <div>
    <canvas id="weather-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
  name: "Chart",
  props: {
    item :{
      type: Object,
      required: true
    }
  },
  mounted() {
    this.getChart()
  },
  methods: {
    getChart() {
      const ctx = document.getElementById('weather-chart');
      const labels = this.item.list.map(item => item.dt_txt)
      const values = this.item.list.map(item => this.temperatureOnCelsius(item.main.temp))
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Temp',
            data: values,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    },
    temperatureOnCelsius(value) {
      return Math.ceil(value - 273.15)
    }
  },
}

</script>
