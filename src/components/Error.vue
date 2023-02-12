<template>
  <div class="error">
    <h4>{{ error }}</h4>
    <span class="error__button">ok</span>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    error: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
 .error {
   width: fit-content;
   margin: 0 auto;
   padding: 5px 15px;
   margin-top: 20px;
   background-color: #fd4040;
   border-radius: 10px;
   &__button {

     border: none;
     border-radius: 10px;
     padding: 2px 15px;
     cursor: pointer;
     color: white;
     margin-top: 5px;
     transition-duration: .5s;   }
   &__button:hover {
     color: #62ff62;
     transition-duration: .5s;
   }
 }

</style>