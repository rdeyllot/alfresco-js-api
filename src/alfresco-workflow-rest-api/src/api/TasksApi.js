(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/TaskEntry', '../model/TaskPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/TaskEntry'), require('../model/TaskPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.TasksApi = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Error, root.AlfrescoWorkflowRestApi.TaskEntry, root.AlfrescoWorkflowRestApi.TaskPaging);
  }
}(this, function(ApiClient, Error, TaskEntry, TaskPaging) {
  'use strict';

  /**
   * Tasks service.
   * @module api/TasksApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TasksApi. 
   * @alias module:api/TasksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;




    /**
     * Update a task
     * Updates a task with the given details.  Unless explicitly specified, the task id will be generated from the task title. The task id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public task called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a task will *not* work within Share.**\n\nThe addition of the task to the user&#39;s task favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with task Manager role.\n
     * @param {String} taskId The identifier of a Task.
     * @param {module:model/TaskBody} taskBody The task details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the task should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the task should not be added to the user&#39;s task favorites. (default to false)
     * data is of type: {module:model/TaskEntry}
     */
    this.updateTask = function(taskId, taskBody, opts) {
      opts = opts || {};
      var postBody = taskBody;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling updateTask";
      }

      // verify the required parameter 'taskBody' is set
      if (taskBody == undefined || taskBody == null) {
        throw "Missing the required parameter 'taskBody' when calling updateTask";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'skipConfiguration': opts['skipConfiguration'],
        'skipAddToFavorites': opts['skipAddToFavorites']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskEntry;

      return this.apiClient.callApi(
        '/tasks/{taskId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a Task
     * Returns information for Task **taskId**.\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **Tasks** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to the Task **taskId**:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} taskId The identifier of a Task.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TaskEntry}
     */
    this.getTask = function(taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTask";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskEntry;

      return this.apiClient.callApi(
        '/tasks/{taskId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get Tasks
     * Returns a list of Tasks in this repository. You can sort the list of Tasks using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve Tasks ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **Tasks** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each Task:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TaskPaging}
     */
    this.getTasks = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskPaging;

      return this.apiClient.callApi(
        '/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get task candidates
     * Returns a list of candidates in this repository. You can sort the list of candidates using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve candidates ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **Candidate** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each Task:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} taskId The identifier of a Task.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/CandidatePaging}
     */
    this.getCandidates = function(taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getCandidates";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CandidatePaging;

      return this.apiClient.callApi(
        '/tasks/{taskId}/candidates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create a Task item
     * Creates a default Task item with the given details.  Unless explicitly specified, the task id will be generated from the task title. The task id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public task called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a task will *not* work within Share.**\n\nThe addition of the task to the user&#39;s task favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with task Manager role.\n
     * @param {String} taskId The identifier of a Task
     * @param {module:model/TaskItemBody} taskBody The task details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the task should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the task should not be added to the user&#39;s task favorites. (default to false)
     * data is of type: {module:model/TaskEntry}
     */
    this.createTaskItem = function(taskId, taskItemBody, opts) {
      opts = opts || {};
      var postBody = taskItemBody;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling createTaskItem";
      }

      // verify the required parameter 'taskItemBody' is set
      if (taskItemBody == undefined || taskItemBody == null) {
        throw "Missing the required parameter 'taskItemBody' when calling createTaskItem";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'skipConfiguration': opts['skipConfiguration'],
        'skipAddToFavorites': opts['skipAddToFavorites']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskItemEntry;

      return this.apiClient.callApi(
        '/tasks/{taskId}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a Task item
     * Deletes the Task item with **itemId The identifier of a Task item.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent Flag to indicate whether the Task should be permanently deleted i.e. bypass the trashcan. (default to false)
     */
    this.deleteTaskItem = function(taskId, itemId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling deleteTaskItem";
      }
      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling deleteTaskItem";
      }


      var pathParams = {
        'taskId': taskId,
        'itemId': itemId
      };
      var queryParams = {
        'permanent': opts['permanent']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tasks/{taskId}/items/{itemId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get Task Items
     * Returns a list of Task items in this repository. You can sort the list of Task items using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve Tasks ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **Tasks** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each Task:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TaskPaging}
     */
    this.getTaskItems = function(taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskItems";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskItemsPaging;

      return this.apiClient.callApi(
        '/tasks/{taskId}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get Task Forms
     * Returns a list of Task forms in this repository. You can sort the list of Task forms using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve Tasks ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **Tasks** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each Task:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TaskFormsPaging}
     */
    this.getTaskForms = function(taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskForms";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TaskFormsPaging;

      return this.apiClient.callApi(
        '/tasks/{taskId}/task-form-model', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Add a task variable
     * Creates one or more comments on node **nodeId**. You can create more than one comment by \nspecifying a list of comments in the JSON body like this:      \n\n&#x60;&#x60;&#x60;JSON\n[\n  {\n    \&quot;content\&quot;: \&quot;This is a comment\&quot;\n  },\n  {\n    \&quot;content\&quot;: \&quot;This is another comment\&quot;\n  }\n]\n&#x60;&#x60;&#x60;\n
     * @param {String} taskId The identifier of a task.
     * @param {module:model/VariableBody} variableBody The variable details
     * data is of type: {module:model/VariableEntry}
     */
    this.addTaskVariable = function(taskId, variableBody) {
      var postBody = variableBody;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling addTaskVariable";
      }

      // verify the required parameter 'variableBody' is set
      if (variableBody == undefined || variableBody == null) {
        throw "Missing the required parameter 'variableBody' when calling addTaskVariable";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VariableEntry;

      return this.apiClient.callApi(
        '/tasks/{taskId}/variables', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get task variables
     * Returns a list of variables for the task identified by **taskId**, sorted chronologically with the newest variable first.
     * @param {String} taskId The identifier of a task.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/VariablePaging}
     */
    this.getTaskVariables = function(taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskVariables";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VariablePaging;

      return this.apiClient.callApi(
        '/tasks/{taskId}/variables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a task variable
     * Removes the variable **variableName** from task **taskId**.
     * @param {String} taskId The identifier of a task.
     * @param {String} variableName The name of the variable.
     */
    this.removeTaskVariable = function(taskId, variableName) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling removeTaskVariable";
      }

      // verify the required parameter 'variableName' is set
      if (variableName == undefined || variableName == null) {
        throw "Missing the required parameter 'variableName' when calling removeTaskVariable";
      }


      var pathParams = {
        'taskId': taskId,
        'variableName': variableName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tasks/{taskId}/variables/{variableName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a Task variable
     * Updates a Task variable with the given details.  Unless explicitly specified, the task id will be generated from the task title. The task id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public task called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a task will *not* work within Share.**\n\nThe addition of the task to the user&#39;s task favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with task Manager role.\n
     * @param {String} taskId The identifier of a task.
     * @param {String} variableName The name of the variable.
     * @param {module:model/VariableBody} variableBody The variable details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the task should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the task should not be added to the user&#39;s task favorites. (default to false)
     * data is of type: {module:model/TaskEntry}
     */
    this.updateTaskVariable = function(taskId, variableName, variableBody, opts) {
      opts = opts || {};
      var postBody = variableBody;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling updateTaskVariable";
      }
      // verify the required parameter 'variableName' is set
      if (variableName == undefined || variableName == null) {
        throw "Missing the required parameter 'variableName' when calling updateTaskVariable";
      }

      // verify the required parameter 'variableBody' is set
      if (variableBody == undefined || variableBody == null) {
        throw "Missing the required parameter 'variableBody' when calling updateTaskVariable";
      }


      var pathParams = {
        'taskId': taskId,
        'variableName': variableName
      };
      var queryParams = {
        'skipConfiguration': opts['skipConfiguration'],
        'skipAddToFavorites': opts['skipAddToFavorites']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VariableEntry;

      return this.apiClient.callApi(
        '/tasks/{taskId}/variables/{variableName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
