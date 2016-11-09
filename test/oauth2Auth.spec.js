/*global describe, it, beforeEach */

var expect = require('chai').expect;
var Oauth2Mock = require('../test/mockObjects/mockAlfrescoApi').Oauth2Mock.Auth;
var Oauth2Auth = require('../src/oauth2Auth');

describe('Ecm Auth test', function () {

    beforeEach(function () {
        this.hostOauth2 = 'http://127.0.0.1:9191';
        this.oauth2Mock = new Oauth2Mock(this.hostOauth2);
    });

    describe('With Authentication', function () {

        it.only('login should return the Token if is ok', function (done) {

            //this.oauth2Mock.rec();

            this.oauth2Mock.get200Response();
            this.oauth2Auth = new Oauth2Auth({
                contextRoot: 'alfresco',
                hostOauth2: this.hostOauth2
            });

            this.oauth2Auth.login('admin', 'admin').then((data) => {
                // this.oauth2Mock.play();
                expect(data.access_token).to.be.equal('5c37e781-40a7-4957-adcc-2b171c770a5c');
                expect(data.legacyToken).to.be.equal('LegacyToken{legacyTokenBpm=\'Basic YWRtaW46YWRtaW4=\', tokenId=\'null\', legacyTokenEcm=\'TICKET_bbead3a54dbe141f77e442e6703f7fa29671107a\'}');
                done();
            }, function () {
            });

        });
    });
});
