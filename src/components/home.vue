<template>

<div class="appHome" v-bind:style="this.$store.state.pageBackground">

   <core></core>
   <appmenu></appmenu>

</div>

</template>

<script>

import Animation from '../classes/tweenmax'
import Firebase from '../classes/firebase'
import Menu from '@/components/appmenu'
import Core from '@/components/core'

export default {

  name: 'home',
  data () {

    return {

      tweenmax: Animation,
      firebase: Firebase,
      curlang: null

    }

  },

  components: {

    'appmenu': Menu,
    'core': Core

  },

  created ()
  {



  },


  mounted ()
  {


  },


  methods: {



  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet" type="text/css" src="../styles/home.css"></style>
