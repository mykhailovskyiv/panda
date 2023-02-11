<template>
  <div class="container">
    <Logo></Logo>
    <h1>Panda Weather</h1>
    <div class="select-city">
      <input autocomplete="true" v-model="city" @input="findCity">
      <ul>
        <li v-for="item in filteredCity" :key="item.index">{{item.city}}</li>
      </ul>

    </div>
  </div>
</template>

<script>
import Logo from "../assets/Logo"
import cities from "../assets/ua.json"

export default {
  name: "Weather",
  data() {
    return {
      city: '',
      cities: cities,
      filteredCity: []
    }
  },
  components: {
    Logo
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
    }
  }

}
</script>

<style scoped>

</style>