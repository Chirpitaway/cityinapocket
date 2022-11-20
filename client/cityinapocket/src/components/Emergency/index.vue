<template>
  <div class="container">
    <h1>Emergency services in your area</h1>
    <a
      :href="`tel:${emergencyService.contact}`"
      v-for="emergencyService in emergencyServices"
      :key="emergencyService._id"
      >{{ emergencyService.name }} - {{ emergencyService.contact }}</a
    >
  </div>
</template>

<script>
export default {
  name: "Emergency",
  data() {
    return {
      emergencyServices: null,
    };
  },
};
</script>
