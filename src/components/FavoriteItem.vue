<template>
 <div class="favorite-item">
   <h5 class="favorite-item__title">{{ item.city.name }}</h5>
   <span @click="deleteItem" class="favorite-item__delete">x</span>
 </div>
</template>

<script>
export default {
  name: "FavoriteItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteItem() {
      this.$emit('deleteItem')
    }
  }
}
</script>

<style scoped lang="scss">
.favorite-item {
  background: rgba(218, 183, 255, 0.34);
  padding: 2px 10px;
  margin-right: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  &__delete {
    color: white;
    margin-left: 5px;
    padding: 3px 5px;
    transition-duration: .5s;
    cursor: pointer;
  }
  &__delete:hover {
    color: red;
    transition-duration: .5s;
  }
}

</style>