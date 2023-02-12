<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <Logo class="logo"></Logo>
        <h1>Panda Weather</h1>
      </div>
      <city-select :cities="cities"></city-select>
    </div>
  </header>
  <div class="container">
    <favorite-list v-if="FAVORITE_CITIES.length" :favorite-cities="FAVORITE_CITIES"></favorite-list>
    <div class="card-list">
      <city-card v-if="CITY_WEATHER" :item="CITY_WEATHER"></city-card>
    </div>
    <div class="chart" v-if="CITY_WEATHER">
      <Chart :item="CITY_WEATHER"></Chart>
    </div>
  </div>
</template>

<script>
import Logo from "../assets/Logo"
import cities from "../assets/ua.json"
import CityCard from "@/components/CityCard";
import CitySelect from "@/components/CitySelect";
import Chart from "@/components/Chart";
import FavoriteList from "@/components/FavoriteList";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Weather",
  data() {
    return {
      cities: cities,
    }
  },
  components: {
    Chart,
    CitySelect,
    Logo,
    CityCard,
    FavoriteList
  },
  mounted() {
    this.GET_USER_LOCATION()
    this.setFavorites()
  },
  methods: {
    ...mapActions([
      'GET_USER_LOCATION',
      'GET_WEATHER',
      'ADD_TO_FAVORITE'
    ]),
    setFavorites() {
      JSON.parse(localStorage.favorireCities).map(item => {
        this.ADD_TO_FAVORITE(item)
      })
    }
  },
  watch: {
    CITY() {
      if (this.CITY !== this.$route.params.city) {
        this.$router.push(`/${this.CITY}`)
      }
    }
  },
  computed: {
    ...mapGetters([
      'CITY_WEATHER',
      'CITY',
      'FAVORITE_CITIES',
      'LOADER'
    ])
  },
}
</script>

<style scoped lang="scss">
  .header {
    background: #242323;
    margin-bottom: 20px;
    &__container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: start;
      align-items: center;
    }
    &__content {
      display: flex;
      align-items: center;
      h1 {
        color: white;
      }
      .logo {
        margin-right: 10px;
      }
    }

  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>