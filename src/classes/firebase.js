/*import Firebase from 'firebase'*/
import Firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'

class Fb{

   constructor ()
   {

     this.config = {

       apiKey: "AIzaSyBvgLilhFO2AbR4HSxyEWFSVnGRlvJzlNo",
       authDomain: "portfolio-f0e11.firebaseapp.com",
       databaseURL: "https://portfolio-f0e11.firebaseio.com",
       projectId: "portfolio-f0e11",
       storageBucket: "portfolio-f0e11.appspot.com",
       messagingSenderId: "956673020634"

     }

   }

   firebaseInit ()
   {

       let firebase;

       if (!Firebase.apps.length) {

         firebase = Firebase.initializeApp(this.config);

       }else{

          firebase = Firebase;

       }
       return firebase;

   }


   firestore ()
   {

     const firestore = this.firebaseInit().firestore();
     const settings = {timestampsInSnapshots: true};
     firestore.settings(settings);
     return firestore;

   }

   storage ()
   {

     let firestorage = this.firebaseInit().storage();
     return fireStorage;

   }

}
export default new Fb()
