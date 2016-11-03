'use strict';

class GenericRestApi  {

    constructor(apiClient) {
        this.apiClient = apiClient;
        this.allowedMethod = ['GET', 'POST', 'PUT', 'DELETE'];
    }
    /**
     * @param {String} httpMethod  GET, POST, PUT and DELETE
     * @param {String} scriptPath
     * @param {Object} scriptArgs
     * @param {String} contextRoot default value alfresco
     * @param {String} servicePath default value service
     * @param {Object} pathParams
     *
     * @returns {Promise} A promise that is resolved return the data and {error} if rejected.
     */

    execute(httpMethod, scriptPath, scriptArgs, contextRoot, servicePath, pathParams) {
        contextRoot = contextRoot || 'alfresco';
        servicePath = servicePath || 'service';
        pathParams = pathParams || {};

        if (!httpMethod  || this.allowedMethod.indexOf(httpMethod) === -1) {
            throw 'method allowed value  GET, POST, PUT and DELETE';
        }

        if (!scriptPath) {
            throw 'Missing the required parameter scriptPath when calling ';
        }

        var postBody = null;

        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json', 'text/html'];
        var returnType = {};

        return this.apiClient.callApi(
            '/' +  servicePath + '/' + scriptPath, httpMethod,
            pathParams, scriptArgs, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType ,  contextRoot
        );
    }
}

module.exports = GenericRestApi;
