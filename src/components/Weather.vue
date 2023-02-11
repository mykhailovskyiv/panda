<template>
  <div class="container">
    <Logo></Logo>
    <h1>Panda Weather</h1>
    <div class="select-city">
      <input
          v-model="city"
          @input="findCity"
          class="select-city__input"
      >
      <ul class="select-city__list">
        <li
            v-for="item in filteredCity.slice(0, 3)"
            :key="item.index"
            @click="setCity(item.city)"
            class="select-city__item"
        >
          {{item.city}}
        </li>
      </ul>
    </div>
    <div class="card-list">
      <city-card :item="cityWeather"></city-card>
    </div>
  </div>
</template>

<script>
import Logo from "../assets/Logo"
import cities from "../assets/ua.json"
import CityCard from "@/components/CityCard";

export default {
  name: "Weather",
  data() {
    return {
      city: '',
      cities: cities,
      filteredCity: [],
      cityWeather: null
    }
  },
  components: {
    Logo,
    CityCard
  },
  methods: {
    findCity() {
      if (this.city.length !==0) {
        this.filteredCity = this.cities.filter(item => {
          return item.city.toLowerCase().startsWith(this.city.toLowerCase())
        })
      } else {
        this.filteredCity =[]
      }
    },
    setCity(city) {
      this.city = city
      this.getWeather()
      this.filteredCity =[]
    },
    getWeather() {
      console.log(this.city)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=a037c87fc70dc90f55aeda70b13e314c`)
      .then(resp => resp.json())
      .then( resp => {
        this.cityWeather = resp
      })
    }
  }

}
</script>

<style scoped lang="scss">
  .select-city {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    margin: 0 auto;
    position: relative;
    &__list {
      position: absolute;
      top: 10px;
      list-style: none;
      display: flex;
      flex-direction: column;
      padding: 0;
    }
  }
</style>