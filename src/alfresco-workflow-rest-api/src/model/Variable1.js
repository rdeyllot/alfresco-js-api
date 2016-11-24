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
    root.AlfrescoWorkflowRestApi.Variable = factory(root.AlfrescoWorkflowRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Variable model module.
   * @module model/Variable
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Variable</code>.
   * @alias module:model/Variable
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Variable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Variable} obj Optional instance to populate.
   * @return {module:model/Variable} The populated <code>Variable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('bpm_assignee')) {
        obj['bpm_assignee'] = ApiClient.convertToType(data['bpm_assignee'], 'String');
      }
      if (data.hasOwnProperty('bpm_sendEmailNotifications')) {
        obj['bpm_sendEmailNotifications'] = ApiClient.convertToType(data['bpm_sendEmailNotifications'], 'String');
      }
      if (data.hasOwnProperty('bpm_workflowPriority')) {
        obj['bpm_workflowPriority'] = ApiClient.convertToType(data['bpm_workflowPriority'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} bpm_assignee
   */
  exports.prototype['bpm_assignee'] = undefined;

  /**
   * @member {String} bpm_sendEmailNotifications
   */
  exports.prototype['bpm_sendEmailNotifications'] = undefined;

  /**
   * @member {String} bpm_workflowPriority
   */
  exports.prototype['bpm_workflowPriority'] = undefined;


  return exports;
}));
