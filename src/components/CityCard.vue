<template>
 <div class="card" v-if="item">
   <h5>{{ item.name }}</h5>
   <p>{{ getItemWeather().main }}</p>
   <p>{{ getItemWeather().description }}</p>
   <p>{{ temperatureOnCelsius(item.main.temp) }}</p>
 </div>
</template>

<script>
export default {
  name: "CityCard",
  props: {
    item :{
      type: Object
    }
  },
  methods: {
    getItemWeather() {
      return this.item.weather[0]
    },
    temperatureOnCelsius(value) {
      return Math.ceil(value - 273.15)
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

</style>