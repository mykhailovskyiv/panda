<template>
 <div class="card" v-if="item">
   <div class="card__container">
     <h5 class="card__title">{{ item.city.name }}</h5>
     <img v-if="getItemWeather().main === 'Clear sky' " src="http://openweathermap.org/img/wn/01d@2x.png" alt="clear sky">
     <img v-if="getItemWeather().main === 'Clouds' " src="http://openweathermap.org/img/wn/03d@2x.png" alt="Clouds">
     <img v-if="getItemWeather().main === 'Rain' " src="http://openweathermap.org/img/wn/10d@2x.png" alt="Rain">
     <img v-if="getItemWeather().main === 'Thunderstorm' " src="http://openweathermap.org/img/wn/11d@2x.png" alt="Thunderstorm">
     <img v-if="getItemWeather().main === 'Snow' " src="http://openweathermap.org/img/wn/13d@2x.png" alt="Snow">

     <p class="card__description">Temp {{ temperatureOnCelsius(item.list[0].main.temp) }}°C</p>
     <p class="card__description">Feels like {{ temperatureOnCelsius(item.list[0].main.feels_like) }}°C</p>
     <p class="card__description">{{ getItemWeather().main }}</p>
     <p class="card__description">{{ getItemWeather().description }}</p>
     <button @click="addToFavorite" class="card__button">Add to favorite</button>
   </div>
 </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "CityCard",
  props: {
    item :{
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'ADD_TO_FAVORITE'
    ]),
    addToFavorite() {
      this.ADD_TO_FAVORITE(this.item)
    },
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
    background: #f5fbff;
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
  &__button {
    background-color: rgba(71, 1, 142, 0.49);
    border: none;
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
    transition: .5s;
  }
  &__button:hover {
    background-color: rgba(139, 48, 236, 0.34);
    transition: .5s;
  }
}

</style>