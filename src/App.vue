<template>

  <div class="app" style="background-color: #f3f3f3;">

    <router-view/>

  </div>

</template>

<script>

export default {

  name: 'App',

  data () {

      return {

         pageBackground: {backgroundColor: '#54bf8e'}

      }

  }

}

</script>

<style rel="stylesheet" type="text/css" src="./styles/app.css"></style>
