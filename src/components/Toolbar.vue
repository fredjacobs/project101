<template>
  <div class="row toolbar py-2">
    <div class="col-md-4 text-white">Company Project</div>

    <div class="col-md-4 text-white">
      <!--Off Canvas #####################################-->

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-list toolbar-menu-icon"
        viewBox="0 0 16 16"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>

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

.toolbar-menu-icon {
  cursor: pointer;
}
</style>
