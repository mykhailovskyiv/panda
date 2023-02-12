<template>
  <div class="error">
    <div @click="setError" class="error__button">x</div>
    <h4>{{ error }}</h4>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Error",
  props: {
    error: {
      type: String
    }
  },
  methods: {
    ...mapActions([
        'SET_ERROR'
    ]),
    setError() {
      this.SET_ERROR(null)
    }
  }
}
</script>

<style scoped lang="scss">
 .error {
   width: fit-content;
   margin: 0 auto;
   padding: 25px 15px 10px 15px;
   margin-top: 20px;
   background-color: #ffca1d;
   border-radius: 10px;
   position: relative;
   &__button {
     border: none;
     border-radius: 10px;
     padding: 2px 15px;
     cursor: pointer;
     margin-top: 5px;
     transition-duration: .5s;
     margin-left: auto;
     position: absolute;
     right: 0;
     top: 0;
     z-index: 999;
     color: white;
   }
   &__button:hover {
     color: red;
     transition-duration: .5s;
   }
 }

</style>