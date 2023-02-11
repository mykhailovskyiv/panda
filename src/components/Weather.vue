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
import {mapGetters} from 'vuex'

export default {
  name: "Weather",
  data() {
    return {
      cities: cities
    }
  },
  components: {
    Chart,
    CitySelect,
    Logo,
    CityCard
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'CITY_WEATHER'
    ])
  }

}
</script>

<style scoped lang="scss">
  .header {
    background: #242323;
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
</style>