(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ProcessDefinitionPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ProcessDefinitionPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessDefinitionPaging = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.ProcessDefinitionPagingList);
  }
}(this, function(ApiClient, ProcessDefinitionPagingList) {
  'use strict';

  /**
   * The ProcessDefinitionPaging model module.
   * @module model/ProcessDefinitionPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProcessDefinitionPaging</code>.
   * @alias module:model/ProcessDefinitionPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ProcessDefinitionPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessDefinitionPaging} obj Optional instance to populate.
   * @return {module:model/ProcessDefinitionPaging} The populated <code>ProcessDefinitionPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ProcessDefinitionPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ProcessDefinitionPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
