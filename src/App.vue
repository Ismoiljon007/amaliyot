<script setup></script>

<template>
  <header>
    <div class="mx-auto max-w-2xl px-4 py-3 sm:px-6 lg:max-w-7xl">
      <router-link to="/" class="font-medium text-3xl text-black"
        >Logo</router-link
      >
      <button @click="store.addCount()">add count</button>
    </div>
  </header>
  <RouterView />
</template>
<script setup>
import { useStore } from "@/store/store";
let store = useStore();
</script>
<style scoped></style>
