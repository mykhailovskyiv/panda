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
  background: rgba(71, 1, 142, 0.49);
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  align-items: flex-end;
  transition: .5s;
  &__delete {
    color: white;
    margin-left: 5px;
    padding: 0 5px;
    transition-duration: .5s;
    cursor: pointer;
  }
  &__delete:hover {
    color: red;
    transition-duration: .5s;
  }
  }
  .favorite-item:hover {
  background-color: rgba(139, 48, 236, 0.34);
  transition: .5s;
  }

</style>