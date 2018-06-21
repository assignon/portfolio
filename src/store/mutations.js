export default {

   storeProjectsData (state, data)
   {

      state.projects.push(data);

    },

    chgComponent (state, newTempName)
    {

       state.templateName = newTempName;

     }

}
