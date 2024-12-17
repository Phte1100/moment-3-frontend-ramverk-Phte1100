<template>

  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
      confirmDelete() {
        const id = this.$route.params.id;
        axios.delete(`https://fullstack-moment-2.onrender.com/discs/${id}`).then(() => {
          this.$router.push('/');
        });
      },
      cancelDelete() {
        this.$router.push('/');
      },
    },
  };
  </script>
  