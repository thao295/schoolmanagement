import SchoolmanagerModelGenerated from "./generated/SchoolmanagerModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = SchoolmanagerModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await SchoolmanagerModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SchoolmanagerModelGenerated,
  ...customModel
};
