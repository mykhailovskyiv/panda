<template>
  <div class="modal">
    <div class="modal__content">
      <span @click="declineDelete" class="close">&times;</span>
      <span>are you sure you want to remove the city of <b>{{ this.item.city.name }}</b> from your favorites list</span>
      <div class="modal__buttons">
        <div @click="acceptDelete" class="modal__button">Yes</div>
        <div @click="declineDelete" class="modal__button">No</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Modal",
  props:{
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    acceptDelete() {
      this.$emit('acceptDelete')
    },
    declineDelete() {
      this.$emit('declineDelete')
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 999;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  &__content {
    display: flex;
    flex-direction: column;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    position: relative;
  }
  &__buttons {
    display: flex;
    justify-content: center;
  }
  &__button {
    margin-top: 10px;
    padding: 5px;
    cursor: pointer;
    border-radius: 10px;
    transition-duration: .5s;
    margin-right: 5px;
  }
  &__button:hover{
    background-color: rgba(139, 48, 236, 0.34);
    transition-duration: .5s;
  }
}

.close {
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  right: 15px;
  top: 5px;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition-duration: .5s;
}

</style>