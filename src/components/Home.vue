<script setup>
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();

//const { constValue } = store;

store.counter++;
</script>

<template>
  <div>
    <h1>HOME</h1>

    <h2>Count: {{ store.counter }}</h2>
    <h3>Double: {{ store.doubleCount }}</h3>
    <button class="btn btn-success" @click="store.increment(1)">
      Increment
    </button>
    <button class="btn btn-outline-danger" @click="store.waitAndAdd()">
      Wait and increment
    </button>
    <h1>{{ store.constValue }}</h1>
  </div>
</template>

<!--<style lang="sass" scoped>
$btn-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
</style>-->

<style></style>
