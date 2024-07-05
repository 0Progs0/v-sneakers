<script setup>
import CartList from "@/components/CartList.vue";

const emits = defineEmits(['toggleDrawer'])
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-slate-900/50 z-10">
    <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-6 flex">
      <div class="flex flex-col">
        <div class="flex gap-4 ">
          <img src="/images/arrow-next.svg" alt="Back"
               class="w-20 h-10 cursor-pointer rotate-180 p-2 transition bg-slate-400 hover:bg-slate-600 rounded-2xl"
               @click="emits('toggleDrawer')"
          >
          <h2 class="text-2xl font-bold mb-2">Корзина</h2>
        </div>
        <CartList/>
      </div>
    </div>
  </div>
</template>
