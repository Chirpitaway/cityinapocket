<template>
  <div>
    <v-toolbar color="blue darken-2" dark>
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer />
      <add-admin />
    </v-toolbar>
    <v-data-table
      :headers="userHeaders"
      :items="users"
      class="elevation-2"
      item-key="email"
    />
  </div>
</template>

<script>
import UserService from "@/services/UserService";
import addAdmin from "./AddAdmin";
export default {
  data() {
    return {
      userHeaders: [
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Role",
          value: "permission",
        },
        {
          text: "City",
          value: "city",
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          align: "center",
        },
      ],
      users: [],
      currentUser: {},
    };
  },
  components: {
    addAdmin,
  },
  async mounted() {
    try {
      this.users = (await UserService.getAllUsers()).data;
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