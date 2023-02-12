<template>
  <div class="select-city">
    <input
        v-model="searchCity"
        @input="findCity"
        class="select-city__input"
        placeholder="Enter city name"
    >
    <ul class="select-city__list">
      <li
          v-for="item in filteredCity.slice(0, 3)"
          :key="item.index"
          @click="setCity(item.city)"
          class="select-city__item"
      >
        {{ item.city }}
      </li>
    </ul>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "CitySelect",
  data() {
    return {
      searchCity: '',
      filteredCity: [],
    }
  },
  props: {
    cities: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'SET_CITY',
      'SET_CITY_WEATHER',
      'GET_WEATHER',
      'GET_USER_LOCATION'
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
      this.$router.push(`/${city}`)
      this.GET_WEATHER(city)
      this.filteredCity =[]
    },
  },
  computed: {
    ...mapGetters([
      'CITY',
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
    top: 15px;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    background-color: white;
    border-radius: 15px;
  }
  &__item {
    padding-top: 5px;
    border-radius: 15px;
    transition-duration: .5s;
  }
  &__item:hover {
    background: rgba(218, 183, 255, 0.34);
    transition-duration: .5s;
  }
  &__input {
    padding: 5px 5px 5px 10px;
    border-radius: 15px;
    border: none;
  }
}
</style>