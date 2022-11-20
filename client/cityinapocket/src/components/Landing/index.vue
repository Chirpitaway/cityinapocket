<template>
  <div class="container">
    <div class="welcome">
      <h1>Hi, {{ user.name.split(" ")[0] }}</h1>
      <img src="@/assets/welcome.png" alt="Welcome icon" />
    </div>
    <div class="weather">
      <h2>Bucharest 12°C</h2>
      <img src="@/assets/weather.png" alt="Weather icon" />
    </div>
    <h2>Let's see what you need</h2>

    <custom-button :buttonText="'Food'" @clicked="goTo()" />
    <custom-button :buttonText="'Transport'" @clicked="goTo()" />
    <custom-button :buttonText="'Fun'" @clicked="goTo()" />
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
  methods: {
    goTo() {
      this.$router.push("/landing");
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
    .welcome
      display: flex
      align-items: center
      justify-content: center
      margin-bottom: 20px
      padding: 0 10vw
      width: 100%
      box-sizing: border-box

      img
        width: 60%
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
    h1
        font-size: 2rem
        margin-bottom: 1rem
        color: var(--main-primary-color)
    h2
        font-size: 1.5rem
        margin-top: 1rem
        color: var(--main-primary-color)
    .button
        margin: 1rem 0
</style>