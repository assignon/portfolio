export default {

   commitstoreProjectsData (store, data)
   {

      store.commit('storeProjectsData', data);

   },

   commitChgComponent (store, newTemp)
   {

      store.commit('chgComponent', newTemp);

   }

}
