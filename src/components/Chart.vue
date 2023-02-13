<template>
  <div class="chart">
    <div class="chart__container">
      <canvas class="canvas" id="weather-chart"></canvas>
    </div>
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
            backgroundColor: "rgba(71, 1, 142, 0.49)",
            fill: 'origin'
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
        }
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
    overflow-x: scroll;
    &__container {
      width: 1600px;
    }
    canvas {
      width: 1600px;
    }
  }
  @media(max-width: 1200px) {
    .chart {
      &__container {
        width: 1200px;
      }
      canvas {
        width: 1200px;
      }
    }
  }
  @media(max-width: 768px) {
    .chart {
      &__container {
        width: 800px;
      }
      canvas {
        width: 800px;
      }
    }
  }
</style>
