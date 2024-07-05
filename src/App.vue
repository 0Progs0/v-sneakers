<script setup>
import Wrapper from "@/components/Wrapper.vue";
import Header from "@/components/Header.vue";
import {onMounted, provide, reactive, ref, watch} from "vue";
import Drawer from "@/components/Drawer.vue";
import axios from "axios";
import debounce from "lodash.debounce";

const items = ref([])
const filters = reactive({
  search: "",
  sortBy: "title"
})
const drawerVisible = ref(false)

const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value
}
const onChangeSort = (event) => {
  filters.sortBy = event.target.value
}
const onChangeSearch = debounce((event) => {
  filters.search = event.target.value
},300)

const onClickAddToCart = (item) => {
  item.isAdded = !item.isAdded
}

const onClickAddToFavorite = async (item) => {
  // if (item.isFavorite) {
  //   await axios.delete(`https://604781a0efa572c1.mokky.dev/favorites/${item.favoriteId}`)
  // }
  // else {
  //   await axios.post(`https://604781a0efa572c1.mokky.dev/favorites`, {
  //     itemId: item.id
  //   })
  // }
  item.isFavorite = !item.isFavorite
}
const fetchSneakers = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }
    if (filters.search) {
      params.title = `*${filters.search}*`
    }
    const {data} = await axios.get(`https://604781a0efa572c1.mokky.dev/items?id[from]=1&id[to]=9`, {
      params
    })
    items.value = data.map(item => ({
      ...item,
      isFavorite: false,
      isAdded: false
    }))
  } catch (e) {
    console.log(e)
  }
}

const fetchFavorites = async () => {
  try {
    const {data: favorites} = await axios.get(`https://604781a0efa572c1.mokky.dev/favorites`)
    items.value = items.value.map(item => {
      const favorite = favorites.find(favorite => favorite.itemId === item.id)
      if (!favorite) {
        return item
      }
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (e) {
    console.log(e)
  }
}


onMounted(async () => {
  await fetchSneakers()
  await fetchFavorites()
})

watch(filters, fetchSneakers)

provide("items", {
  items,
  filters,
  onChangeSort,
  onChangeSearch,
  onClickAddToCart,
  onClickAddToFavorite
})
</script>

<template>
  <Wrapper>
    <Drawer v-if="drawerVisible" @toggle-drawer="toggleDrawer"/>
    <Header @toggle-drawer="toggleDrawer" :items="items"/>
    <router-view></router-view>
  </Wrapper>
</template>

