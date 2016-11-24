(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/ProcessDefinitionEntry', '../model/ProcessDefinitionPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/ProcessDefinitionEntry'), require('../model/ProcessDefinitionPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.ProcessDefinitionsApi = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Error, root.AlfrescoWorkflowRestApi.ProcessDefinitionEntry, root.AlfrescoWorkflowRestApi.ProcessDefinitionPaging);
  }
}(this, function(ApiClient, Error, ProcessDefinitionEntry, ProcessDefinitionPaging) {
  'use strict';

  /**
   * Process definitions service.
   * @module api/ProcessDefinitionsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new processDefinitionsApi. 
   * @alias module:api/processDefinitionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Get a ProcessDefinition
     * Returns information for ProcessDefinition **ProcessDefinitionId**.\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **ProcessDefinitions** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to the ProcessDefinition **ProcessDefinitionId**:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} processDefinitionId The identifier of a Process Definition.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/ProcessDefinitionEntry}
     */
    this.getProcessDefinition = function(processDefinitionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ProcessDefinitionId' is set
      if (processDefinitionId == undefined || processDefinitionId == null) {
        throw "Missing the required parameter 'processDefinitionId' when calling getProcessDefinition";
      }


      var pathParams = {
        'processDefinitionId': processDefinitionId
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
      var returnType = ProcessDefinitionEntry;

      return this.apiClient.callApi(
        '/processDefinitions/{processDefinitionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get ProcessDefinitions
     * Returns a list of ProcessDefinitions in this repository. You can sort the list of ProcessDefinitions using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve ProcessDefinitions ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **ProcessDefinitions** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each ProcessDefinition:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/ProcessDefinitionPaging}
     */
    this.getProcessDefinitions = function(opts) {
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
      var returnType = ProcessDefinitionPaging;

      return this.apiClient.callApi(
        '/process-definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
    
    
    /**
     * Get a Process Definition Image
     * Returns diagram image for ProcessDefinition **ProcessDefinitionId**.\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **ProcessDefinitions** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to the ProcessDefinition **ProcessDefinitionId**:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} processDefinitionId The identifier of a ProcessDefinition.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/ProcessDefinitionEntry}
     */
    this.getProcessDefinitionImage = function(processDefinitionId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ProcessDefinitionId' is set
      if (processDefinitionId == undefined || processDefinitionId == null) {
        throw "Missing the required parameter 'ProcessDefinitionId' when calling getProcessDefinition";
      }


      var pathParams = {
        'processDefinitionId': processDefinitionId
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
      var accepts = ['image/png'];
      var returnType = Image;

      return this.apiClient.callApi(
        '/process-definitions/{processDefinitionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Retrieve the start form model for a process definition
     *  @param {String} processDefinitionId
     *  @param {String} field
     */
    this.getProcessDefinitionStartFormModel = function(processDefinitionId) {
      var postBody = null;


      var pathParams = {
        'processDefinitionId': processDefinitionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProcessDefinitionStartFormPaging;

      return this.apiClient.callApi(
        '/process-definitions/{processDefinitionId}/start-form-model', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
