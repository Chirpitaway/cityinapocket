<template>
    <div>
      <v-toolbar color="blue darken-2" dark>
        <v-toolbar-title>Tags</v-toolbar-title>
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
  import TagService from "@/services/TagService";
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
          }
        ],
        dataset: [],
      };
    },
    async mounted() {
      try {
        this.dataset = (await TagService.getAllTags()).data;
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