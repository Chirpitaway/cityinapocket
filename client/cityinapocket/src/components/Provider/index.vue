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

    <textarea placeholder="Scrie un comentariu..." v-model="comment"/>
    <custom-button :buttonText="'Trimite!'" @clicked="sendComment"/>
  </div>
</template>
  
  <script>
import provider from "@/components/General/Provider";
import ProviderService from "../../services/ProviderService";
import customButton from "@/components/General/Button";
import { mapGetters } from "vuex";
export default {
  components: {
    provider,
    customButton,
  },
  data() {
    return {
      provider: null,
      comment: ''
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
  methods: {
    async sendComment() {
      const { data } = await ProviderService.addComment(this.$route.params.id, this.comment);
      this.provider = data;
    }
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
  padding: 0 5vw 5vh 5vw
  box-sizing: border-box
  color: var(--main-primary-color)
  h1
    font-size: 2rem
    margin-bottom: 10vh
  textarea
    width: 100%
    height: 30vh
    margin: 5vh 0
    border: none
    border-radius: 10px
    padding: 1rem
    box-sizing: border-box
    font-size: 1rem
    resize: none
</style>