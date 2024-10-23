const dispatcher = require("../core/dispatcher.js");
/**
 * Class representing App the entery
 * point from where the control flows.
 */
class App {
  /**
   *This method creates Dispatcher class object 
    and calls dispatch function of class Dispatch.
   * @returns {Object} Response
   */
  run() {
    const dispatcherObj = new dispatcher();
    return dispatcherObj.dispatchRequest();
  }
}
module.exports = App;
