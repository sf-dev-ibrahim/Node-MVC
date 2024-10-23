/** Class representing response that will send
 *  response to client according to user requests.
 */
class Response {
  /**
   * @property {number} statusCode - Http status code.
   */
  #statusCode;
  /**
   * @property {string} httpHeader - Represents the type of content responded by server.
   */
  #httpHeader;
  /**
   * @property {file} data - Html page data.
   */
  #data;

  /**
   * This method takes status code, http header and
   * data/html page return the response to the client.
   * @param {string} statusCode
   * @param {string} httpHeader
   * @param {file} data
   */
  setResponse(statusCode, httpHeader, data) {
    this.#statusCode = statusCode;
    this.#httpHeader = httpHeader;
    this.#data = data;
  }

  /**
   * Get the status code
   * @returns {number} The status code
   */
  getStatusCode() {
    return this.#statusCode;
  }
  /**
   * Get the http header
   * @returns {string} The http header
   */
  getHttpHeader() {
    return this.#httpHeader;
  }
  /**
   * Get the data
   * @returns {file} Html web page
   */
  getData() {
    return this.#data;
  }
}

module.exports = Response;
