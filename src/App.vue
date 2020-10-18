<template>
    <div id="app">
        <Header></Header>
        <HereMap :center="center"/>
    </div>
</template>

<script>
  import Header from '@/components/Header'
  import HereMap from '@/components/HereMap'

  export default {
    name: 'app',
    components: {
      Header,
      HereMap
    },
    data () {
      return {
        center: {
          lat: 52.5298776,
          lng: 13.3454
        }
      }
    }
  }
</script>

<style>
    body {
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>
