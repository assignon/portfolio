<template>

  <div class="menufyCore" :id="menuid" @click="menuClick" @mouseover.stop="menuOver" @mouseout.stop="menuOut">

    <p>{{menuName}}</p>
    <div class="iconcont" :class="iconSize">

       <img :src="menuSrc" alt="">

    </div>

  </div>

</template>

<script>

import Animation from '../classes/tweenmax'

export default {

  props: [

    'menuName',
    'menuSrc',
    'iconSize',
    'menuid',
    'direction',

  ],

  data ()
  {

    return {}

  },

  methods: {

   menuClick ()
   {

     this.$emit('menuclick');

   },

   menuOver ()
   {

     //this.$emit('menuover');
     let curMenu = event.currentTarget.id
     Animation.menuHover(curMenu, this.direction);

   },

   menuOut ()
   {

    // this.$emit('menuout');
    let curMenu = event.currentTarget.id
    Animation.menuOut(curMenu);

   }

  }

}

</script>

<style lang="css" scoped>

.menufyCore
{

   width: auto;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-left: 5px;
   margin-right: 5px;
   /*margin-bottom: 5px;*/
   cursor: pointer;

}

.menufyCore p
{

   width: auto;
   height: auto;
   padding-left: 10px;
   padding-right: 10px;
   padding-top: 5px;
   padding-bottom: 5px;
   color: #f3f3f3;
   background-color: #030303;
   border: 1px solid #030303;
   border-radius: 3px;
   margin-bottom: -40px;
   z-index: 1;
   transform: scale(0,0);
   position: relative;

}

.iconcont
{

  display: flex;
  justify-content: center;
  align-items: center;
  /*border: 1px solid #f3f3f3;
  border-radius: 100%;*/
  z-index: 2;

}

.menufyCore img
{

  width: 90%;
  height: 90%;
  text-decoration: none;

}

.menufyCore .small
{

  width: 45px;
  height: 45px;

}

.menufyCore .medium
{

  width: 60px;
  height: 60px;

}

.menufyCore .large
{

  width: 120px;
  height: 120px;

}

</style>
