<template>

   <div class="lauchAnimation" :id="launchid">

      <div class="maincompoCont">

         <img :src="mainComponent" alt="" class="maincomponent">
         <p>{{mainContent}}</p>

      </div>
      <div class="componentsCont">

        <div class="lauchItems" v-for="lauchComponent in lauchComponents" :style="{left: lauchComponent.componentL, top: lauchComponent.componentT, bottom: lauchComponent.componentB, right: lauchComponent.componentR}">

           <div class="imgSrunder">

             <img :src="lauchComponent.componentImg" alt="">

           </div>

           <div class="contentCont">

             <h4>{{lauchComponent.componentTitle}}</h4>
             <p>{{lauchComponent.componentcontent}}</p>

           </div>

        </div>

      </div>

   </div>

</template>

<script>

import Animation from '../classes/tweenmax'

export default {

  created ()
  {



  },

  props:{

    lauchComponents: Array,// tableau contenent le nombre d element
  //  componentL: Number,// positionnenment gauche des elements par rapport a la maincomponent
  //  componentT: Number, // positionnenment haut des elements par rapport a la maincomponent
    mainComponent: String, //l image au centre
    //direction: Number,// le positionnement gauche ou droite du contenu
    mainContent: String,
    launchid: String

  },

  data (){

    return {

      curid: 0

    }

  },

  methods: {

      launch ()
      {

        let tl = Animation.tl();
        let launch = document.querySelectorAll('.myworld .lauchAnimation');
        tl.to('#'+launch[0].id+' .maincompoCont', 0.5, {scale: 1, ease: Back.easeOut}, 0.5);
        tl.to('#'+launch[0].id+' .lauchItems', 0.5, {scale: 1, ease: Back.easeOut}, '+1');
        tl.to('#'+launch[0].id+' .contentCont', 0.5, {scale: 1, top: '100px', ease: Back.easeOut}, '+1', '#end');

        //hide components
        tl.to('#'+launch[0].id+' .contentCont', 0.5, {scale: 0, top: '0px', ease: Back.easeInOut}, 'end += 7', '#enddone');
        tl.to('#'+launch[0].id+' .lauchItems', 0.5, {scale: 0, ease: Back.easeInOut},'enddone', '#last');

        //tl.to('#'+launch[0].id+' .maincompoCont img', 0.5, {bottom: '5px', ease: Back.easeOut}, 'last+0.5', '#terminus');
        tl.to('#'+launch[0].id+' .maincompoCont p', 0.5, {scale: 1, top: '100px', ease: Back.easeOut}, 'last+0.5', '#terminus');

        //tl.to('#'+launch[0].id+' .maincompoCont img', 0.5, {bottom: '0px', ease: Back.easeOut}, 'terminus+=2');
        tl.to('#'+launch[0].id+' .maincompoCont p', 0.5, {scale: 0, top: '0px', ease: Back.easeOut}, 'terminus+=3.5');
        tl.to('#'+launch[0].id+' .maincompoCont', 0.5, {scale: 0, ease: Back.easeOut}, 'terminus+=4', '#endfirst');

        //2nd animation
        tl.to('#'+launch[1].id+' .maincompoCont', 0.5, {scale: 1, ease: Back.easeOut}, 'endfirst+=0.5', '#start2');
        tl.to('#'+launch[1].id+' .lauchItems', 0.5, {scale: 1, ease: Back.easeOut}, 'start2');
        tl.to('#'+launch[1].id+' .contentCont', 0.5, {scale: 1, top: '100px', ease: Back.easeOut}, 'start2+=1', '#end2');

        tl.to('#'+launch[1].id+' .contentCont', 0.5, {scale: 0, top: '0px', ease: Back.easeInOut}, 'end2 += 7', '#enddone2');
        tl.to('#'+launch[1].id+' .lauchItems', 0.5, {scale: 0, ease: Back.easeInOut}, 'enddone2', '#last2');

        //tl.to('#'+launch[1].id+' .maincompoCont img', 0.5, {bottom: '5px', ease: Back.easeOut}, 'last2+0.5', '#terminus2');
        tl.to('#'+launch[1].id+' .maincompoCont p', 0.5, {scale: 1, top: '100px', ease: Back.easeOut}, 'last2+0.5', '#terminus2');

        //tl.to('#'+launch[1].id+' .maincompoCont img', 0.5, {top: '-10px', ease: Back.easeOut}, 'terminus2+=2');
        tl.to('#'+launch[1].id+' .maincompoCont p', 0.5, {scale: 0, top: '0px', ease: Back.easeOut}, 'terminus2+=3.5');
        tl.to('#'+launch[1].id+' .maincompoCont', 0.5, {scale: 0, ease: Back.easeOut}, 'terminus2+=4', '#endfirst2');

        //3th animation
        tl.to('#'+launch[2].id+' .maincompoCont', 0.5, {scale: 1, ease: Back.easeOut}, 'endfirst2+=0.5', '#start3');
        tl.to('#'+launch[2].id+' .lauchItems', 0.5, {scale: 1, ease: Back.easeOut}, 'start3');
        tl.to('#'+launch[2].id+' .contentCont', 0.5, {scale: 1, top: '100px', ease: Back.easeOut}, 'start3+=1', '#end3');

        tl.to('#'+launch[2].id+' .contentCont', 0.5, {scale: 0, top: '0px', ease: Back.easeInOut}, 'end3 += 5', '#enddone3');
        tl.to('#'+launch[2].id+' .lauchItems', 0.5, {scale: 0, ease: Back.easeInOut}, 'enddone3', '#last3');

        //tl.to('#'+launch[2].id+' .maincompoCont img', 0.5, {bottom: '5px', ease: Back.easeOut}, 'last3+0.5', '#terminus3');
        tl.to('#'+launch[2].id+' .maincompoCont p', 0.5, {scale: 1, top: '100px', ease: Back.easeOut}, 'last3+0.5', '#terminus3');

        //tl.to('#'+launch[2].id+' .maincompoCont img', 0.5, {top: '-10px', ease: Back.easeOut}, 'terminus3+=2');
        tl.to('#'+launch[2].id+' .maincompoCont p', 0.5, {scale: 0, top: '0px', ease: Back.easeOut}, 'terminus3+=3.5');
        tl.to('#'+launch[2].id+' .maincompoCont', 0.5, {scale: 0, ease: Back.easeOut}, 'terminus3+=4', '#endfirst3');

      },


      setinterval ()
      {

        this.launch();
        var self = this;
        setInterval(function(){

          self.launch();

        }, 45000);

      }

  }

}

