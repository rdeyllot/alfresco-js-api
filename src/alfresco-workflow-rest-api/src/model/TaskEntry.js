(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Task'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Task'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.TaskEntry = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Task);
  }
}(this, function(ApiClient, Task) {
  'use strict';

  /**
   * The TaskEntry model module.
   * @module model/TaskEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TaskEntry</code>.
   * @alias module:model/TaskEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>TaskEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskEntry} obj Optional instance to populate.
   * @return {module:model/TaskEntry} The populated <code>TaskEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Task.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Task} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
