<template>
  <div class="favorite_list">
   <favorite-item
       v-for="(item, index) in favoriteCities"
       :key="item.city"
       :item="item"
       @deleteItem="deleteItem(index)"
   >
   </favorite-item>
 </div>
</template>

<script>
import FavoriteItem from "@/components/FavoriteItem";
import {mapActions} from "vuex";
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
  methods: {
    ...mapActions([
        'DELETE_FROM_FAVORITE'
    ]),
    deleteItem(index) {
      this.DELETE_FROM_FAVORITE(index)
    }
  },
  components: {
    FavoriteItem
  }
}
</script>

<style scoped lang="scss">
 .favorite_list {
   display: flex;
   justify-content: center;
   margin: 0 auto;
 }

</style>