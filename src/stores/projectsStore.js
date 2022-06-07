import { defineStore } from "pinia";

export const useCustomerStore = defineStore("projects", {
  state: () => {
    return {
      projects: [],
    };
  },
  actions: {
    async getCustomerList() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();

      this.projects.push(data);
    },
  },
  getters: {},
});
