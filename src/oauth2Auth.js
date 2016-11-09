'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');
var Emitter = require('event-emitter');

class oauth2Auth extends AlfrescoApiClient {

    /**
     * @param {Object} config
     */
    constructor(config) {
        super();
        this.config = config;
        this.basePath = this.config.hostOauth2; //Auth Call
        Emitter.call(this);
    }

    /**
     * login Alfresco API
     * @param  {String} username:   // Username to login
     * @param  {String} password:   // Password to login
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login(username, password) {
        var postBody = {}, pathParams = {}, queryParams = {}, formParams = {};

        var auth = 'Basic ' + new Buffer('alfrescoapp' + ':' + 'secret').toString('base64');

        var headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
            'Authorization': auth
        };

        queryParams = {
            username: username,
            password: password,
            grant_type: 'password'
        };

        var authNames = [];
        var contentTypes = ['application/x-www-form-urlencoded'];
        var accepts = ['application/json'];

        this.promise = new Promise((resolve, reject) => {
            this.callApi(
                '/oauth/token', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, {}
            ).then(
                (data) => {
                    resolve(data);
                },
                (error) => {
                    if (error.error.status === 401) {
                        this.promise.emit('unauthorized');
                    }
                    this.promise.emit('error');
                    reject(error.error);
                });
        });

        Emitter(this.promise); // jshint ignore:line

        return this.promise;
    }

}

Emitter(oauth2Auth.prototype); // jshint ignore:line
module.exports = oauth2Auth;
