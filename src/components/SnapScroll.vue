<template>
    <div class="snap-container">
      <Hero />
      <Section>
      </Section>
    </div>
  </template>
  
  <script>
  import Hero from "@/components/Hero.vue";
  import Section from "@/components/Section.vue";
  
  export default {
    components: {
      Hero,
      Section,
    },
  };
  </script>
  
  <style scoped>
  .snap-container {
    scroll-snap-type: y mandatory; /* Aktiverar snap scrolling längs Y-axeln */
    overflow-y: scroll; /* Möjliggör skrollning */
    height: 100vh; /* Gör att hela sidan fylls */
  }
  
  html {
    scroll-behavior: smooth; /* Smooth scrolling */
  }
  </style>
  