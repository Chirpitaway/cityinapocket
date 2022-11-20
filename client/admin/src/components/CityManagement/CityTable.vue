<template>
  <div>
    <v-toolbar color="blue darken-2" dark>
      <v-toolbar-title>Cities</v-toolbar-title>
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
import CityService from "@/services/CityService";
export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Latitude",
          value: "centerLat",
        },
        {
          text: "Longitude",
          value: "centerLng",
        },
        {
          text: "Radius",
          value: "radius",
        },
        {
          text: "Country",
          value: "country",
        },
      ],
      dataset: [],
    };
  },
  async mounted() {
    try {
      this.dataset = (await CityService.getCities()).data;
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