<template>
  <div class="welcome">
    <h1>Hi, {{ user.name.split(" ")[0] }}</h1>
    <img src="@/assets/welcome.png" alt="Welcome icon" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Welcome",
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
.welcome
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 20px
    padding: 0 10vw
    width: 100%
    box-sizing: border-box
    color: var(--main-primary-color)

    h1
        font-size: 2rem
        margin-bottom: 1rem
        color: var(--main-primary-color)

    img
        width: 60%
</style>