<script setup>
defineProps({
  title: String,
  price: Number,
  imgUrl: String,
  isFavorite: {
    type: Boolean,
  },
  isAdded: {
    type: Boolean,
  },
  onClickRemoveFromCart: Function
})
</script>

<template>
  <div class="flex justify-center items-center gap-4 border border-slate-200 rounded-2xl p-4">
    <img :src="imgUrl" alt="Sneakers" class="w-16 h-16">
    <div class="flex flex-col">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2">
        <b>{{ price }}</b>
        <img
            src="/images/close.svg" alt="Arrow" class="cursor-pointer transition opacity-40 hover:opacity-100"
            @click="onClickRemoveFromCart"/>
      </div>
    </div>
  </div>
</template>