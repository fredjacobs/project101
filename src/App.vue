<script setup>
import Home from "./components/Home.vue";
import Toolbar from "./components/Toolbar.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="container-fluid">
    <toolbar />

    <Home />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;

  color: #2c3e50;
}

.fullH {
  height: 100%;
}
</style>
