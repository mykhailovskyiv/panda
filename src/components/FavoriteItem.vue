<template>
  <div class="favorite-item">
    <div @click="selectFavoriteCity(item.city.name)" class="favorite-item__container" >
      <h5 class="favorite-item__title">{{ item.city.name }}</h5>
    </div>
    <span @click="deleteItem" class="favorite-item__delete">&times;</span>
    <modal v-if="modal" :item="item" @acceptDelete="acceptDelete" @declineDelete="declineDelete"></modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import {mapActions} from "vuex";

export default {
  name: "FavoriteItem",
  data() {
    return {
      modal: false
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  components: {
    Modal
  },
  methods: {
    ...mapActions([
      'SET_CITY',
      'GET_WEATHER'
    ]),
    deleteItem() {
      this.modal = true
    },
    acceptDelete() {
      this.$emit('deleteItem')
      this.modal = false
    },
    declineDelete() {
      this.modal = false
    },
    selectFavoriteCity(city) {
      this.SET_CITY(city)
      this.$router.push(`/${city}`)
      this.GET_WEATHER(city)

    }
  }
}
</script>

<style scoped lang="scss">
.favorite-item {
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-top: 5px;
  &__container {
    background: rgba(71, 1, 142, 0.49);
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 10px;
    transition: .5s;
    cursor: pointer;
  }
  &__container:hover {
    background-color: rgba(139, 48, 236, 0.34);
    transition: .5s;
  }
  &__delete {
    padding: 0 5px;
    transition-duration: .5s;
    cursor: pointer;
    font-size: larger;
  }
  &__delete:hover {
    color: red;
    transition-duration: .5s;
  }
}


</style>