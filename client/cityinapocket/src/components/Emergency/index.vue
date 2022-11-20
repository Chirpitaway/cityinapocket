<template>
  <div class="container">
    <h1>Emergency services in your area</h1>
    <a
      :href="`tel:${emergencyService.contact}`"
      v-for="emergencyService in emergencyServices"
      :key="emergencyService._id"
      >{{ emergencyService.name }} - {{ emergencyService.contact }}</a
    >
    <span v-if="!emergencyServices"
      >There are no services registered in your area!</span
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EmergencyService from "../../services/EmergencyService";
export default {
  name: "Emergency",
  data() {
    return {
      emergencyServices: null,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  async created() {
    if (!this.user) {
      this.$router.push("/");
    }
    const { data } = await EmergencyService.getAllEmergencies(
      this.user.city
    );
    this.emergencyServices = data;
  },
};
</script>
