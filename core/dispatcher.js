const controllerFactory = require("../core/controllers/controllerFactory.js"),
  request = require("./request.js");

/**
 * This class is reponsile for getting
 * controller from controller factory.
 */
class Dispatcher {
  
  /**
   *This method dispatches request to controller 
    factory and get an controller object in response.
   * @returns {Object} Response
   */
  dispatchRequest() {
    const controllerFactoryObj = new controllerFactory();
    const requestObj = new request();
    const controller = requestObj.getController() ? requestObj.getController() : "default";
    const action = requestObj.getAction() ? requestObj.getAction() : "defaultView";
    const controllerObj = controllerFactoryObj.createController(controller);
    return controllerObj.callAction(controller, action);
  }
}

module.exports = Dispatcher;
