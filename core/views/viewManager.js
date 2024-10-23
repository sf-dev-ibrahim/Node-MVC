const 
  fs = require("fs"),
  response = require("../response.js"),
  {resolve} = require('path');

/**
 * The purpose of this class is to return
 * view in response of user request.
 */
module.exports = class ViewManager {
  
  /**
   * This method works on a factory design principles
   * simply returns the response as a view on behallf of
   * controller and action.
   * @param {String} controller - Name of the controller.
   * @param {String} action - User action against controller.
   * @returns {Object} Response
   */
  getView(controller, action) {
    const responseObj = new response();
    const data = fs.readFileSync(
      resolve(`../../node-mvc/mvc-node/app/views/${controller}/${action}.html`),
      { encoding: "utf8", flag: "r" }
    );
    responseObj.setResponse(200, "text/html", data);
    return responseObj;
  }
};