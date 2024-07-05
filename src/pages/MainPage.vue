<script setup>
import CardList from "@/components/CardList.vue";
import {inject} from "vue";

const {items, onClickAddToCart, onClickAddToFavorite} = inject("items")
</script>

<template>
  <CardList :items="items" @click-add-to-cart="onClickAddToCart" @click-add-to-favorite="onClickAddToFavorite"/>
</template>
