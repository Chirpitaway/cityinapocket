<template>
  <div class="container">
    <h1>Hi, {{ user.name.split(' ')[0] }}</h1>
    <h2>What are you today?</h2>
    <custom-button
      :buttonText="'Local'"
      :textColor="'#fff'"
      :backgroundColor="'#197D2F'"
      :isPrimary="true"
      @clicked="$router.push('/landing')"
    />
    <h2>or</h2>
    <custom-button
      :buttonText="'Tourist'"
      :textColor="'#fff'"
      :backgroundColor="'#197D2F'"
      :isPrimary="true"
      @clicked="$router.push('/landing')"
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
  mounted() {
    if (!this.user) {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="sass" scoped>
.container
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  min-height: 90vh
  h1
    font-size: 2rem
    margin-bottom: 1rem
    color: var(--main-primary-color)
  h2
    font-size: 1.5rem
    margin-top: 1rem
    color: var(--main-primary-color)
</style>