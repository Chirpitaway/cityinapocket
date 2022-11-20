<template>
  <header>
    <h1 class="logo">CityinaPocket</h1>
    <div class="cta">
      <div class="language-select" v-if="!menuDisplay">
        <span>ENG</span>
        <img src="@/assets/eng-flag.png" alt="English" />
      </div>
      <Slide right :closeOnNavigation="true" v-else>
        <nav>
            <h2>Menu</h2>

            <span>How we go</span>
            <span>Where we eat</span>
            <router-link tag="span" to="/attractions">What we visit</router-link>
            <span>News</span>
            <router-link tag="span" to="/emergency-services">Emergency services</router-link>
        </nav>
      </Slide>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    menuDisplay() {
      return this.$route.path === "/" ||
        this.$route.path === "/register" ||
        this.$route.path === "/home"
        ? false
        : true;
    },
  },
};
</script>

<style lang="sass" scoped>
header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 5vw
    height: 10vh
    width: 100%
    box-sizing: border-box
    color: #197D2F

    .language-select
        display: flex
        align-items: center
        cursor: pointer
        transition: all 0.3s ease-in-out

        &:hover
            transform: scale(1.1)

        span
            margin-right: 1vw
            font-size: 1.5rem
            font-weight: 600

        img
            width: 2rem
            height: 2rem
    nav
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        height: 100%
        text-align: center
        padding-top: 20%

        h2
            font-size: 2rem
            font-weight: 600
            margin-bottom: 5vh
            color: #fff

        span
            font-size: 1.5rem
            font-weight: 600
            margin: 1rem 0
            cursor: pointer
            width: 100%
            transition: all 0.3s ease-in-out

            &:hover
                transform: scale(1.1)
</style>