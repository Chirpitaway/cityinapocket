<template>
  <div class="container">
    <span class="error">{{ errorMessage }}</span>
    <h1>Please enter your details to register</h1>
    <form>
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
    </form>
    <custom-button
      :buttonText="'Next'"
      :textColor="'#fff'"
      :backgroundColor="'#197D2F'"
      :isPrimary="true"
      @clicked="login"
    />
    <router-link tag="a" to="/">Already have an account? Login</router-link>
  </div>
</template>
  
  <script>
import customButton from "@/components/General/Button";
import AuthenticationService from "@/services/AuthenticationService";
import axios from "axios";
export default {
  name: "Login",
  components: {
    customButton,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      city: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          name: this.name,
          city: this.city,
        });
        localStorage.setItem("jwt", response.data.token);
        this.$store.commit("setUser", {
          email: this.email,
          name: response.data.name,
          id: response.data._id,
          city: response.data.city,
        });
        this.$router.push("/home");
      } catch (error) {
        console.log(error.response.data);
        this.errorMessage = error.response.data.message;
      }
    },
  },
  async mounted() {
    try {
      const response = await axios.get("https://api.ipify.org/?format=json");
      const ip = response.data.ip;
      try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        this.city = response.data.city;
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
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
    .error
        color: red
        font-size: 1rem
        font-weight: bold
        margin-bottom: 1rem
</style>