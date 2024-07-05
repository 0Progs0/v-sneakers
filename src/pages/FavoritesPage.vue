<script setup>
import CardList from "@/components/CardList.vue";
import {inject} from "vue";
import FavoritesList from "@/components/FavoritesList.vue";

const {items, onClickAddToCart, onClickAddToFavorite} = inject("items")
</script>

<template>
  <FavoritesList :items="items" @click-add-to-cart="onClickAddToCart" @click-add-to-favorite="onClickAddToFavorite"/>
</template>
