<script setup>
const props =defineProps({
  items: Array
})
const emits = defineEmits(['toggleDrawer'])
</script>

<template>
  <header class="flex justify-between px-8 py-4 border-b-2 border-slate-300">
    <div class="flex items-center gap-4">
      <img src="/images/logo.png" alt="logo" class="w-10"/>
      <div>
        <router-link to="/"><h2 class="text-xl font-bold uppercase">Vue Sneakers</h2></router-link>
        <p class="text-slate-400">Choose your style</p>
      </div>
    </div>
    <nav class="flex items-center">
      <ul class="flex items-center gap-10">
        <li @click="emits('toggleDrawer')" class="flex items-center gap-4 text-gray-500 hover:text-black  cursor-pointer">
          <img src="/images/cart.svg" alt="Cart">
          <b>{{ props.items.filter(item => item.isAdded === true).reduce((acc, item) => acc + item.price, 0) }}</b>
        </li>
        <li class="flex items-center gap-4 text-gray-500  hover:text-black cursor-pointer">
          <img src="/images/heart.svg" alt="User">
          <router-link to="/favorites">Закладки</router-link>
        </li>
        <li class="flex items-center gap-4 text-gray-500 hover:text-black cursor-pointer">
          <img src="/images/profile.svg" alt="Menu">
          <span>Профиль</span>
        </li>
      </ul>
    </nav>
  </header>
</template>