(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Deployment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Deployment'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.DeploymentEntry = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Deployment);
  }
}(this, function(ApiClient, Deployment) {
  'use strict';

  /**
   * The DeploymentEntry model module.
   * @module model/DeploymentEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeploymentEntry</code>.
   * @alias module:model/DeploymentEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>DeploymentEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeploymentEntry} obj Optional instance to populate.
   * @return {module:model/DeploymentEntry} The populated <code>DeploymentEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Deployment.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Deployment} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
