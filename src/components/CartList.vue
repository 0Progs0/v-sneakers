<script setup>
import CartItem from "@/components/CartItem.vue";
import {inject} from "vue";
import StatusWrapper from "@/components/StatusWrapper.vue";

const {items} = inject('items')

const onClickRemoveFromCart = (item) => {
  item.isAdded = !item.isAdded
}

</script>

<template>
  <div class="flex flex-col flex-1">
    <h2 class="text-2xl font-bold mt-2 mb-4">Все кроссовки</h2>
    <StatusWrapper v-if="items.filter(item => item.isAdded === true).length === 0" imgUrl="/images/package-icon.png"
                   title="Корзина пустая" description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."/>
    <div v-else v-auto-animate class="flex flex-col gap-4 flex-1">
      <CartItem
          v-for="item in items.filter(item => item.isAdded === true)"
          :key="item.id"
          :title="item.title"
          :price="item.price"
          :imgUrl="item.imageUrl"
          :isAdded="item.isAdded"
          :onClickRemoveFromCart="() => onClickRemoveFromCart(item)"
      />
    </div>
    <div class="mt-2">
      <div class="flex gap-2 items-center">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed border-slate-200"></div>
        <b>{{ items.filter(item => item.isAdded === true).reduce((acc, item) => acc + item.price, 0) }}</b>
      </div>
      <div class="flex gap-2 items-center">
        <span>Налог 5%:</span>
        <div class="flex-1 border-b border-dashed border-slate-200"></div>
        <b>{{ items.filter(item => item.isAdded === true).reduce((acc, item) => acc + item.price, 0) / 100 * 5 }}</b>
      </div>
      <button
          class="bg-green-400 w-full text-white font-bold mt-4 p-2 rounded-2xl cursor-pointer transition hover:bg-green-500 disabled:bg-slate-400"
          :disabled="items.filter(item => item.isAdded === true).length === 0"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>
