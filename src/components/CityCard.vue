<template>
 <div class="card" v-if="item">
   <h5>{{ item.name }}</h5>
   <p>{{ getItemWeather().main }}</p>
   <p>{{ getItemWeather().description }}</p>
 </div>
</template>

<script>
export default {
  name: "CityCard",
  props: {
    item :{
      type: Object
    }
  },
  methods: {
    getItemWeather() {
      return this.item.weather[0]
    }
  }
}
</script>

<style scoped>

</style>