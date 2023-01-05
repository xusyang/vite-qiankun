<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { loadMicroApp, registerMicroApps, start } from 'qiankun'

function manualStartQiankun() {
  console.log('准备手动加载')
  loadMicroApp({
    name: 'app',
    entry: '//127.0.0.1:5174',
    container: '#app-sub',
  })
}

function startQiankunRouter() {
  registerMicroApps([
    {
      name: 'app',
      entry: '//127.0.0.1:5174',
      container: '#app-sub',
      activeRule: '/router-app-sub',
    },
  ])

  start()
}
startQiankunRouter()
</script>

<template>
  <header>
    <div class="buttons">
      <button @click="manualStartQiankun">手动载入乾坤</button>
      <button @click="$router.push('/router-app-sub')">路由跳转载入乾坤</button>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div class="containers">
      <div class="container container-1" id="app-sub"></div>
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
