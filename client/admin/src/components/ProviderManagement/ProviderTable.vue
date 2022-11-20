<template>
    <div>
      <v-toolbar color="blue darken-2" dark>
        <v-toolbar-title>Providers</v-toolbar-title>
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
  import ProviderService from "@/services/ProviderService";
  export default {
    data() {
      return {
        headers: [
          {
            text: "Type",
            value: "type",
          },
          {
            text: "Name",
            value: "name",
          },
          {
            text: "City",
            value: "city",
          },
          {
            text: "Tags",
            value: "tags",
          }
        ],
        dataset: [],
      };
    },
    async mounted() {
      try {
        this.dataset = (await ProviderService.getAllProviders()).data;
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