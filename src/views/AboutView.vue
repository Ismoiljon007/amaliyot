<template>
  <img v-for="img in detail?.images" :key="img" :src="img" alt="" />
  <img :src="detail?.thumbnail" alt="" />
  <!-- 
  Pinia, Vue 3-da holatni boshqarish (state management) uchun ishlatiladi. Vuex kutubxonasiga o'xshash bo'lsa-da, Pinia yanada sodda va eng yaxshi amaliyotlarni qo'llab-quvvatlaydi. Pinia ning asosiy xususiyatlari:

  Reaktiv holat (reactive state): Pinia doimiy ravishda reaktiv holatlarni boshqaradi.
  Modul ko'rinishida (store-based): Har bir store alohida holat va o'zgarishlarni boshqaradi.
  Yangi API: Vue 3 ning Composition API ga mos keladi.
   
   -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
let { id } = useRoute().params;

let detail = ref({});
async function getDetail() {
  let res = await fetch(`https://dummyjson.com/products/${id}`);
  let data = await res.json();
  detail.value = data;
}
getDetail();
</script>

<style lang="scss" scoped></style>
