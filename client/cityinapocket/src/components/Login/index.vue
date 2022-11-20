<template>
  <div class="container">
    <h1>Please enter your email and password</h1>
    <form>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
    </form>
    <custom-button
      :buttonText="'Next'"
      :textColor="'#fff'"
      :backgroundColor="'#197D2F'"
      :isPrimary="true"
    />
    <router-link tag="a" to="/register"
      >Don't have an account? Register</router-link
    >
  </div>
</template>

<script>
import customButton from "@/components/General/Button";
export default {
  name: "Login",
  components: {
    customButton,
  },
};
</script>

<style lang="sass" scoped>
.container
    width: 100vw
    min-height: 90vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 0 5vw
    box-sizing: border-box
    text-align: center
    h1
        font-size: 2rem
        font-weight: bold
        margin-bottom: 1rem
        color: var(--main-primary-color)
    form
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        input
            width: 100%
            height: 2rem
            border: 1px solid var(--main-primary-color)
            border-radius: 5px
            margin-bottom: 1rem
            padding: 0.5rem
            font-size: 1rem
            font-weight: 500
            color: var(--main-primary-color)
            transition: all 0.1s ease-in-out
            &::placeholder
                color: var(--main-primary-color)
            &:focus
                outline: none
                border: 2px solid var(--main-primary-color)
    .button
        margin-top: 10vh
    a
        color: var(--main-primary-color)
        font-size: 1rem
        font-weight: 500
        margin-top: 1rem
        text-decoration: none
        &:hover
            text-decoration: underline
</style>