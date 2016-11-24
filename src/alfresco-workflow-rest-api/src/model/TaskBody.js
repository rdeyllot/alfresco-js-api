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
    root.AlfrescoWorkflowRestApi.TaskBody = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Variable);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TaskBody model module.
   * @module model/TaskBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TaskBody</code>.
   * @alias module:model/TaskBody
   * @class
   * @param name
   * @param description
   * @param dueAt
   * @param priority
   * @param owner
   * @param state
   * @param variables
   */
  var exports = function(name, description, dueAt, priority, owner, state, variables) {


    this['name'] = name;
    this['description'] = description;
    this['dueAt'] = dueAt;
    this['priority'] = priority;
    this['owner'] = owner;
    this['state'] = state;
    this['variables'] = variables;

  };

  /**
   * Constructs a <code>TaskBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskBody} obj Optional instance to populate.
   * @return {module:model/TaskBody} The populated <code>TaskBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('dueAt')) {
        obj['dueAt'] = ApiClient.convertToType(data['dueAt'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = Variable.constructFromObject(data['variables']);
      }
    }
    return obj;
  }


  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {String} dueAt
   */
  exports.prototype['dueAt'] = undefined;

  /**
   * @member {String} priority
   */
  exports.prototype['priority'] = undefined;

  /**
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;

  /**
   * @member {module:model/TaskBody.StateEnum} state
   */
  exports.prototype['state'] = undefined;

  /**
   * @member {module:model/TaskBody.Variable} variables
   */
  exports.prototype['variables'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: unclaimed
     * @const
     */
    unclaimed: "unclaimed",

    /**
     * value: claimed
     * @const
     */
    claimed: "claimed",

    /**
     * value: delegated
     * @const
     */
    delegated: "delegated",

    /**
     * value: resolved
     * @const
     */
    resolved: "resolved",

    /**
     * value: completed
     * @const
     */
    completed: "completed"
  };


  return exports;
}));
