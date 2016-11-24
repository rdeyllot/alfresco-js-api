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
    root.AlfrescoWorkflowRestApi.VariableEntry = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Variable);
  }
}(this, function(ApiClient, Variable) {
  'use strict';

  /**
   * The VariableEntry model module.
   * @module model/VariableEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>VariableEntry</code>.
   * @alias module:model/VariableEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>VariableEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariableEntry} obj Optional instance to populate.
   * @return {module:model/VariableEntry} The populated <code>VariableEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Variable.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Variable} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
