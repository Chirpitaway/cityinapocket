<template>
  <div class="container">
    <h1>{{ provider.name }}</h1>
    <provider
      v-for="ticketType in provider.ticketTypes"
      :key="ticketType._id"
      :name="ticketType.name"
      :price="ticketType.price"
      :id="ticketType._id"
    />
    <h1>Comments: </h1>
    <h3 v-if="provider.comments.length <= 0">Acest furnizor nu are comentarii inca!</h3>
    <div v-for="comment in provider.comments" :key="comment._id">
      <h3>{{ comment.userName }}</h3>
      <h5>{{ comment.message }}</h5>
    </div>
  </div>
</template>
  
  <script>
import provider from "@/components/General/Provider";
import ProviderService from "../../services/ProviderService";
import { mapGetters } from "vuex";
export default {
  components: {
    provider,
  },
  data() {
    return {
      provider: null,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  async created() {
    if (!this.user) {
      this.$router.push("/");
    }
    const { data } = await ProviderService.getProvider(this.$route.params.id);
    this.provider = data;
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

</style>