var DataModel = require('./data-model');

/*!
 * Default ApplicationCredential properties.
 */

var properties = {
  provider: {type: String}, // facebook, google, twitter, linkedIn
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

/**
 * Credentials associated with the LoopBack client application, such as oAuth 2.0
 * client id/secret, or SSL keys
 */
var ApplicationCredential = DataModel.extend('ApplicationCredential', properties, options);
module.exports = ApplicationCredential;
