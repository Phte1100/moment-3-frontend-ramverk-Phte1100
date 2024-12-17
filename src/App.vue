<script setup>
import Header from './components/Header.vue';

</script>

<template>
  <Header />

  <RouterView />
</template>

<style scoped>
body {
  margin: 0;
  overflow: hidden; /* Döljer default scroll för body */
}

.snap-container {
  height: 100vh;
}
</style>
