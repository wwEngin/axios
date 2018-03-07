<template>
  <div id="app" :class='[{white:this.$store.state.complexion == "white"},{black:this.$store.state.complexion == "black"}]'>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      if (this.$route.query.info != undefined) {
        this.$store.state.complexion = JSON.parse(this.Base64.decode(this.$route.query.info)).skin;
        this.$store.state.user_id = JSON.parse(this.Base64.decode(this.$route.query.info)).user_id;
      }
    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 44px;
  }

  .black {
    background-color: #0F1316 !important;
  }

  .black .mint-header.is-fixed {
    background-color: #1D2027 !important;
  }

</style>
