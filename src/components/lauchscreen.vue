<template>

<div class="myworld">

  <lauchAnimation

    :lauchComponents=lauchPhpComponents
    :mainComponent=mainPhpComponent
    mainContent= "Maak snel, geweldig, dinamish website met krachtige tool voor het maken van dynamische en interactieve webpagina. "
    launchid= "launch1"

  ></lauchAnimation>

  <lauchAnimation

    :lauchComponents=lauchVueComponents
    :mainComponent=mainVueComponent
    mainContent= "Vind je React of Angular leuk om te gebruiken, dan ga je vue de progressif javascript framework nog meer leuker."
    launchid= "launch2"

  ></lauchAnimation>

  <lauchAnimation

    :lauchComponents=lauchCordovaComponents
    :mainComponent=mainCordovaComponent
    mainContent= "Maak mobiel apps die op elke bestuuring systeem draaien alleen met Html, Css en JavaScript."
    launchid= "launch3"

  ></lauchAnimation>

</div>

</template>


<script>

import LauchAnimation from '@/components/lauchanimation'
import Animation from '../classes/tweenmax'

export default {

  created ()
  {

   //this.$children[0].lauch();

  },

  mounted ()
  {

     console.log(this.$children);
     this.$children[0].setinterval();

  },

   components:{

     'lauchAnimation': LauchAnimation

   },

   data ()
   {

     return {

       lauchPhpComponents: [

         {componentImg: require('../assets/langtech/mysql.svg'), componentTitle: 'MySql', componentcontent: 'interactie met de MySql database om uw site dynamischer te maken', componentL: '15%', componentT: '0px', componentB: '60%', componentR: '0px'},
         {componentImg: require('../assets/langtech/website.svg'), componentTitle: 'Website', componentcontent: 'PHP is een veel gebruikte, gratis, efficiënte en krachtige tool voor het maken van dynamische en interactieve webpagina', componentL: '0px', componentT: '0px', componentB: '0px', componentR: '40%'},
         {componentImg: require('../assets/langtech/hosting.svg'), componentTitle: 'Hosting', componentcontent: 'Host je website super makkelijk en snel', componentL: '18%', componentT: '40%', componentB: '0px', componentR: '0px'},
         {componentImg: require('../assets/langtech/javascript.svg'), componentTitle: 'JavaScript', componentcontent: 'Maak je paginas meer dinamische en gebruikvriendelijker voor de gebruikers', componentL: '70%', componentT: '0px', componentB: '0px', componentR: '0px'}

       ],
       mainPhpComponent: require('../assets/langtech/php.svg'),

       lauchVueComponents: [

         {componentImg: require('../assets/langtech/firebase.svg'), componentTitle: 'FireBase', componentcontent: 'Met Firebase kunt u krachtigere, veiligere en schaalbare apps bouwen. Firestore, storage en Realtime Database zijn een van de meerdere dingen die firebase te bieden heeft.', componentL: '15%', componentT: '0px', componentB: '55%', componentR: '0px'},
         //{componentImg: require('../assets/langtech/webapp.svg'), componentTitle: 'SPA & WebApp', componentcontent: 'Maak website', componentL: '0px', componentT: '0px', componentB: '0px', componentR: '50%'},
         {componentImg: require('../assets/langtech/hosting.svg'), componentTitle: 'Hosting', componentcontent: 'Host je webapp heel makkelijk op bedenk en veilig hosting als Heroku en Digital Ocean.', componentL: '0px', componentT: '50%', componentB: '0px', componentR: '20%'},
         {componentImg: require('../assets/langtech/nuxt.svg'), componentTitle: 'Nuxt', componentcontent: 'Vuejs is een frontend framwork maar Nuxtjs laat je een backend voor jouw vue app te schrijven zonder een andere technologie(Express, adonit) te gebruiken.', componentL: '0px', componentT: '0px', componentB: '0px', componentR: '40%'},
         {componentImg: require('../assets/langtech/vuex.png'), componentTitle: 'Vuex', componentcontent: 'Steeds moeit met data die overal in je applicatie vespreid zijn, vuex is de oplossing, een state management pattern + library voor Vue.js-applicaties, die je data in een plek houd en geeft toegaang aan elke componenten van jouw app', componentL: '55%', componentT: '55%', componentB: '0px', componentR: '0px'},
         {componentImg: require('../assets/langtech/vuetify.svg'), componentTitle: 'Vuetify', componentcontent: 'Een UI framwork speciaal voor vuejs gemaak, maak prattig en gebruikvriendelijk webapp in paar code ', componentL: '60%', componentT: '0px', componentB: '10%', componentR: '0px'}

       ],
       mainVueComponent: require('../assets/langtech/vue.svg'),

       lauchCordovaComponents: [

         {componentImg: require('../assets/langtech/apps.svg'), componentTitle: 'Mobiel Apps', componentcontent: 'Maak geweldige mobiel apps die op alle platform(android, ios, blackberry en windows phone) werkt en interageert met de software van jouw mobiel(camera etc...)', componentL: '0px', componentT: '0px', componentB: '60%', componentR: '10%'},
         //{componentImg: require('../assets/langtech/vuecordova.svg'), componentTitle: 'VueCordova', componentcontent: 'Maak website', componentL: '0px', componentT: '0px', componentB: '0px', componentR: '50%'},
         {componentImg: require('../assets/langtech/platform.svg'), componentTitle: 'Platform', componentcontent: 'Schrijf een code die op elke besturing systeem werkt.', componentL: '18%', componentT: '40%', componentB: '0px', componentR: '0px'},
         {componentImg: require('../assets/langtech/vuejs.svg'), componentTitle: 'Vuejs', componentcontent: 'Boost je cordova app met vuejs', componentL: '50%', componentT: '0px', componentB: '0px', componentR: '0px'}

       ],
       mainCordovaComponent: require('../assets/langtech/cordova.svg')

     }

   },

   methods: {



   }

}

</script>


<style lang="css" scoped>

.myworld
{

   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;

}

</style>
