<template>
  <div class="row">
    <div class="col-md-6 home-intro-img bg-primary vh-100">
      <h1 class="display-3 text-white">Company Project</h1>
    </div>

    <div class="col-md-6 home-login-section vh-100 flex-column">
      <p class="login-heading"><span>Login</span> / <span>Register</span></p>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();

//const { constValue } = store;

store.counter++;
</script>

<!--<style lang="sass" scoped>
$btn-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
</style>-->

<style>
.home-intro-img,
.home-login-section {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
