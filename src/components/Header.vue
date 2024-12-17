<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">Discgolf-appen</RouterLink>    
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/discs" class="nav-link">Discar</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/vue" class="nav-link">Om Vue</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  /* styling som bara gäller för denna komponent */
  </style>
  