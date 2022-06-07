<template>
  <div>{{ title }}</div>
  <div>{{ allCustomers }}</div>
</template>

<script setup>
import { useCustomerStore } from "../stores/projectsStore";
const customers = useCustomerStore();
const customerList = customers.getCustomerList();

const allCustomers = customers.projects;

import { ref } from "vue";

const title = ref("Projects Go Here");
</script>

<style scoped></style>
