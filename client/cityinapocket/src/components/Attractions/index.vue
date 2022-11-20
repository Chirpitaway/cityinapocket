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
import provider from "../Provider";
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