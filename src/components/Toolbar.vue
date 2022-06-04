<template>
  <div class="row toolbar py-2">
    <div class="col-md-4 text-white">Company Project</div>

    <div class="col-md-4 text-white">
      <!--Off Canvas #####################################-->

      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        MENU
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <router-link to="/">HOME</router-link>
          <router-link to="/projectslistview">Projects</router-link>
        </div>
      </div>

      <!--##################################-->
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
