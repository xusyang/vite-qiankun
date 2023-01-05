<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="buttons">
      <button>手动载入乾坤</button>
      <button>路由跳转载入乾坤</button>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div class="containers">
      <div class="container container-1" id="qiankun-manual"></div>
      <div class="container container-2" id="qiankun-router"></div>
      <div class="container container-3"><RouterView /></div>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.containers {
  display: flex;
}

.buttons {
  display: flex;
  gap: 30px;
}

.container {
  flex: 1;
  height: 50vh;
}

.container-1 {
  background-color: rgba(255, 0, 0, 0.1);
}

.container-2 {
  background-color: rgba(0, 255, 0, 0.1);
}
</style>
