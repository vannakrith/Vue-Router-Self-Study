<template>
<main class="container">
<div class="links">
  <RouterLink active-class="active" to="/">Home</RouterLink>
  <RouterLink active-class="active" to="/about">About</RouterLink>
</div>
<router-view/>
</main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.links {
      padding: 20px;
      margin-top: 32px;
}

.links a {
  margin: 8px;
}

.active {
  background-color: aqua;
}
</style>