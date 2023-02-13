<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <Logo class="header__logo"></Logo>
        <h1 class="header__text">Panda Weather</h1>
      </div>
      <city-select :cities="cities"></city-select>
    </div>
  </header>
  <div class="container">
    <favorite-list v-if="FAVORITE_CITIES.length" :favorite-cities="FAVORITE_CITIES"></favorite-list>
    <error v-if="ERROR" :error="ERROR"></error>
    <city-card v-if="CITY_WEATHER" :item="CITY_WEATHER"></city-card>
    <Chart v-if="CITY_WEATHER" :item="CITY_WEATHER"></Chart>
  </div>
</template>

<script>
import Logo from "../assets/Logo"
import cities from "../assets/ua.json"
import CityCard from "@/components/CityCard";
import CitySelect from "@/components/CitySelect";
import Chart from "@/components/Chart";
import FavoriteList from "@/components/FavoriteList";
import Error from "@/components/Error";
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
    FavoriteList,
    Error
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
      'LOADER',
      'ERROR'
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
      flex-direction: column;
      justify-content: start;
      align-items: center;
      padding-bottom: 15px;
    }
    &__content {
      display: flex;
      align-items: center;
    }
    &__logo {
      margin-right: 10px;
    }
    &__text {
      color: white;
    }

  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  @media(max-width: 1200px) {
    .header {
      &__container {
        max-width: 90%;
      }
      &__logo {
        margin-right: 5px;
      }
      &__text {
        font-size: 24px;
      }
    }
    .container {
      max-width: 90%;
    }
  }
</style>