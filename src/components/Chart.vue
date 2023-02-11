<template>
  <div>
    <canvas id="weather-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
  name: "Chart",
  data() {
    return {
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
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
    }
  },
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
      new Chart(ctx, {type: 'bar', data: this.data})
    },
    updateChart() {
      // const labels = this.item.list.map(item => item.dt_txt)
      // const values = this.item.list.map(item => item.main.temp)
    }
  }
}

</script>
