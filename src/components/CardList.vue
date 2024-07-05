<script setup>
import CardItem from "@/components/CardItem.vue";
import NavBar from "@/components/NavBar.vue";

const props = defineProps({
  items: Array,
  filters: Object,
  onClickAddToCart: Function,
  onClickAddToFavorite: Function
})

</script>

<template>
  <div class="p-10">
    <NavBar/>
    <div v-auto-animate class="grid grid-cols-4 gap-4">
      <CardItem
          v-for="item in props.items"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :price="item.price"
          :imgUrl="item.imageUrl"
          :isFavorite="item.isFavorite"
          :onClickAddToFavorite="() => onClickAddToFavorite(item)"
          :isAdded="item.isAdded"
          :onClickAddToCart="() => onClickAddToCart(item)"
      />
    </div>
  </div>
</template>
