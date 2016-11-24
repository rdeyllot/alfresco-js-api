(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Variable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Variable'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessItemBody = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Variable);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProcessItemBody model module.
   * @module model/ProcessItemBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProcessItemBody</code>.
   * @alias module:model/ProcessItemBody
   * @class
   * @param id
   */
  var exports = function(id) {


    this['id'] = id;
  };

  /**
   * Constructs a <code>ProcessItemBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessItemBody} obj Optional instance to populate.
   * @return {module:model/ProcessItemBody} The populated <code>ProcessItemBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;


  return exports;
}));
