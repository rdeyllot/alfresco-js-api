(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './TaskFormsPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./TaskFormsPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.TaskFormsPaging = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.TaskFormsPagingList);
  }
}(this, function(ApiClient, TaskFormsPagingList) {
  'use strict';

  /**
   * The TaskFormsPaging model module.
   * @module model/TaskFormsPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TaskFormsPaging</code>.
   * @alias module:model/TaskFormsPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TaskFormsPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskFormsPaging} obj Optional instance to populate.
   * @return {module:model/TaskFormsPaging} The populated <code>TaskFormsPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = TaskFormsPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/TaskFormsPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
