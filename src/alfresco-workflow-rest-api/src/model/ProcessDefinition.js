(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessDefinition = factory(root.AlfrescoWorkflowRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProcessDefinition model module.
   * @module model/ProcessDefinition
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProcessDefinition</code>.
   * @alias module:model/ProcessDefinition
   * @class
   * @param id
   * @param name
   * @param category
   * @param deploymentId
   * @param description
   */
  var exports = function(id, name, category, deploymentId, description) {

    this['id'] = id;
    this['name'] = name;
    this['category'] = category;
    this['deploymentId'] = deploymentId;
    this['description'] = description

  };

  /**
   * Constructs a <code>ProcessDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessDefinition} obj Optional instance to populate.
   * @return {module:model/ProcessDefinition} The populated <code>ProcessDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('deploymentId')) {
        obj['deploymentId'] = ApiClient.convertToType(data['deploymentId'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;

  /**
   * @member {String} deploymentId
   */
  exports.prototype['deploymentId'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  

  return exports;
}));
