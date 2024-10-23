const
  viewManager = require("../views/viewManager.js"),
  modelFactory = require("../models/modelFactory.js");

/**
 * This class is responsible for calling
 * actions according to user requests.
 */
class RestController{
  
  #controller;
  #action;

   /**
     * This mehod call methods on 
     * behalf of the requested actions.
     * @returns {Object} Model
     */
    callAction(controller, action){
      this.#controller = controller;
      this.#action = action;
      return this[this.#action]();
    }

   /**
   * This method returns the reponse object.
   * @returns {Object} Response
   */
    renderView() {
      const viewManagerObj = new viewManager();
      return viewManagerObj.getView(this.#controller, this.#action);
    }
    
    /**
     * This method retuns model object.
     * @returns {Object} Model
     */
    getModel() {
      const modelFactoryObj = new modelFactory();
      return modelFactoryObj.createModel(this.#controller);
    }

  /**
   * This method is responsidble for
   * adding new documents in DB.
   * @returns {Object} - Response  
   */
  create(){
    console.log('create function');
   const model = this.getModel();
   return this.renderView();
  }

  /**
   * This method is responsidble for
   * deleting documents in DB.
   * @returns {Object} - Response  
   */
  delete(){
    const model = this.getModel();
    return this.renderView();
  }
   /**
   * This method is responsidble for
   * retrieving list of documents in DB.
   * @returns {Object} - Response  
   */
  listData(){
    const model = this.getModel();
    return this.renderView();
  }
   /**
   * This method is responsidble for
   * updating documents in DB.
   * @returns {Object} - Response  
   */
  update(){
    const model = this.getModel();
  }
  /**
   * This method returns default view.
   */
  default(){
    const model = this.getModel();
    return this.renderView();
  }
}

module.exports = RestController;
