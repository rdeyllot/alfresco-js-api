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
    root.AlfrescoWorkflowRestApi.Task = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Variable);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Task model module.
   * @module model/Task
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Task</code>.
   * @alias module:model/Task
   * @class
   * @param id
   * @param processId
   * @param name
   * @param description
   * @param dueAt
   * @param assignee
   * @param formResourceKey
   * @param state
   */
  var exports = function(id, processId, name, description, dueAt, assignee, formResourceKey, state) {

    this['id'] = id;
    this['processId'] = processId;
    this['name'] = name;
    this['description'] = description;
    this['dueAt'] = dueAt;
    this['assignee'] = assignee;
    this['formResourceKey'] = formResourceKey;
    this['state'] = state

  };

  /**
   * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Task} obj Optional instance to populate.
   * @return {module:model/Task} The populated <code>Task</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('processId')) {
        obj['processId'] = ApiClient.convertToType(data['processId'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionId')) {
        obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'String');
      }
      if (data.hasOwnProperty('activityDefinitionId')) {
        obj['activityDefinitionId'] = ApiClient.convertToType(data['activityDefinitionId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('dueAt')) {
        obj['dueAt'] = ApiClient.convertToType(data['dueAt'], 'String');
      }
      if (data.hasOwnProperty('startedAt')) {
        obj['startedAt'] = ApiClient.convertToType(data['startedAt'], 'String');
      }
      if (data.hasOwnProperty('endedAt')) {
        obj['endedAt'] = ApiClient.convertToType(data['endedAt'], 'String');
      }
      if (data.hasOwnProperty('durationInMs')) {
        obj['durationInMs'] = ApiClient.convertToType(data['durationInMs'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('assignee')) {
        obj['assignee'] = ApiClient.convertToType(data['assignee'], 'String');
      }
      if (data.hasOwnProperty('formResourceKey')) {
        obj['formResourceKey'] = ApiClient.convertToType(data['formResourceKey'], 'String');
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
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} processId
   */
  exports.prototype['processId'] = undefined;

  /**
   * @member {String} processDefinitionId
   */
  exports.prototype['processDefinitionId'] = undefined;

  /**
   * @member {String} activityDefinitionId
   */
  exports.prototype['activityDefinitionId'] = undefined;

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
   * @member {String} startedAt
   */
  exports.prototype['startedAt'] = undefined;

  /**
   * @member {String} endedAt
   */
  exports.prototype['endedAt'] = undefined;

  /**
   * @member {String} durationInMs
   */
  exports.prototype['durationInMs'] = undefined;

  /**
   * @member {String} priority
   */
  exports.prototype['priority'] = undefined;

  /**
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;

  /**
   * @member {String} assignee
   */
  exports.prototype['assignee'] = undefined;

  /**
   * @member {String} formResourceKey
   */
  exports.prototype['formResourceKey'] = undefined;

  /**
   * @member {module:model/Task.StateEnum} state
   */
  exports.prototype['state'] = undefined;

  /**
   * @member {module:model/Variable} variables
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
