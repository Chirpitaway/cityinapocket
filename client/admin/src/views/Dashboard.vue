<template>
  <v-container>
    <v-row class="my-15" justify="center">
      <span class="text-h3 text-center blue--text">Dashboard administrare</span>
    </v-row>
    <user-table class="my-15" />
    <ticket-table class="my-15" />
    <tag-table class="my-15" />
    <provider-table class="my-15" />
    <emergency-service-table class="my-15" />
    <city-table class="my-15" />
  </v-container>
</template>

<script>
import UserTable from "@/components/UserManagement/UserTable";
import TicketTable from "@/components/TicketManagement/TicketTable";
import TagTable from "@/components/TagManagement/TagTable";
import ProviderTable from "@/components/ProviderManagement/ProviderTable";
import EmergencyServiceTable from "@/components/EmergencyServiceManagement/EmergencyServiceTable";
import CityTable from "@/components/CityManagement/CityTable";
export default {
  components: {
    UserTable,
    TicketTable,
    TagTable,
    ProviderTable,
    EmergencyServiceTable,
    CityTable,
  },
};
</script>