<script setup>
// import vPlaceholder from "../../dist/library.mjs";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Placeholder from "./components/v-placeholder.vue";
</script>

<template>
  <!-- <header> -->
  <!-- <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    /> -->

  <!-- <div class="wrapper"> -->
  <!-- <HelloWorld msg="You did it!" /> -->
  <!-- </div> -->
  <!-- </header> -->
  <Placeholder
    :src="'https://i.imgur.com/BfZCBXY.jpeg'"
    placeholder="https://i.imgur.com/kYHhXXf.png"
  />

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>
