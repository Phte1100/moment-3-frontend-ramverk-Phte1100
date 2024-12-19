<script setup lang="ts">
import Hero from '../components/Hero.vue';
</script>

<template>
  <div class="scroll-container">
    <!-- Hero Section -->
    <section class="content-section hero-section">
      <Hero />
    </section>

    <section id="text-section" class="content-section text-section">
      <div class="text-container">
        <h2>Om Discgolf-appen</h2>
        <p>Välkommen till den ultimata appen för disc golf-entusiaster! Med vårt användarvänliga gränssnitt kan du enkelt:</p>
<ul>
    <li><b>Lägg till och hantera dina diskar – </b>Håll ordning på alla dina favoritmärken, modeller och vikter.</li>
    <li><b>Redigera och uppdatera –</b> Uppdatera detaljerna snabbt och smidigt.</li>
</ul>
<p>Oavsett om du är nybörjare eller erfaren spelare är vår app skräddarsydd för att göra din discgolf-upplevelse ännu bättre. Testa den idag och få full kontroll över dina diskar!</p>

      </div>
    </section>
  </div>
</template>

<style>
.scroll-container {
  height: 100vh;
  scroll-snap-type: y mandatory; /* Aktivera vertikal scroll-snap */
  overflow-y: scroll; /* Gör hela sidan scrollbar */
}

.content-section {
  min-height: 100vh; /* Sektionerna täcker hela höjden av fönstret */
  scroll-snap-align: start; /* Snäpper sektionen till toppen vid scroll */
}

.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; 
}

.text-section {
  background-color: #ffffff; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  max-width: 800px;
  padding: 20px;
  font-family: Arial, sans-serif;
  margin-top: 15%;
  margin-bottom: 15%;
}

.text-section ul {
    text-decoration: none;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}
</style>
