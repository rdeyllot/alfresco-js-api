(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ProcessPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ProcessPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessPaging = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.ProcessPagingList);
  }
}(this, function(ApiClient, ProcessPagingList) {
  'use strict';

  /**
   * The ProcessPaging model module.
   * @module model/ProcessPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProcessPaging</code>.
   * @alias module:model/ProcessPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ProcessPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessPaging} obj Optional instance to populate.
   * @return {module:model/ProcessPaging} The populated <code>ProcessPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ProcessPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ProcessPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
