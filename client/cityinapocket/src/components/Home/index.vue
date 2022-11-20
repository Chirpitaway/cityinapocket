<template>
  <div class="container">
    <h1>Hi, {{ user.name.split(' ')[0] }}</h1>
    <h2>What are you today?</h2>
    <custom-button
      :buttonText="'Local'"
      :textColor="'#fff'"
      :backgroundColor="'#197D2F'"
      :isPrimary="true"
    />
    <h2>or a</h2>
    <custom-button
      :buttonText="'Tourist'"
      :textColor="'#fff'"
      :backgroundColor="'#197D2F'"
      :isPrimary="true"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import customButton from "@/components/General/Button";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["user"]),
  },
  components: {
    customButton,
  },
};
</script>