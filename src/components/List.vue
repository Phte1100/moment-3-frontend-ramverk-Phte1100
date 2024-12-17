<template>
  <div>
    <!-- Lägg till disc-komponenten med event för att uppdatera listan -->
    <Add @updateList="updateDiscs" />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Märke</th>
          <th scope="col">Modell</th>
          <th scope="col">Vikt</th>
          <th scope="col">Testad</th>
          <th scope="col">Åtgärder</th>
        </tr>
      </thead>
      <tbody>
        <!-- Iterera över varje disc i listan -->
        <tr v-for="disc in discs" :key="disc._id">
          <td>{{ disc.brand }}</td>
          <td>{{ disc.model }}</td>
          <td>{{ disc.weight }} g</td>
          <td>{{ disc.tested ? 'Testad' : 'Otestad' }}</td>
          <td>
            <button class="btn btn-outline-dark" @click="editDisc(disc)">Edit</button>
          </td>
          <td>
            <button class="btn btn-outline-dark" @click="deleteDisc(disc._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios"; // Importera Axios för att hantera HTTP-anrop
import Add from "@/components/Add.vue"; // Importera Add-komponenten

export default {
  components: { Add },
  data() {
    return {
      discs: [], // Array som lagrar alla discar
    };
  },
  methods: {
    editDisc(disc) {
      // Metod för att redigera en disc med specifict id
      this.$router.push(`/edit/${disc._id}`);
    },
    deleteDisc(id) {
      // Metod för att radera en disc med specifict id
      axios.delete(`https://fullstack-moment-2.onrender.com/discs/${id}`).then(() => {
        this.discs = this.discs.filter((disc) => disc._id !== id);
      });
    },
    // Uppdatera listan med nya data från Add.vue
    updateDiscs(updatedList) {
      this.discs = updatedList;
    },
  },
  mounted() {
    axios.get("https://fullstack-moment-2.onrender.com/discs/").then((response) => {
      this.discs = response.data; // Ladda initial data
    });
  },
};
</script>
