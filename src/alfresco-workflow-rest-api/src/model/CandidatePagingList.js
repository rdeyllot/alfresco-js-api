(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.CandidatePagingList = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Pagination);
  }
}(this, function(ApiClient, Pagination) {
  'use strict';

  /**
   * The CandidatePagingList model module.
   * @module model/CandidatePagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CandidatePagingList</code>.
   * @alias module:model/CandidatePagingList
   * @class
   * @param pagination
   */
  var exports = function(pagination) {

    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>CandidatePagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CandidatePagingList} obj Optional instance to populate.
   * @return {module:model/CandidatePagingList} The populated <code>CandidatePagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));
