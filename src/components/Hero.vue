<template>
    <div
      class="hero vh-100 d-flex align-items-center justify-content-center text-center text-white"
      style="background-image: url('./images/discgolf.jpg'); background-size: cover; background-position: center;"
    >
      <div class="overlay"></div>
      <div>
        <h1 class="display-3">Discgolf-appen</h1>
        <p class="lead">Appen för dig som har för många discar</p>
        <a href="#text-section" class="btn btn-primary btn-lg">Om Discgolf-appen</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Hero",
  };
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    width: 100vw; /* Full bredd */
  height: 100vh; /* Full höjd */
  }
  
  .hero .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Mörk overlay för bättre kontrast */
    z-index: 1;
  }
  
  .hero div {
    z-index: 2;
    position: relative;
  }
  </style>
  