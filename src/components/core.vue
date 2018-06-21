<template>

  <div class="appCore">

    <component :is="this.$store.state.templateName"></component>

  </div>

</template>

<script>

import Myworld from '@/components/lauchscreen'
import Projects from '@/components/projects'
import Projectsdesc from '@/components/projectsdesc'

export default {

   data ()
   {

      return {

         templateName: 'myWorld'

      }

   },

   components: {

     'myWorld': Myworld,
     'projects': Projects,
     'projectsdesc': Projectsdesc

   },

   methods: {



   }

}

</script>

<style rel="stylesheet" type="text/css" src="../styles/appcore.css"></style>
