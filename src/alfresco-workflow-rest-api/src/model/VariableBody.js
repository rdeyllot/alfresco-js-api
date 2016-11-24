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
    root.AlfrescoWorkflowRestApi.VariableBody = factory(root.AlfrescoWorkflowRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VariableBody model module.
   * @module model/VariableBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>VariableBody</code>.
   * @alias module:model/VariableBody
   * @class
   * @param name
   * @param value
   * @param type
   */
  var exports = function(name, value, type) {

    this['name'] = name;
    this['value'] = value;
    this['type'] = type;

  };

  /**
   * Constructs a <code>VariableBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariableBody} obj Optional instance to populate.
   * @return {module:model/VariableBody} The populated <code>VariableBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;


  return exports;
}));
