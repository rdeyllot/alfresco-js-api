(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './VariablePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./VariablePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.VariablePaging = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.VariablePagingList);
  }
}(this, function(ApiClient, VariablePagingList) {
  'use strict';

  /**
   * The VariablePaging model module.
   * @module model/VariablePaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>VariablePaging</code>.
   * @alias module:model/VariablePaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>VariablePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariablePaging} obj Optional instance to populate.
   * @return {module:model/VariablePaging} The populated <code>VariablePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = VariablePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/VariablePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
