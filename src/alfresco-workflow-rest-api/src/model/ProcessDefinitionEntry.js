(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ProcessDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ProcessDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessDefinitionEntry = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.ProcessDefinition);
  }
}(this, function(ApiClient, ProcessDefinition) {
  'use strict';

  /**
   * The ProcessDefinitionEntry model module.
   * @module model/ProcessDefinitionEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProcessDefinitionEntry</code>.
   * @alias module:model/ProcessDefinitionEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>ProcessDefinitionEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessDefinitionEntry} obj Optional instance to populate.
   * @return {module:model/ProcessDefinitionEntry} The populated <code>ProcessDefinitionEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = ProcessDefinition.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ProcessDefinition} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
