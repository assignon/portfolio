<template>

   <div class="projectsContainer">

    <gohome width="90%" :homesrc="homeurl"></gohome>

     <div class="projContent">

       <div class="previousProjs" v-if="prev>0">

          <menuItem menuName="vorig"  menuSrc="../assets/logo.png"  iconSize="small"  menuid="prev"></menuItem>

       </div>

       <div class="projectsCore">

          <div class="loader" v-if="this.$store.state.loader">

            <img src="../assets/images/loader.svg" alt="">
            <p>De projecten worden ingeladen...</p>

          </div>

          <div class="projects" v-for="project in this.$store.state.projects" @click="projDesciption(project.name)" v-else>

             <div class="projIllustrationCont">

                <img src="../assets/projectsImg/projects.svg" alt="" class="projIllustration" :id="project.projImg">

             </div>

             <div class="projDesc" :class="project.language">

               <h4>{{project.name}}</h4>
               <p>{{project.description}}</p>

             </div>

          </div>

       </div>

       <div class="nextProjs" v-if="next<6">

          <menuItem menuName="volgend"  menuSrc="../assets/logo.png"  iconSize="small"  menuid="next"></menuItem>

       </div>

     </div>

   </div>

</template>


<script>

import Menufy from '@/components/menufy'
import Animation from '../classes/tweenmax'
import Gohome from '@/components/gohome'

export default {

  data ()
  {

     return {

       prev: 0,
       next: 6,
       curLang: null,
       projects: this.$store.state.projects,
       homeurl: require('../assets/images/homeClr.svg'),
       podiumdeflux: require('../assets/projectsImg/podiumdeflux.png')

     }

  },

  components: {

    'menuItem': Menufy,
    'gohome': Gohome

  },

  created ()
  {

    this.curLang = this.$parent.$parent.curlang;
    var self = this;

  },

  mounted ()
  {

    this.projectsImages();

  },

  methods:
  {

     projectsImages ()
     {

       let projects = document.querySelectorAll('.projects img');
       for (var i = 0; i < projects.length; i++) {

          let imgs = projects[i];
          let imgName = imgs.id;console.log(imgs.src);
          imgs.src = `../assets/projectsImg/${imgName}`;console.log(imgs.src);

       }


     },

      getProjects (curlang)
      {

         let fb = this.$parent.$parent.firebase;
         let self = this;

         fb.firestore().collection('projects').where('language','==',curlang)
         .get().then(function(snapshot){

           let projectsCore = document.querySelector('.projectsCore');
           let tl = Animation.tl();

           snapshot.forEach(function(doc){

             self.projects.push(doc.data());

              if(self.projects.length == 0)
              {

                self.projects.push(doc.data());

              }else{

                self.projects = [];
                self.projects.push(doc.data());

              }
              /*let projects = document.createElement('div');
              projects.className = 'projects';
              //projects.className += ' '+curlang;

              let projIllustrationCont = document.createElement('div');
              projIllustrationCont.className = 'projIllustrationCont';

              let projIllustration = document.createElement('img');
              projIllustration.src = `../assets/projectsImg/${doc.data().projImg}`;
              projIllustration.className = 'projIllustration';

              let projDesc = document.createElement('div');
              projDesc.className = 'projDesc';
              projDesc.style.backgroundColor = doc.data().langColor;

              let projName = document.createElement('h4');
              projName.textContent = doc.data().name;

              let desc = document.createElement('p');
              desc.textContent = doc.data().description;

              projDesc.appendChild(projName);
              projDesc.appendChild(desc);

              projIllustrationCont.appendChild(projIllustration);

              projects.appendChild(projIllustrationCont);
              projects.appendChild(projDesc);

              //projectsCore.appendChild(projects);
              projectsCore.innerHTML = projects;*/

              tl.staggerTo('.projects', 0.5, {scale: 1, ease: Back.easeOut}, 0.3);

            /*  projects.addEventListener('click', function(){

                self.projDesciption(doc.data().name, tl);

              })*/

           })

         }).catch(function(error){

           console.log(error);

         })
         console.log(self.projects);

      },


      projDesciption (projName)
      {

        let curlang = this.curLang;
        let tl = Animation.tl();
        tl.staggerTo('.projects', 1, {scale: 0, ease: Back.easeInOut}, 0.3);
        //this.$parent.templateName = 'projectsdesc';
        this.$store.dispatch('commitChgComponent', 'projectsdesc');
        this.$store.state.secondaryMenu = true;
        this.$store.state.curprojName = projName;

        //tl.staggerTo('.menuitems div', 0.5, {scale: 0, ease: Back.easeOut});
        //tl.to('.secondaryMenu', 0.5, {scale: 1, ease: Back.easeOut});

      }

  }

}

</script>

<style rel="stylesheet" type="text/css" src="../styles/projects.css"></style>
