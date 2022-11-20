<template>
  <v-container>
    <v-row class="my-15" justify="center">
      <span class="text-h3 text-center blue--text">Dashboard administrare</span>
    </v-row>
    <user-table class="my-15" />
  </v-container>
</template>

<script>
import UserTable from "@/components/UserManagement/UserTable";
export default {
  data() {
    return {};
  },
  methods: {},
  async mounted() {},
  components: {
    UserTable,
  },
};
</script>