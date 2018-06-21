<template lang="html">

  <div class="contact">

    <div class="gohome" @click="goHome">

       <img :src="homeurl" alt="">

    </div>

    <div class="contacthead">

    </div>

    <div class="contactContent">

       <div class="content">

         <h3>Neem contact met mij op via:</h3>
         <div class="contactme">

           <img src="../assets/images/mail.svg" alt="">
           <p>Yanick007assignon@gmail.com</p>

         </div>

       </div>

       <form class="sendmail">

         <input type="text" name="" value="" placeholder="Uw naam" v-model="name" required>
         <input type="email" name="" value="" placeholder="Uw email" v-model="email" required>
         <textarea name="name" rows="8" cols="80" placeholder="Bericht" v-model="message" required></textarea>
         <input type="submit" name="" value="Verzenden" id="send" @submit.prevent="sendMail">

       </form>

       <p class="error">{{error}}</p>

    </div>

  </div>

</template>

<script>

export default {

   created (){},

   data (){
     return {

       homeurl: require('../assets/images/home.svg'),
       error: '',
       name: '',
       email: '',
       message: ''

    }
 },

     methods: {

       goHome ()
       {

         this.$router.push('/');
         this.$store.state.templateName = 'myWorld'
         this.$store.state.secondaryMenu = false;
         this.$store.state.pageBackground = {backgroundColor: '#54bf8e'};

       },

       sendMail ()
       {

          event.preventDefault();
          console.log('ik ben geklickt');

       }

   }

}

</script>

<style lang="css" scoped>

.contact
{

  width: 100%;
  height: 90vh;
  background-color: #f3f3f3;

}

.gohome
{

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  margin-top: 20px;
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

.contacthead
{

   width: 100%;
   height: 40vh;
   margin-top: -60px;
   background-color: #f3f3f3;
   background-image: url('../assets/contact.jpg');
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   border-bottom: 2px solid #f3f3f3;

}

.contactContent
{

   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;


}

.content
{

   width: 50%;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

}

.content h3
{

   color: #030303;
   text-align: left;

}

.contactme
{

   width: 50%;
   height: auto;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;

}

.contactme img
{

   width: 30px;
   height: 30px;
   margin-right: 5px;

}

.contactme p
{

   width: 70%;
   height: auto;
   font-size: 17px;
   color: #030303;
   text-align: left;

}

.sendmail
{

   width: 70%;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 20px;

}

.sendmail input
{

   width: 80%;
   height: 40px;
   border: 1px solid #54bf8e;
   border-radius: 3px;
   padding-left: 5px;
   color: #030303;
   font-size: 17px;
   text-align: left;
   margin-top: 7px;
   margin-bottom: 7px;

}

.sendmail textarea
{

   width: 80%;
   height: 150px;
   border: 1px solid #54bf8e;
   padding-left: 5px;
   padding-top: 5px;
   font-size: 17px;
   color: #030303;
   border-radius: 3px;
   margin-top: 7px;
   margin-bottom: 7px;

}

#send
{

   background-color: #54bf8e;
   text-align: center;
   cursor: pointer;
   padding-left: 0px;
   color: white;
   font-size: 20px;

}

#send:hover
{

  background-color: #f3f3f3;
  color: #030303;

}

.error
{

   color: #54bf8e;
   font-size: 17px;
   text-align: center;

}

</style>
