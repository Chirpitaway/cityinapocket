<template>
  <div id="app">
    <v-app>
      <v-system-bar color="blue darken-1"></v-system-bar>

      <v-app-bar absolute color="blue darken-2" dark dense>
        <v-app-bar-nav-icon
          @click="drawer = true"
          v-if="isUserLoggedIn"
        ></v-app-bar-nav-icon>

        <v-toolbar-title
          >City in a Pocket | Administrare</v-toolbar-title
        >
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        class="blue accent-2"
        dark
      >
        <v-list flat>
          <v-subheader>Meniu</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon v-text="'mdi-monitor-dashboard'"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="'Dashboard'"
                  @click="$router.push({ name: 'Dashboard' })"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon v-text="'mdi-export'"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="'Log out'"
                  @click="logOut"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<style lang="sass">
</style>


<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters(["isUserLoggedIn"]),
  },
  methods: {
    logOut() {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");
      this.$store.commit("switchUserState", false);
      this.$router.push({ name: "login" });
    },
  },
};
</script>