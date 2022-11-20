<template>
  <div class="container">
    <welcome />
    <div class="city-display">
      <h2>City: {{ user.city }}</h2>
    </div>
    <h2>The countries you have visited:</h2>
    <img src="@/assets/countries.png" alt="Country list" />
  </div>
</template>

<script>
import welcome from "@/components/General/Welcome";
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  components: {
    welcome,
  },
  computed: {
    ...mapGetters(["user"]),
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
  color: var(--main-primary-color)

  .city-display
    display: flex
    width: 100%
    align-items: center
    justify-content: center
    margin-bottom: 20px
    padding: 0 5vw
    box-sizing: border-box

    img
      width: 100%
      max-width: 400px
</style>