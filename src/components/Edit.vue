<template>
    <section id="text-section" class="content-section text-section">
      <div class="text-container">
    <div class="container">
    
      <h2>Redigera</h2>
      <!-- Formulär för att redigera en disc -->
      <form @submit.prevent="updateDisc">
        <div class="form-group">
        <label for="brand">Märke:</label>
        <input type="text" class="form-control" id="brand" v-model="editedDisc.brand" required />
  
        <label for="model">Modell:</label>
        <input type="text" class="form-control" id="model" v-model="editedDisc.model" required />
  
        <label for="weight">Vikt (mellan 134-205 enligt PDGA-standard):</label>
        <input type="number" class="form-control" id="weight" v-model="editedDisc.weight" required />
        <div class="form-check">
        <label>
          <input type="checkbox" class="form-check-input" v-model="editedDisc.tested" />
          Testad
        </label>
        </div>
        <button type="submit" class="btn btn-outline-dark">Uppdatera</button>
      </div>
      </form>
    </div>
    </div>
    </section>
  
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return { // Objekt som innehåller de fält som ska uppdateras
        editedDisc: {
          brand: '',
          model: '',
          weight: null,
          tested: false,
        },
      };
    },
    methods: {
      // Metod för att uppdatera en disc
      updateDisc() {
        const id = this.$route.params.id;
        axios.put(`https://fullstack-moment-2.onrender.com/discs/${id}`, this.editedDisc).then(() => {
          this.$router.push('/discs');
        });
      },
    },
    mounted() {
      // Hämta data baserat på ID när sidan laddas
      const id = this.$route.params.id;
      axios.get(`https://fullstack-moment-2.onrender.com/discs/${id}`).then((response) => {
        this.editedDisc = response.data;
      });
    },
  };
  </script>
  