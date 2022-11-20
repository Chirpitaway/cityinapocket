<template>
    <div>
      <v-toolbar color="blue darken-2" dark>
        <v-toolbar-title>Emergency Services</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="dataset"
        class="elevation-2"
        item-key="email"
      />
    </div>
  </template>
  
  <script>
  import EmergencyService from "@/services/EmergencyService";
  export default {
    data() {
      return {
        headers: [
          {
            text: "Name",
            value: "name",
          },
          {
            text: "Contact",
            value: "contact",
          },
          {
            text: "City",
            value: "city",
          },
          {
            text: "Country",
            value: "country",
          }
        ],
        dataset: [],
      };
    },
    async mounted() {
      try {
        this.dataset = (await EmergencyService.getAllEmergencyServices()).data;
      } catch (error) {
        if (error.response.status == 403) {
          localStorage.removeItem("user");
          this.$store.commit("switchUserState", false);
          this.$router.push({ name: "login" });
        }
      }
    },
  };
  </script>