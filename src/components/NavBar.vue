<script setup>
import {inject} from "vue";

const {onChangeSort, onChangeSearch} = inject("items")
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-2xl font-bold mb-8">Все кроссовки</h2>
    <div class="relative">
      <img src="/images/search.svg" alt="Search"
           class="absolute top-3 left-2 cursor-pointer transition opacity-40 hover:opacity-100"/>
      <input
          @input="onChangeSearch"
          type="text"
          class="border border-slate-200 rounded-2xl outline-none px-7 py-2 mr-1 focus:border-slate-400"
          placeholder="Поиск..."/>
      <select
          @change="onChangeSort"
          class="border border-slate-200 rounded-2xl outline-none px-2 py-2 focus:border-slate-400"
      >
        <option value="title">По названию</option>
        <option value="-price">Сначала дорогие</option>
        <option value="price">Сначала дешевые</option>
      </select>
    </div>
  </div>
</template>

<style scoped>

</style>