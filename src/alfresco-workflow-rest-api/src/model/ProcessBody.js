(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Variable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Variable'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessBody = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Variable);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProcessBody model module.
   * @module model/ProcessBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProcessBody</code>.
   * @alias module:model/ProcessBody
   * @class
   * @param processDefinitionKey
   * @param variables
   */
  var exports = function(processDefinitionKey, variables) {


    this['processDefinitionKey'] = processDefinitionKey;

    this['variables'] = variables;
  };

  /**
   * Constructs a <code>ProcessBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessBody} obj Optional instance to populate.
   * @return {module:model/ProcessBody} The populated <code>ProcessBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('processDefinitionKey')) {
        obj['processDefinitionKey'] = ApiClient.convertToType(data['processDefinitionKey'], 'String');
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = Variable.constructFromObject(data['variables']);
      }
    }
    return obj;
  }


  /**
   * @member {String} processDefinitionKey
   */
  exports.prototype['processDefinitionKey'] = undefined;

  /**
   * @member {module:model/ProcessBody.Variable} variables
   */
  exports.prototype['variables'] = undefined;


  return exports;
}));
