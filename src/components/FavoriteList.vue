<template>
  <div>
    <h4>List of Favorites</h4>
    <div class="favorite_list">
      <favorite-item
          v-for="(item, index) in favoriteCities"
          :key="item.city"
          :item="item"
          @deleteItem="deleteItem(index)"
      >
      </favorite-item>
    </div>
  </div>

</template>

<script>
import FavoriteItem from "@/components/FavoriteItem";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "FavoriteList",
  props: {
    favoriteCities: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    FavoriteItem
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_FAVORITE',
      'SET_CITY',
      'GET_WEATHER',
      'SET_LOADER'
    ]),
    deleteItem(index) {
      this.DELETE_FROM_FAVORITE(index)
    },
  },
  computed: {
    ...mapGetters([
      'LOADER'
    ])
  }
}
</script>

<style scoped lang="scss">
 .favorite_list {
   display: flex;
   justify-content: center;
   margin: 0 auto;
   flex-wrap: wrap;
 }

</style>