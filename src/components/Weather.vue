<template>
  <div class="container">
    <Logo></Logo>
    <h1>Panda Weather</h1>
    <div class="select-city">
      <input
          v-model="searchCity"
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
      <city-card :item="CITY_WEATHER"></city-card>
    </div>
  </div>
</template>

<script>
import Logo from "../assets/Logo"
import cities from "../assets/ua.json"
import CityCard from "@/components/CityCard";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Weather",
  data() {
    return {
      searchCity: this.CITY,
      cities: cities,
      filteredCity: [],
    }
  },
  components: {
    Logo,
    CityCard
  },
  methods: {
    ...mapActions([
      'SET_CITY',
      'SET_CITY_WEATHER'
    ]),
    findCity() {
      if (this.searchCity.length !==0) {
        this.filteredCity = this.cities.filter(item => {
          return item.city.toLowerCase().startsWith(this.searchCity.toLowerCase())
        })
      } else {
        this.filteredCity =[]
      }
    },
    setCity(city) {
      this.SET_CITY(city)
      this.searchCity = this.CITY
      this.getWeather()
      this.filteredCity =[]
    },
    getWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.CITY}&appid=a037c87fc70dc90f55aeda70b13e314c`)
      .then(resp => resp.json())
      .then( resp => {
        this.SET_CITY_WEATHER(resp)
      })
    }
  },
  computed: {
    ...mapGetters([
      'CITY',
      'CITY_WEATHER'
    ])
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