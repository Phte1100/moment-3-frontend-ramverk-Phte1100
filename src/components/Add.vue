<template>
  <!-- Huvudcontainer för formuläret -->
  <div class="container">
    <!-- Formulär för att lägga till en ny disc -->
    <form @submit.prevent="addDisc">
      <div class="form-group">
        <label for="brand">Märke:</label>
        <input 
          type="text" 
          class="form-control" 
          id="brand" 
          v-model="newDisc.brand" 
          required 
        />


        <label for="model">Modell:</label>
        <input 
          type="text" 
          class="form-control" 
          id="model" 
          v-model="newDisc.model" 
          required 
        />

        <label for="weight">Vikt (mellan 134-205 enligt PDGA-standard):</label>
        <input 
          type="number" 
          class="form-control" 
          id="weight" 
          v-model.number="newDisc.weight" 
          required 
        />

        <div class="form-check">
          <label class="form-check-label">
            <input 
              type="checkbox" 
              class="form-check-input" 
              v-model="newDisc.tested" 
            />
            Tested
          </label>
        </div>

        <button type="submit" class="btn btn-outline-dark">Lägg till Disc</button>
      </div>
    </form>

    <!-- Visa felmeddelanden om de finns -->
    <div v-if="errors.length" class="alert alert-danger mt-3">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newDisc: {
        brand: "",
        model: "",
        weight: null,
        tested: false,
      },
      errors: [], // Array för att lagra valideringsfel
    };
  },
  methods: {
    // Metod för att lägga till en ny disc
    async addDisc() {
      this.errors = []; // Rensa gamla fel innan ny validering börjar

      // Enkel frontend-validering för att kontrollera inmatade värden
      if (!this.newDisc.brand.trim()) this.errors.push("Märke är obligatoriskt.");
      if (!this.newDisc.model.trim()) this.errors.push("Modell är obligatoriskt.");
      if (!this.newDisc.weight || this.newDisc.weight < 134 || this.newDisc.weight > 205) {
        this.errors.push("Vikten måste vara mellan 134 och 205.");
      }

      // Om det finns fel, stoppa och logga dem
      if (this.errors.length) {
        console.error("Validation errors:", this.errors);
        return; 
      }

      try {

        // Skicka POST-anrop till backend för att lägga till den nya discen
        await axios.post("https://fullstack-moment-2.onrender.com/discs/", this.newDisc);

        // Hämta den uppdaterade listan efter att discen har lagts till
        const response = await axios.get("https://fullstack-moment-2.onrender.com/discs/");

        this.$emit("updateList", response.data);

        // Rensa formuläret efter lyckad tillägg
        this.newDisc = { brand: "", model: "", weight: null, tested: false };
      } catch (error) {
        console.error("Error adding disc:", error);
      }
    },
  },
};
</script>
