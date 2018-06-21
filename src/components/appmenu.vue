<template>

  <div class="appMenu">

    <div class="mainMenu" v-if="!this.$store.state.secondaryMenu">

      <div class="submenus">

        <menuItem
         menuName="php"
         :menuSrc=php
         iconSize="medium"
         menuid="php"
         direction="50"
         @menuclick="loadProjects('php')"
        ></menuItem>

        <menuItem
         menuName="cordova"
         :menuSrc=cordova
         iconSize="medium"
         menuid="cordova"
         direction="50"
         @menuclick="loadProjects('cordova')"
        ></menuItem>

        <menuItem
         menuName="vue"
         :menuSrc=vue
         iconSize="medium"
         menuid="vue"
         direction="50"
         @menuclick="loadProjects('vue')"
        ></menuItem>

      </div>

      <div class="menuitems">

        <router-link to="/contact">

          <menuItem
           menuName="Contact"
           :menuSrc=contact
           iconSize="medium"
           menuid="contact"
           direction="50"
           ></menuItem>

        </router-link>

        <div class="showSubItems" v-if="subitemsShow">

          <menuItem
           menuName="Sluiten"
           :menuSrc= showTechs
           iconSize="large"
           menuid="techno"
           direction="50"
           @menuclick="menuClickHide()"
          ></menuItem>

        </div>

        <div class="showSubItems" v-else>

          <menuItem
           menuName="Ontdekt mijn wereld"
           :menuSrc= showTechs
           iconSize="large"
           menuid="techno"
           direction="50"
           @menuclick="menuClick()"
          ></menuItem>

        </div>

        <router-link to="/about">

          <menuItem
           menuName="Over Mij"
           :menuSrc=about
           iconSize="medium"
           menuid="about"
           direction="50"
          ></menuItem>

        </router-link>

      </div>

    </div>

    <div class="secondaryMenu" v-else @click="showPrimaryMenu">

       <div class="menuImgCont"><img src="../assets/images/apps.svg" alt=""></div>

    </div>

  </div>

</template>

<script>

import Menufy from '@/components/menufy'
import Animation from '../classes/tweenmax'

export default {

   data ()
   {

     return {

        subitemsShow: false,
        //secondaryMenu: false,
        projsArr: [],
        showTechs: require('../assets/images/world.svg'),
        contact: require('../assets/images/contact.svg'),
        about: require('../assets/images/about.svg'),
        vue: require('../assets/images/vuejs.svg'),
        php: require('../assets/images/php.svg'),
        cordova: require('../assets/images/cordova.svg')

     }

   },

   components: {

     'menuItem': Menufy

   },

   methods: {

     menuHover ()
     {

      // let curMenu = event.currentTarget.id
      // this.$parent.tweenmax.menuHover(curMenu);

     },


     menuOut ()
     {

      // let curMenu = event.currentTarget.id
      // this.$parent.tweenmax.menuOut(curMenu);

     },


     menuClick ()
     {

       let tl = this.$parent.tweenmax.tl();
       tl.staggerTo('.submenus .menufyCore', 0.5, {scale: 1, marginBottom: '20px', ease: Back.easeOut}, 0.1);
       this.subitemsShow = true;
       //this.$parent.$children[0].templateName  = 'projects';

     },


     menuClickHide ()
     {

       let tl = this.$parent.tweenmax.tl();
       tl.staggerTo('.submenus .menufyCore', 0.5, {scale: 0, marginBottom: '-40px', ease: Back.easeInOut}, 0.1);
       this.subitemsShow = false;

     },


     goHome()
     {

       this.$parent.$children[0].templateName  = 'myWorld';
       this.$parent.$parent.pageBackground.backgroundColor = "red";

     },


     loadProjects (lang)
     {

         this.menuClickHide();
         this.$parent.curlang = lang;
         this.$store.state.pageBackground = {backgroundColor: '#f3f3f3'};
         this.showTechs = require('../assets/images/worldClr.svg');
         this.about = require('../assets/images/aboutClr.svg');
         this.contact = require('../assets/images/contactClr.svg');
         this.cordova = require('../assets/images/cordovaClr.svg');
         this.php = require('../assets/images/phpClr.svg');
         this.vue = require('../assets/images/vuejsClr.svg');
         this.$store.state.loader = true;
         this.$store.dispatch('commitChgComponent', 'projects');
         let fb = this.$parent.firebase;
         let self = this;
         let tl = Animation.tl();

         fb.firestore().collection('projects').where('language','==',lang)
         .get().then(function(snapshot){

           self.$store.state.loader = false;
           self.$store.state.projects = [];

           snapshot.forEach(function(doc){

             self.$store.dispatch('commitstoreProjectsData',doc.data());
             tl.staggerTo('.projects', 0.5, {scale: 1, ease: Back.easeOut}, 0.3);

           })

         }).catch(function(error){

           console.log(error);

         })

     },


     showPrimaryMenu ()
     {

        let tl = Animation.tl();
      //  tl.to('.secondaryMenu', 1, {scale: 0, ease: Back.easeOut});
        this.$store.state.secondaryMenu = false;
      //  tl.staggerTo('.menuitems div', 0.5, {scale: 1, ease: Back.easeOut});

     }

   }

}

</script>

<style rel="stylesheet" type="text/css" src="../styles/appmenu.css"></style>
