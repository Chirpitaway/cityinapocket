<template>
  <div class="container">
    <h1>What to visit</h1>
    <provider
      v-for="provider in providers"
      :key="provider._id"
      :name="provider.name"
      :tags="provider.tags"
    />
  </div>
</template>

<script>
import provider from "../General/Provider";
import ProviderService from "../../services/ProviderService";
import { mapGetters } from "vuex";
export default {
  components: {
    provider,
  },
  data() {
    return {
      providers: null,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  async created() {
    if (!this.user) {
      this.$router.push("/");
    }
    const { data } = await ProviderService.getAllProviders({
        city: this.user.city,
        type: 'attraction'
    }
    );
    this.providers = data;
  },
};
</script>

<style lang="sass" scoped>
.container
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  height: 100%
  text-align: center
  padding: 0 5vw
  box-sizing: border-box
  color: var(--main-primary-color)
  h1
    font-size: 2rem
    margin-bottom: 10vh
  a
    font-size: 1.5rem
    margin-bottom: 1rem
    font-weight: bold
    text-decoration: none
    color: var(--main-primary-color)
    &:hover
      text-decoration: underline
</style>