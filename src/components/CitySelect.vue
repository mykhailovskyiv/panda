<template>
  <div class="select-city">
    <input
        v-model="city"
        @input="findCity"
        class="select-city__input"
    >
    <ul class="select-city__list">
      <li
          v-for="item in filteredCities.slice(0, 3)"
          :key="item.index"
          @click="setCity(item.city)"
          class="select-city__item"
      >
        {{item.city}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "CitySelect",
  data() {
    return {
      city: '',
      filteredCities: [],
    }
  },
  methods: {
    findCity() {
      if (this.city.length !==0) {
        this.filteredCities = this.cities.filter(item => {
          return item.city.toLowerCase().startsWith(this.city.toLowerCase())
        })
      } else {
        this.filteredCities =[]
      }
      this.$emit('filtered-cities',this.filteredCities)
    },
    setCity(city) {
      this.city = city
      this.getWeather()
      this.filteredCities =[]
    },
    getWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=a037c87fc70dc90f55aeda70b13e314c`)
          .then(resp => resp.json())
          .then( resp => {
            this.$emit('city-weather', resp)
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