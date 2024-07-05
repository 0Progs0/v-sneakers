<script setup>

defineProps({
  id: {
    type: Number,
  },
  imgUrl: {
    type: String,
    default: '/images/sneakers/sneakers-1.jpg'
  },
  title: {
    type: String,
    default: 'Мужские кроссовки'
  },
  price: {
    type: Number,
    default: 12999
  },
  isFavorite: {
    type: Boolean,
  },
  isAdded: {
    type: Boolean,
  },
  onClickAddToCart: Function,
  onClickAddToFavorite: Function,
})


</script>

<template>
  <div class="border border-slate-100 rounded-3xl mt-4 cursor-pointer transition hover:translate-y-2 hover:shadow-xl">
    <div class="relative flex flex-col justify-center items-center">
      <img
          :src="!isFavorite ? '/images/like-1.svg' : '/images/like-2.svg'"
          alt="Like"
          class="absolute top-4 left-4"
          @click="onClickAddToFavorite"
      />
      <img :src="imgUrl" alt="Sneaker"/>
      <p class="text-center">{{ title }}</p>
    </div>
    <div class="flex justify-between p-4">
      <div class="flex flex-col">
        <span>Цена:</span>
        <b>{{ price }}</b>
      </div>
      <img
          :src="isAdded ? '/images/checked.svg' : '/images/plus.svg'"
          alt="Plus"
          class="w-10 h-10"
          @click="onClickAddToCart"
      />
    </div>
  </div>
</template>