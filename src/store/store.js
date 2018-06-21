import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({

   state: {

     projects: [],
     templateName: 'myWorld',
     pageBackground: {backgroundColor: '#54bf8e'},
     loader: false,
     secondaryMenu: false,
     curprojName: '' //le nom du project surlequel on vien de cliquer

   },

   getters,
   mutations,
   actions

});
