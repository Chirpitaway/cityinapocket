<template>
  <div class="container">
    <welcome/>
    <div class="weather">
      <h2>Bucharest 12°C</h2>
      <img src="@/assets/weather.png" alt="Weather icon" />
    </div>
    <h2>Let's see what you need</h2>

    <custom-button :buttonText="'Food'" @clicked="goTo('/restaurants')" />
    <custom-button :buttonText="'Transport'" @clicked="goTo('/transportations')" />
    <custom-button :buttonText="'Fun'" @clicked="goTo('/attractions')" />
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import customButton from "@/components/General/Button";
import welcome from "@/components/General/Welcome";

export default {
  name: "Landing",
  computed: {
    ...mapGetters(["user"]),
  },
  components: {
    customButton,
    welcome,
  },
  mounted() {
    if (!this.user) {
      this.$router.push("/");
    }
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
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
    
    .weather
      display: flex
      width: 100%
      align-items: center
      justify-content: center
      margin-bottom: 20px
      padding: 0 5vw
      box-sizing: border-box

      img
        width: 15%
        margin-left: 30px
    h2
        font-size: 1.5rem
        margin-top: 1rem
        color: var(--main-primary-color)
    .button
        margin: 1rem 0
</style>