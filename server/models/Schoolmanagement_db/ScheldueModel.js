import ScheldueModelGenerated from "./generated/ScheldueModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ScheldueModelGenerated.init();
  
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
      return await ScheldueModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ScheldueModelGenerated,
  ...customModel
};
