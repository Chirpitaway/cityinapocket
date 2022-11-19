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
  min-height: 100vh
  background: linear-gradient(192.13deg, rgba(255, 251, 125, 0.7826) 0.54%, rgba(133, 255, 189, 0.86) 100%)
</style>
