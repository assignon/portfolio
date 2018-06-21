<template>

   <div class="aboutPage">

     <div class="gohome" @click="goHome">

        <img :src="homeurl" alt="">

     </div>

     <div class="abouthead">

     </div>

     <div class="me"> </div>

     <div class="aboutcontent">

        <p>

          Ik ben Yanick Assignon, web-site en mobiel applicaties ontwikkelaar, en mijn pylosofie als programmeur is dat niets is onmogelijk om met code te creeren.
          Altijd afmaken wat ik begon, is het mijn motto.

          Tijdens deze laatste drie jaar concentreerde ik me het meest op mijn programmeur kwaliteiten, ik gebruikte ze om mijn programmeergevoel te scherpen om ze meer levensecht
          en vooruitziend te maken. Ik ben altijd een ontwikkelaar geweest die graag alles wil proberen, ontdekken, natuurlijk programmeren, creëert, uitvindt, leren, mijn grenzen verlegt en mijn horizon uitbreiden.
          Mijn nieuwsgierigheid naar technologie is niet vergelijkbaar met mijn honger naar kennis, deze dorst is de bron van mijn inspiratie en motivatie, die mij dwingt om
          meer en meer ver te zien en dingen steeds complexer uit te proberen en ontwerpen.
          Een van mijn passie in het leven is om uitdagingen aan te gaan, en deze passie past erg goed bij wat ik het liefst doe, programmeren.

          Over mijn opleidingen, vijf jaar geleden  heb ik wiskunde gestudeerd en na deze was ik in de fantastische wereld van computers ingedoken. Tijdens mijn tweede opleiding leerde ik met computers te werken, reparatie en onderhoud.
          Deze twee formaties spelen vandaag een vitale en belangrijke rol in mijn programmeur leven. Ik weet bijvoorbeeld hoe ik de belangrijkste tool van de programmeur, mijn computer, moet onderhouden en verzorgen.

        </p>

     </div>

   </div>

</template>

<script>

import Gohome from '@/components/gohome'

export default {

   created ()
   {



   },

   components: {

     'gohome': Gohome

   },

   data ()
   {

     return {

       homeurl: require('../assets/images/homeClr.svg')

     }

   },

   methods: {

     goHome ()
     {

       this.$router.push('/');
       this.$store.state.templateName = 'myWorld'
       this.$store.state.secondaryMenu = false;
       this.$store.state.pageBackground = {backgroundColor: '#54bf8e'};

     }

   }

}

</script>

<style lang="css" scoped>


.aboutPage
{

   width: 100%;
   height: 100vh;
   background-color: #f3f3f3;

}

.gohome
{

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 20px;

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


.abouthead
{

   width: 100%;
   height: 40vh;
   margin-top: -60px;
   background-color: #f3f3f3;
   background-image: url('../assets/vuejs.png');
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   border-bottom: 2px solid #f3f3f3;

}

.me
{

   width: 300px;
   height: 300px;
   border: 1px solid #54bf8e;
   background-color: #f3f3f3;
   border-radius: 100%;
   position: relative;
   bottom: 150px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: auto;
   background-image: url('../assets/me.jpg');
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;

}

.me img
{

  width: 100%;
  height: 100%;

}

.aboutcontent
{

   width: 80%;
   height: auto;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: auto;
   position: relative;
   bottom: 100px;

}

.aboutcontent p
{

  width: 70%;
  height: auto;
  text-align: left;
  font-size: 18px;
  color: #030303;
  line-height: 1.5

}
</style>
