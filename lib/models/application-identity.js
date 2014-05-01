var DataModel = require('./data-model');
// var debug = require('debug')('loopback:application-identity');

/*!
 * Default UserIdentity properties.
 */

var properties = {
  provider: {type: String}, // facebook, google, twitter, linkedin
  authScheme: {type: String}, // oAuth, oAuth 2.0, OpenID, OpenID Connect
  /*
   * oAuth: token, tokenSecret
   * oAuth 2.0: accessToken, refreshToken
   * OpenID: openId
   * OpenID Connect: accessToken, refreshToken, profile
   */
  openId: {
    returnURL: String,
    realm: String
  },
  oAuth2: {
    clientID: String,
    clientSecret: String,
    callbackURL: String
  },
  oAuth: {
    consumerKey: String,
    consumerSecret: String,
    callbackURL: String
  }
};

var options = {
  relations: {
    application: {
      type: 'belongsTo',
      model: 'Application',
      foreignKey: 'appId'
    }
  }
};

var ApplicationIdentity = DataModel.extend('ApplicationIdentity', properties, options);
module.exports = ApplicationIdentity;
