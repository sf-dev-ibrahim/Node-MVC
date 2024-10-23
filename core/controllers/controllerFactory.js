/**
 * This class works on factory design pattern and returns
 * controller object on behalf of the controller name.
 */
class ControllerFactory {

  /**
   * This method returns a Controller class object.
   * @returns {Object} Controller
   */
  createController(controllerName) {
    const controller = require(`../../app/controllers/${controllerName}Controller.js`);
    return new controller();
  }
}
module.exports = ControllerFactory;
