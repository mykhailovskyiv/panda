<template>
 <div class="card" v-if="item">
   <div class="card__container">
     <h5 class="card__title">{{ item.city.name }}</h5>
     <p class="card__description">Temp: {{ temperatureOnCelsius(item.list[0].main.temp) }}</p>
     <p class="card__description">Feels like {{ temperatureOnCelsius(item.list[0].main.feels_like) }}</p>
     <p class="card__description">{{ getItemWeather().main }}</p>
     <p class="card__description">{{ getItemWeather().description }}</p>
   </div>
 </div>
</template>

<script>
export default {
  name: "CityCard",
  props: {
    item :{
      type: Object,
      required: true
    }
  },
  methods: {
    getItemWeather() {
      return this.item.list[0].weather[0]
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
  &__title {
    padding: 15px 0;
    font-size: 16px;
  }
  &__description {
   padding-top: 5px;
  }
}

</style>