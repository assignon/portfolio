import { TweenMax, TimelineMax } from "gsap";
class Animation
{

   constructor ()
   {



   }

   tl ()
   {

      let tl = new TimelineMax();
      return tl;

   }

   menuHover (target, dirction)
   {

      let tl = new TimelineMax();
      tl.to('#'+target+' p', 0.3, {scale: 1, bottom: dirction+'px', ease: Back.easeOut});
      //tl.to('#'+target, 0.3, {scale: 0.8, ease: Back.easeOut});

   }

   menuOut (target)
   {

      let tl = new TimelineMax();
      tl.to('#'+target+' p', 0.3, {scale: 0, bottom: '0px', ease: Back.easeOut});
      //tl.to('#'+target, 0.3, {scale: 1, ease: Back.easeInOut});

   }

}

export default new Animation()
