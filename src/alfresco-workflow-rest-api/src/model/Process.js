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
    root.AlfrescoWorkflowRestApi.Process = factory(root.AlfrescoWorkflowRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Process model module.
   * @module model/Process
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Process</code>.
   * @alias module:model/Process
   * @class
   * @param id
   * @param processDefinitionId
   * @param startedAt
   * @param startUserId
   */
  var exports = function(id, processDefinitionId, startedAt, startUserId) {

    this['id'] = id;
    this['processDefinitionId'] = processDefinitionId;
    this['startedAt'] = startedAt;
    this['startUserId'] = startUserId;

  };

  /**
   * Constructs a <code>Process</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Process} obj Optional instance to populate.
   * @return {module:model/Process} The populated <code>Process</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionId')) {
        obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'String');
      }
      if (data.hasOwnProperty('startedAt')) {
        obj['startedAt'] = ApiClient.convertToType(data['startedAt'], 'String');
      }
      if (data.hasOwnProperty('startUserId')) {
        obj['startUserId'] = ApiClient.convertToType(data['startUserId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} processDefinitionId
   */
  exports.prototype['processDefinitionId'] = undefined;

  /**
   * @member {String} startedAt
   */
  exports.prototype['startedAt'] = undefined;

  /**
   * @member {String} startUserId
   */
  exports.prototype['startUserId'] = undefined;
  

  return exports;
}));
