<template>
  <div class="home">
    <mt-header fixed title="玲珑指数"></mt-header>

  </div>
</template>

<script>
  import {
    lookOption,
    search
  } from '../components/axios/api'
  export default {
    name: 'home',
    data() {
      return {}
    },
    methods: {

    },
    mounted() {
      search('000').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err);
        console.log('请求失败')
      })

    },
    watch: {}
  }

</script>


<style>
  .mint-header.is-fixed {
    height: 44px;
    background-color: #E93030 !important;
    font-size: 1.8rem;
  }

</style>
