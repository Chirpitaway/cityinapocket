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
export default {
  components: {
    provider,
  },
  data() {
    return {
      providers: null,
    };
  },
};
</script>