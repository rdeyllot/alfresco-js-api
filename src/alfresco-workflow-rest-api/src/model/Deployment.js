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
    root.AlfrescoWorkflowRestApi.Deployment = factory(root.AlfrescoWorkflowRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Deployment model module.
   * @module model/Deployment
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Deployment</code>.
   * @alias module:model/Deployment
   * @class
   * @param id
   * @param name
   * @param category
   * @param deployedAt
   */
  var exports = function(id, name, category, deployedAt) {

    this['id'] = id;
    this['name'] = name;
    this['category'] = category;
    this['deployedAt'] = deployedAt;

  };

  /**
   * Constructs a <code>Deployment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Deployment} obj Optional instance to populate.
   * @return {module:model/Deployment} The populated <code>Deployment</code> instance.
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
      if (data.hasOwnProperty('deployedAt')) {
        obj['deployedAt'] = ApiClient.convertToType(data['deployedAt'], 'String');
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
   * @member {String} deployedAt
   */
  exports.prototype['deployedAt'] = undefined;
  

  return exports;
}));
