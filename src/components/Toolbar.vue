<template>
  <div class="row toolbar py-2">
    <div class="col-md-4 text-white">Company Project</div>
    <div class="col-md-4 text-white">
      <router-link to="/">HOME</router-link>
    </div>
    <div class="col-md-4 text-white">{{ name }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("Fred");
</script>

<style scoped>
.toolbar {
  background-color: rgb(79, 79, 79);
}
</style>
