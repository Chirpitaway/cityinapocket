<template>
  <div>
    <div id="allin">
      <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6>
          <v-card ref="form">
            <v-card-text>
              <v-text-field
                ref="email"
                v-model="user.email"
                :rules="[() => !!user.email || 'This field is required']"
                label="Email"
                placeholder="basicemail@gmail.com"
                required
              ></v-text-field>
              <v-text-field
                ref="password"
                v-model="user.password"
                :type="'password'"
                :rules="[() => !!user.password || 'This field is required']"
                label="Password"
                placeholder="Password"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn dark raised color="blue darken-2" @click="login"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      if (!(this.user.email === "") && !(this.user.password === "")) {
        try {
          const response = await AuthenticationService.login(this.user);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("jwt", response.data.token);
          this.$store.commit("switchUserState", true);
          this.$router.push({ name: "Dashboard" });
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
  mounted() {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    this.$store.commit("switchUserState", false);
  },
};
</script>
<style scoped>
#allin {
  margin-top: 50px;
}
</style>
