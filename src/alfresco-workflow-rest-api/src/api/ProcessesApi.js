(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/ProcessEntry', '../model/ProcessPaging', '../model/TaskPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/ProcessEntry'), require('../model/ProcessPaging'), require('../model/TaskPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessesApi = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Error, root.AlfrescoWorkflowRestApi.ProcessEntry, root.AlfrescoWorkflowRestApi.ProcessPaging, root.AlfrescoWorkflowRestApi.TaskPaging);
  }
}(this, function(ApiClient, Error, ProcessEntry, ProcessPaging) {
  'use strict';

  /**
   * Processes service.
   * @module api/ProcessesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ProcessesApi. 
   * @alias module:api/ProcessesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    


    /**
     * Create a process
     * Creates a default process with the given details.  Unless explicitly specified, the process id will be generated from the process title. The process id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public process called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a process will *not* work within Share.**\n\nThe addition of the process to the user&#39;s process favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with process Manager role.\n
     * @param {module:model/ProcessBody} processBody The process details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the process should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the process should not be added to the user&#39;s process favorites. (default to false)
     * data is of type: {module:model/ProcessEntry}
     */
    this.createProcess = function(processBody, opts) {
      opts = opts || {};
      var postBody = processBody;

      // verify the required parameter 'processBody' is set
      if (processBody == undefined || processBody == null) {
        throw "Missing the required parameter 'processBody' when calling createProcess";
      }


      var pathParams = {
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
      var returnType = ProcessEntry;

      return this.apiClient.callApi(
        '/processes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a Process
     * Deletes the Process with **processId The identifier of a Process.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent Flag to indicate whether the Process should be permanently deleted i.e. bypass the trashcan. (default to false)
     */
    this.deleteProcess = function(processId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling deleteProcess";
      }


      var pathParams = {
        'processId': processId
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
        '/processes/{processId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a Process
     * Returns information for Process **processId**.\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **Processes** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to the Process **processId**:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} processId The identifier of a Process.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/ProcessEntry}
     */
    this.getProcess = function(processId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling getProcess";
      }


      var pathParams = {
        'processId': processId
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
      var returnType = ProcessEntry;

      return this.apiClient.callApi(
        '/processes/{processId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get Processes
     * Returns a list of Processes in this repository. You can sort the list of Processes using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve Processes ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **Processes** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each Process:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/ProcessPaging}
     */
    this.getProcesses = function(opts) {
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
      var returnType = ProcessPaging;

      return this.apiClient.callApi(
        '/processes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Process item
     * Creates a default Process item with the given details.  Unless explicitly specified, the process id will be generated from the process title. The process id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public process called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a process will *not* work within Share.**\n\nThe addition of the process to the user&#39;s process favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with process Manager role.\n
     * @param {String} processId The identifier of a Process
     * @param {module:model/ProcessItemBody} processBody The process details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the process should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the process should not be added to the user&#39;s process favorites. (default to false)
     * data is of type: {module:model/ProcessEntry}
     */
    this.createProcessItem = function(processId, processItemBody, opts) {
      opts = opts || {};
      var postBody = processItemBody;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling createProcessItem";
      }

      // verify the required parameter 'processItemBody' is set
      if (processItemBody == undefined || processItemBody == null) {
        throw "Missing the required parameter 'processItemBody' when calling createProcessItem";
      }


      var pathParams = {
        'processId': processId
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
      var returnType = ProcessItemEntry;

      return this.apiClient.callApi(
        '/processes/{processId}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a Process item
     * Deletes the Process item with **itemId The identifier of a Process item.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent Flag to indicate whether the Process should be permanently deleted i.e. bypass the trashcan. (default to false)
     */
    this.deleteProcessItem = function(processId, itemId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling deleteProcessItem";
      }
      // verify the required parameter 'itemId' is set
      if (itemId == undefined || itemId == null) {
        throw "Missing the required parameter 'itemId' when calling deleteProcessItem";
      }


      var pathParams = {
        'processId': processId,
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
        '/processes/{processId}/items/{itemId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get Process Items
     * Returns a list of Process items in this repository. You can sort the list of Process items using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve Processes ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **Processes** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each Process:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/ProcessPaging}
     */
    this.getProcessItems = function(processId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling getProcessItems";
      }


      var pathParams = {
        'processId': processId
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
      var returnType = ProcessItemsPaging;

      return this.apiClient.callApi(
        '/processes/{processId}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Add a process variable
     * Creates one or more comments on node **nodeId**. You can create more than one comment by \nspecifying a list of comments in the JSON body like this:      \n\n&#x60;&#x60;&#x60;JSON\n[\n  {\n    \&quot;content\&quot;: \&quot;This is a comment\&quot;\n  },\n  {\n    \&quot;content\&quot;: \&quot;This is another comment\&quot;\n  }\n]\n&#x60;&#x60;&#x60;\n
     * @param {String} processId The identifier of a process.
     * @param {module:model/VariableBody} variableBody The variable details
     * data is of type: {module:model/VariableEntry}
     */
    this.addProcessVariable = function(processId, variableBody) {
      var postBody = variableBody;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling addProcessVariable";
      }

      // verify the required parameter 'variableBody' is set
      if (variableBody == undefined || variableBody == null) {
        throw "Missing the required parameter 'variableBody' when calling addProcessVariable";
      }


      var pathParams = {
        'processId': processId
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
        '/processes/{processId}/variables', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get process variables
     * Returns a list of variables for the process identified by **processId**, sorted chronologically with the newest variable first.
     * @param {String} processId The identifier of a process.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/VariablePaging}
     */
    this.getProcessVariables = function(processId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling getProcessVariables";
      }


      var pathParams = {
        'processId': processId
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
        '/processes/{processId}/variables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a process variable
     * Removes the variable **variableName** from process **processId**.
     * @param {String} processId The identifier of a process.
     * @param {String} variableName The name of the variable.
     */
    this.removeProcessVariable = function(processId, variableName) {
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling removeProcessVariable";
      }

      // verify the required parameter 'variableName' is set
      if (variableName == undefined || variableName == null) {
        throw "Missing the required parameter 'variableName' when calling removeProcessVariable";
      }


      var pathParams = {
        'processId': processId,
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
        '/processes/{processId}/variables/{variableName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a Process variable
     * Updates a Process variable with the given details.  Unless explicitly specified, the process id will be generated from the process title. The process id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public process called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a process will *not* work within Share.**\n\nThe addition of the process to the user&#39;s process favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with process Manager role.\n
     * @param {String} processId The identifier of a process.
     * @param {String} variableName The name of the variable.
     * @param {module:model/VariableBody} variableBody The variable details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the process should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the process should not be added to the user&#39;s process favorites. (default to false)
     * data is of type: {module:model/ProcessEntry}
     */
    this.updateProcessVariable = function(processId, variableName, variableBody, opts) {
      opts = opts || {};
      var postBody = variableBody;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling updateProcessVariable";
      }
      // verify the required parameter 'variableName' is set
      if (variableName == undefined || variableName == null) {
        throw "Missing the required parameter 'variableName' when calling updateProcessVariable";
      }

      // verify the required parameter 'variableBody' is set
      if (variableBody == undefined || variableBody == null) {
        throw "Missing the required parameter 'variableBody' when calling updateProcessVariable";
      }


      var pathParams = {
        'processId': processId,
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
        '/processes/{processId}/variables/{variableName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get process tasks
     * Returns a list of Tasks in this repository for a specified process. You can sort the list of Tasks using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve Tasks ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **Tasks** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each Task:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} processId The identifier of a process.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TaskPaging}
     */
    this.getProcessTasks = function(processId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling getProcessTasks";
      }


      var pathParams = {
        'processId': processId
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
        '/processes/{processId}/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
