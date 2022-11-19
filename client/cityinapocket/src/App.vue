<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/General/Header'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap')

body, html
  font-family: 'Quicksand', sans-serif
  margin: 0
  width: 100vw
</style>
