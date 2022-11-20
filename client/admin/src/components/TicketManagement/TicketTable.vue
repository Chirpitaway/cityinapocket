<template>
    <div>
      <v-toolbar color="blue darken-2" dark>
        <v-toolbar-title>Tickets</v-toolbar-title>
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
  import TicketService from "@/services/TicketService";
  export default {
    data() {
      return {
        headers: [
          {
            text: "Type",
            value: "type",
          },
          {
            text: "UserID",
            value: "userId",
          },
          {
            text: "Provider",
            value: "provider",
          },
          {
            text: "ExpiresAt",
            value: "expiresAt",
          },
          {
            text: "Used",
            value: "used",
          },
          {
            text: "Actions",
            value: "actions",
            sortable: false,
            align: "center",
          },
        ],
        dataset: [],
      };
    },
    async mounted() {
      try {
        this.dataset = (await TicketService.getAllTickets()).data;
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