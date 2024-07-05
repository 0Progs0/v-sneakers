<script setup>
defineProps({
  imgUrl: String,
  title: String,
  description: String
})
</script>

<template>
  <div class="flex flex-col items-center flex-1 justify-center text-center">
    <img :src="imgUrl" alt="Status" height="70" width="70" class="">
    <h2 class="mt-4 text-xl font-medium">{{title}}</h2>
    <p class="mt-2 text-slate-500">{{description}}</p>
  </div>

</template>

<style scoped>

</style>