</script>

<style lang="css" scoped>

  .lauchAnimation
  {

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

  }

  .maincompoCont
  {

    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    z-index: 2;
    transform: scale(0,0);
    align-items: center;

  }

  .maincomponent
  {

    width: 250px;
    height: 250px;
    position: absolute;

  }

  .maincompoCont p
  {

    width: 230px;
    height: auto;
    text-align: center;
    font-size: 17px;
    color: #f3f3f3;
    border-top: 1px solid #f3f3f3;
    padding-top: 10px;
    padding-left: 40px;
    padding-right: 40px;
    position: absolute;
    transform: scale(0,0);
    margin-top: 20px;
    /*top: 100px;*/

  }

  .componentsCont
  {

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

  }

  .lauchItems
  {

    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: scale(0,0);

  }

  .imgSrunder
  {

    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

  }

  .imgSrunder img
  {

    width: 100px;
    height: 100px;
    position: relative;

  }

  .contentCont
  {

    width: auto;
    height: auto;
    padding: 10px;
    border: 1px solid #030303;
    border-radius: 3px;
    background-color: #030303;
    position: relative;
    right: 150px;
    transform: scale(0,0);

  }

  .contentCont h4
  {

    text-align: left;
    color: #f3f3f3;
    margin-bottom: 0px;
    margin-top: 0px;

  }

  .contentCont p
  {

    text-align: left;
    color: #f3f3f3;
    font-size: 15px;
    width: 200px;
    height: auto;
    margin-bottom: 0px;
    margin-top: 10px;

  }

</style>
