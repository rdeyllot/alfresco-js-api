'use strict';

var EcmAuth = require('./ecmAuth');
var Emitter = require('event-emitter');

class EcmWorkflowAuth extends EcmAuth {

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);
    }

    changeHost(host) {
        this.config.hostEcm = host;

        this.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1'; //Auth Call

        if (this.alfrescoClient) {
            this.alfrescoClient.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/workflow/versions/1'; //Auth Call
        }
    }

    /**
     * return an Alfresco API Client
     *
     * @returns {ApiClient} Alfresco API Client
     * */
    getClient() {
        if (!this.alfrescoClient) {
            this.alfrescoClient = new EcmAuth(this.config.hostEcm);
        }

        this.alfrescoClient.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/workflow/versions/1'; //Auth Call
        this.alfrescoClient.authentications = this.authentications;
        return this.alfrescoClient;
    }
}

Emitter(EcmWorkflowAuth.prototype); // jshint ignore:line
module.exports = EcmWorkflowAuth;
