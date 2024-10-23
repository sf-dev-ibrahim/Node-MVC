const Url = require("url");
/** Class representing a request that will be
 *  respond in behalf of the user requests.
 */
class Request {
  /**
   * @property {string} controller - Name of the controller.
   */
  #controller;
  /**
   * @property {string} method - Method of req.
   */
  #method;
  /**
   * @property {Object} param - Form input by user.
   */
  #param;
  /**
   * @property {string} action - CRUD action.
   */
  #action;

  /**
   *A constructor to create singleton instance.
   */
  constructor() {
    if (Request.instance instanceof Request) {
      return Request.instance;
    }
    Object.freeze(this);
    Request.instance = this;
  }
  /**
   * This method parses the request and assignes the
   * parsed values to relevant class data members.
   * @param {Object} req
   */
  setRequest(req) {
    let request = Url.parse(req.url, true).query;

    this.#controller = request.controller;
    this.#method = req.method;
    this.#param = req.url;
    this.#action = request.action;
  }

  /**
   * Get the controller.
   * @returns {string} The controller name.
   */
  getController() {
    return this.#controller;
  }
  /**
   * Get the method.
   * @returns {string} The request method.
   */
  getMethod() {
    return this.#method;
  }
  /**
   * Get the pramas.
   * @returns {string} Form input by user.
   */
  getParam() {
    return this.#param;
  }
  /**
   * Get the action.
   * @returns {string} Action passed in url.
   */
  getAction() {
    return this.#action;
  }
}

module.exports = Request;
