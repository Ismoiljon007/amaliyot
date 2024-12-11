import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useStore = defineStore("store", () => {
  let count = ref(0);
  let doubleCount = computed(() => count.value * 2);
  function addCount() {
    count.value++;
  }
  return {
    count,
    doubleCount,
    addCount,
  };
});
