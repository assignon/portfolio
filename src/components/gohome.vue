<template>

  <div class="gohome" @click="goHome" :style="{width: width}">

     <img :src="homesrc" alt="">

  </div>

</template>

<script>

export default {

  props:[

   'width',
   'homesrc'

  ],

  data ()
  {

    return {

      //homesrc: require('../assets/logo.png')

    }

  },

  methods: {

    goHome ()
    {

      this.$store.dispatch('commitChgComponent', 'myWorld');
      this.$store.state.secondaryMenu = false;
      this.$store.state.pageBackground = {backgroundColor: '#54bf8e'};

      this.$parent.$parent.$parent.$children[1].showTechs = require('../assets/images/world.svg');
      this.$parent.$parent.$parent.$children[1].about = require('../assets/images/about.svg');
      this.$parent.$parent.$parent.$children[1].contact = require('../assets/images/contact.svg');
      this.$parent.$parent.$parent.$children[1].cordova = require('../assets/images/cordova.svg');
      this.$parent.$parent.$parent.$children[1].php = require('../assets/images/php.svg');
      this.$parent.$parent.$parent.$children[1].vue = require('../assets/images/vuejs.svg');

    }

  }

}

</script>

<style lang="css" scoped>

.gohome
{

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  margin-top: 10px;

}

.gohome img
{

   width: 40px;
   height: 40px;

}

.gohome:hover img
{

   transform: scale(1.2,1.2);

}

</style>
