<template>
  <div class="provider">
    <h2 class="name">
      {{ name }}
    </h2>
    <div class="tags">
      <div class="tag" v-for="tag in tags" :key="tag._id">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Provider",
  props: {
    name: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.provider
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    height: 30vh
    width: 100%
    background-color: #c3c3c3
    background-size: cover
    margin-bottom: 5vh
    border-radius: 10px

    h2
        font-size: 1.5rem
        margin-top: 1rem
        color: var(--main-primary-color)
        font-weight: bold
    .tag
        display: inline-block
        background-color: var(--main-primary-color)
        color: white
        padding: 0.5rem 1rem
        border-radius: 10px
        margin: 0 0.5rem 0.5rem 0
        font-size: 0.8rem
</style>