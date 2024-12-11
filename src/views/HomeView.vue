<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2>
      <h2>{{ store.count }}</h2>
      <Swiper
        :slides-per-view="4"
        :modules="modules"
        :space-between="30"
        :navigation="{
          prevEl: '.prev',
          nextEl: '.next',
        }"
      >
        <SwiperSlide v-for="item in products?.products" :key="item">
          <div class="group relative">
            <img
              :src="item.thumbnail"
              alt="Front of men&#039;s Basic Tee in black."
              class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ item.title }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p class="text-sm font-medium text-gray-900">${{ item.price }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button class="prev">prev</button>
      <button class="next">next</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/store";
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
let store = useStore();
let modules = [Navigation];

let products = ref({});
async function getAllProducts() {
  let res = await fetch("https://dummyjson.com/products");
  let data = await res.json();
  products.value = data;
}
onMounted(() => {
  getAllProducts();
});
</script>

<style lang="scss" scoped></style>
