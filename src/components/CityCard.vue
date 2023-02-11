<template>
 <div class="card" v-if="item">
   <div class="card__container">
     <h5>{{ item.name }}</h5>
     <p>Temp: {{ temperatureOnCelsius(item.main.temp) }}</p>
     <p>Feels like {{ temperatureOnCelsius(item.main.feels_like) }}</p>
     <p>{{ getItemWeather().main }}</p>
     <p>{{ getItemWeather().description }}</p>
   </div>
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
  max-width: 200px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 35px;
  background-color: black;
  &__container {
    background: white;
    border-radius: 30px;
    padding-bottom: 10px;
  }
}

</style>