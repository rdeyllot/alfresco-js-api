(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/DeploymentEntry', '../model/DeploymentPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/DeploymentEntry'), require('../model/DeploymentPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoWorkflowRestApi) {
      root.AlfrescoWorkflowRestApi = {};
    }
    root.AlfrescoWorkflowRestApi.DeploymentsApi = factory(root.AlfrescoWorkflowRestApi.ApiClient, root.AlfrescoWorkflowRestApi.Error, root.AlfrescoWorkflowRestApi.DeploymentEntry, root.AlfrescoWorkflowRestApi.DeploymentPaging);
  }
}(this, function(ApiClient, Error, DeploymentEntry, DeploymentPaging) {
  'use strict';

  /**
   * Deployments service.
   * @module api/DeploymentsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new deploymentsApi. 
   * @alias module:api/deploymentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Delete a Deployment
     * Deletes the Deployment with **deploymentId The identifier of a Deployment.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent Flag to indicate whether the Deployment should be permanently deleted i.e. bypass the trashcan. (default to false)
     */
    this.deleteDeployment = function(deploymentId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'deploymentId' is set
      if (deploymentId == undefined || deploymentId == null) {
        throw "Missing the required parameter 'deploymentId' when calling deleteDeployment";
      }


      var pathParams = {
        'deploymentId': deploymentId
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
        '/deployments/{deploymentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a Deployment
     * Returns information for Deployment **deploymentId**.\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **deployments** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to the Deployment **deploymentId**:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} deploymentId The identifier of a Deployment.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/DeploymentEntry}
     */
    this.getDeployment = function(deploymentId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'deploymentId' is set
      if (deploymentId == undefined || deploymentId == null) {
        throw "Missing the required parameter 'deploymentId' when calling getDeployment";
      }


      var pathParams = {
        'deploymentId': deploymentId
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
      var returnType = DeploymentEntry;

      return this.apiClient.callApi(
        '/deployments/{deploymentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get deployments
     * Returns a list of deployments in this repository. You can sort the list of deployments using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve deployments ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **deployments** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each Deployment:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {Array.<String>} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/DeploymentPaging}
     */
    this.getDeployments = function(opts) {
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
      var returnType = DeploymentPaging;

      return this.apiClient.callApi(
        '/deployments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
