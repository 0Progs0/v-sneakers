<script setup>
import CardItem from "@/components/CardItem.vue";
import StatusWrapper from "@/components/StatusWrapper.vue";
import NavBar from "@/components/NavBar.vue";

const props = defineProps({
  items: Array,
  filters: Object,
  onChangeSort: Function,
  onChangeSearch: Function,
  onClickAddToCart: Function,
  onClickAddToFavorite: Function
})

</script>

<template>
  <div class="p-10">
    <NavBar/>
    <StatusWrapper v-if="items.filter(item => item.isFavorite === true).length === 0" imgUrl="/images/emoji-1.png"
                   title="Тут пусто..." description="Добавьте хотя бы одну пару кроссовок в избранное."/>
    <div v-else v-auto-animate class="grid grid-cols-4 gap-4">
      <CardItem
          v-for="item in props.items.filter(item => item.isFavorite === true)"
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
