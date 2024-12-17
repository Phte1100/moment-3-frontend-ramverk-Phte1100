<template>
    <div class="section vh-100 d-flex align-items-center justify-content-center">
      <div class="container text-center">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Section",
  };
  </script>
  
  <style scoped>
  .section {
    scroll-snap-align: start; /* Snäpper till toppen av varje sektion */
    background: #f8f9fa;
  }
  </style>
  