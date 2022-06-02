import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      counter: 0,
      constValue: 100,
    };
  },
  actions: {
    increment(val = 1) {
      this.counter += val;
    },
    async waitAndAdd() {
      setTimeout(() => {
        this.counter++;
      }, 2000);
    },
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
});
