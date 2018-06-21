<template>

  <div class="projectsdesc">

    <div class="projectsdeschead">

      <gohome width="auto" :homesrc="homeurl"></gohome>

      <div class="projectsparts">

      <!--  <menuItem
         menuName="Inleiding"
         :menuSrc=intro
         iconSize="small"
         menuid="intro"
         direction="-40"
         @menuclick="loadProjDesc('intro')"
        ></menuItem>

        <menuItem
         menuName="Beschrijving"
         :menuSrc=descImg
         iconSize="small"
         menuid="desc"
         direction="-40"
         @menuclick="loadProjDesc('description')"
        ></menuItem>

        <menuItem
         menuName="Eisen"
         :menuSrc=featuresImg
         iconSize="small"
         menuid="feature"
         direction="-40"
         @menuclick="loadProjDesc('features')"
        ></menuItem>

        <menuItem
         menuName="My aandeel"
         :menuSrc=mypart
         iconSize="small"
         menuid="mypart"
         direction="-40"
         @menuclick="loadProjDesc('myPart')"
        ></menuItem>

        <menuItem
         menuName="Techniek"
         :menuSrc=technical
         iconSize="small"
         menuid="technical"
         direction="-40"
         @menuclick="loadProjDesc('technicals')"
        ></menuItem>-->

        <div class="screens" v-if="curProjDescData[0].link == 'no'" @click="loadProjScreenshots">

          <menuItem
           menuName="Screenshots"
           :menuSrc=screenshot
           iconSize="small"
           menuid="shots"
           direction="-40"
          ></menuItem>

        </div>

      </div>

      <div class="projectctrl">

        <a :href="curProjDescData[0].link" v-if="curProjDescData[0].link != 'no'" target="_blank">

          <menuItem
           menuName="Link naar de site"
           :menuSrc=link
           iconSize="small"
           menuid="link"
           direction="-40"
          ></menuItem>

        </a>
        <a :href="curProjDescData[0].github" target="_blank">

          <menuItem
           menuName="Code op Github"
           :menuSrc=github
           iconSize="small"
           menuid="github"
           direction="-40"
          ></menuItem>

        </a>

      </div>

    </div>

    <div class="projdescContent">

      <div class="projectsdesccore">

         <h1>{{curProjDescData[0].name }}</h1>
         <p v-html="paragraph"></p>

      </div>

      <div class="scrensshots" v-if="screenshotContainer">

        <img src="../assets/images/close.svg" alt="" class="closeScreen" @click="screenshotContainer=false">
        <div class="scrensshotsCont">

          <img :src="screens1" alt="" class="screensImg">
          <img :src="screens2" alt="" class="screensImg">
          <img :src="screens3" alt="" class="screensImg">
          <img :src="screens4" alt="" class="screensImg">
          <img :src="screens5" alt="" class="screensImg">
          <img :src="screens6" alt="" class="screensImg">

        </div>

      </div>

    </div>

  </div>

</template>

<script>

import Menufy from '@/components/menufy'
import Animation from '../classes/tweenmax'
import Fb from '../classes/firebase'
import Gohome from '@/components/gohome'

export default {

  created ()
  {

    this.curProjName = this.$store.state.curprojName;
    this.loadProjDesc('intro');
    let self = this;
    this.$store.state.projects.find(function(el){

      if(el.name == self.$store.state.curprojName){

         self.curProjDescData.push(el);

      }


    });
    console.log(this.curProjDescData);

  },

  data () {

    return {

      curProjName: '',
      chapter: '',
      paragraph: '',
      homeurl: require('../assets/images/home.svg'),
      descImg: require('../assets/images/description.svg'),
      featuresImg: require('../assets/images/features.svg'),
      screenshot: require('../assets/images/screenshot.svg'),
      link: require('../assets/images/link.svg'),
      github: require('../assets/images/github.svg'),
      technical: require('../assets/images/coding.svg'),
      mypart: require('../assets/images/part.svg'),
      intro: require('../assets/images/intro.svg'),
      curprojGit: null,
      curprojLink: null,
      curProjDescData: [],
      screenshotContainer: false,
      screens1: '',
      screens2: '',
      screens3: '',
      screens4: '',
      screens5: '',
      screens6: ''

    }

  },

  components:{

    'menuItem': Menufy,
    'gohome': Gohome

  },

  methods: {

      loadProjDesc (fieldName)
      {

         let self = this;
         Fb.firestore().collection('projDescription').where('projName','==',this.curProjName)
         .get().then(function(snapshot){

            snapshot.forEach(function(doc){

              self.chapter = fieldName;

              let data = doc.data();
              if(fieldName == 'intro')
              {

                self.paragraph = doc.data().intro;

              }else if(fieldName == 'myPart')
              {

                self.paragraph = doc.data().myPart;

              }else if(fieldName == 'projName')
              {

                self.paragraph = doc.data().projName;

              }else if(fieldName == 'technicals')
              {

                self.paragraph = doc.data().technicals;

              }else if(fieldName == 'features')
              {

                self.paragraph = doc.data().features;

              }else if(fieldName == 'description')
              {

                self.paragraph = doc.data().description;

              }


            })

         })

      },


      loadProjScreenshots ()
      {

         let projName = this.curProjDescData[0].name;console.log(projName);
         let scrensshotsCont = document.querySelector('.scrensshotsCont');
         this.screenshotContainer = true;

         this.screens1 = require('../assets/screenshots/'+projName+'1'+'.png');
         this.screens2 = require('../assets/screenshots/'+projName+'2'+'.png');
         this.screens3 = require('../assets/screenshots/'+projName+'3'+'.png');
         this.screens4 = require('../assets/screenshots/'+projName+'4'+'.png');
         this.screens5 = require('../assets/screenshots/'+projName+'5'+'.png');
         this.screens6 = require('../assets/screenshots/'+projName+'6'+'.png');

      }

  }

}

</script>

<style lang="css" scoped>

.projectsdesc
{

   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;

}

.projectsdeschead
{

   width: 100%;
   height: auto;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   background-color: #54bf8e;
   padding-bottom: 5px;

}


.projectsparts
{

  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

}

.screens
{

   width: auto;
   height: auto;
   display: flex;
   justify-content: center;
   align-items: center;

}

.projectctrl
{

  width: 20%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

}

.projectctrl a
{

  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

}

.projdescContent
{

  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

}

.projectsdesccore
{

  width:  100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 70px;

}

.scrensshots
{

   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: center;
   position: absolute;
   top: 0px;
   background-color: #f3f3f3;
   z-index: 3;
   overflow: hidden;

}

.scrensshots .closeScreen
{

   width: 30px;
   height: 30px;
   position: relative;
   right: 30px;
   top: 30px;
   cursor: pointer;
   position: fixed;
   top: 0px;
   bottom: 0px;
   margin-top: 20px;
   margin-bottom: 20px;

}

.scrensshotsCont
{

   width: 100%;
   height: auto;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   overflow: scroll;

}

.screensImg
{

  width: 400px;
  border: 1px solid #030303;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  transform: scale(0.8,0.8);

}

.projectsdesccore h1
{

  width: auto;
  height: auto;
  margin-bottom: 5px;
  text-align: left;

}

.projectsdesccore p
{

   width: 60%;
   height: auto;
   font-size: 17px;
   color: #2c3e50;
   text-align: left;

}


</style>
