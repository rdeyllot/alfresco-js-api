(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './TaskPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./TaskPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.TaskPaging = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.TaskPagingList);
  }
}(this, function(ApiClient, TaskPagingList) {
  'use strict';

  /**
   * The TaskPaging model module.
   * @module model/TaskPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TaskPaging</code>.
   * @alias module:model/TaskPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TaskPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskPaging} obj Optional instance to populate.
   * @return {module:model/TaskPaging} The populated <code>TaskPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = TaskPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/TaskPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
