(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ProcessItemsPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ProcessItemsPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessItemsPaging = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.ProcessItemsPagingList);
  }
}(this, function(ApiClient, ProcessItemsPagingList) {
  'use strict';

  /**
   * The ProcessItemsPaging model module.
   * @module model/ProcessItemsPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProcessItemsPaging</code>.
   * @alias module:model/ProcessItemsPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ProcessItemsPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessItemsPaging} obj Optional instance to populate.
   * @return {module:model/ProcessItemsPaging} The populated <code>ProcessItemsPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ProcessItemsPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ProcessItemsPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
