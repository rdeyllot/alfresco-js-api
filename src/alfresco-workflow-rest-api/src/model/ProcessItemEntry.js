(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ProcessItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ProcessItem'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessItemEntry = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.ProcessItem);
  }
}(this, function(ApiClient, ProcessItem) {
  'use strict';

  /**
   * The ProcessItemEntry model module.
   * @module model/ProcessItemEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProcessItemEntry</code>.
   * @alias module:model/ProcessItemEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>ProcessItemEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessItemEntry} obj Optional instance to populate.
   * @return {module:model/ProcessItemEntry} The populated <code>ProcessItemEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = ProcessItem.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ProcessItem} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
