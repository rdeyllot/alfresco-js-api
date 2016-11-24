(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ProcessDefinitionStartFormPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ProcessDefinitionStartFormPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessDefinitionStartFormPaging = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.ProcessDefinitionStartFormPagingList);
  }
}(this, function(ApiClient, ProcessDefinitionStartFormPagingList) {
  'use strict';

  /**
   * The ProcessDefinitionStartFormPaging model module.
   * @module model/ProcessDefinitionStartFormPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProcessDefinitionStartFormPaging</code>.
   * @alias module:model/ProcessDefinitionStartFormPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ProcessDefinitionStartFormPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessDefinitionStartFormPaging} obj Optional instance to populate.
   * @return {module:model/ProcessDefinitionStartFormPaging} The populated <code>ProcessDefinitionStartFormPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ProcessDefinitionStartFormPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ProcessDefinitionStartFormPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
