<template>
  <h1 class="title">H-Element组件库</h1>
  <nav class="nav">
    <router-link to="/">Icon</router-link>
    <router-link to="/button">Button</router-link>
    <router-link to="/card">Card</router-link>
    <router-link to="/dialog">Dialog</router-link>
    <router-link to="/pager">Pager</router-link>
    <router-link to="/collapse">Collapse</router-link>
    <router-link to="/tooltip">Tooltip</router-link>
    <router-link to="/dropdown">Dropdown</router-link>
  </nav>
  <div class="displayArea">
    <router-view></router-view>
  </div>
</template>

<script setup>
// console.log('MODE', import.meta.env.MODE);
// console.log('VITE_SOME_KEY', import.meta.env.VITE_SOME_KEY);
</script>

<style lang="scss" scoped>
h1.title {
  text-align: center;
  font-weight: 200;
}

.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
}
.active {
  border-bottom: 3px solid var(--h-color-primary);
}
</style>
