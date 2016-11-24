(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Process'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Process'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessEntry = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Process);
  }
}(this, function(ApiClient, Process) {
  'use strict';

  /**
   * The ProcessEntry model module.
   * @module model/ProcessEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProcessEntry</code>.
   * @alias module:model/ProcessEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>ProcessEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessEntry} obj Optional instance to populate.
   * @return {module:model/ProcessEntry} The populated <code>ProcessEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Process.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Process} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
