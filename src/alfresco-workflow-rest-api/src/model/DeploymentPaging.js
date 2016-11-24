(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './DeploymentPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./DeploymentPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.DeploymentPaging = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.DeploymentPagingList);
  }
}(this, function(ApiClient, DeploymentPagingList) {
  'use strict';

  /**
   * The DeploymentPaging model module.
   * @module model/DeploymentPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeploymentPaging</code>.
   * @alias module:model/DeploymentPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeploymentPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeploymentPaging} obj Optional instance to populate.
   * @return {module:model/DeploymentPaging} The populated <code>DeploymentPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = DeploymentPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/DeploymentPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
