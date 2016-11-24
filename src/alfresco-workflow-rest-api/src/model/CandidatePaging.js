(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './CandidatePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./CandidatePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.CandidatePaging = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.CandidatePagingList);
  }
}(this, function(ApiClient, CandidatePagingList) {
  'use strict';

  /**
   * The CandidatePaging model module.
   * @module model/CandidatePaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CandidatePaging</code>.
   * @alias module:model/CandidatePaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>CandidatePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CandidatePaging} obj Optional instance to populate.
   * @return {module:model/CandidatePaging} The populated <code>CandidatePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = CandidatePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/CandidatePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
