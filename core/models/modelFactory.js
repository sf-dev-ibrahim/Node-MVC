/**
 * This class works on factory design pattern and
 * return model object on behalf of the controller name.
 */
module.exports = class ModelFactory {
  createModel(controller) {
    console.log("Request Model: ", controller);
    const Model = require(`../../app/models/${controller}.js`);
    const model = new Model();
    return model;
  }
};
