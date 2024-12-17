<template>
  <section id="text-section" class="content-section text-section">
    <div class="text-container">
      <h2>Discar</h2>
      <List /> <!-- Importerar listan -->
    </div>
  </section>
</template>

<script>
import List from "@/components/List.vue"; // Import av listan

export default {
  name: "DiscsView",
  components: {
    List, // Registrera komponenten
  },
};
</script>
