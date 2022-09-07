var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;



function GoogleAuthCodeStrategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://accounts.google.com/o/oauth2/v2/auth';
  options.tokenURL = options.tokenURL || 'https://www.googleapis.com/oauth2/v4/token';

  this._passReqToCallback = options.passReqToCallback;
  
  OAuth2Strategy.call(this, options, verify);
  this.name = 'google-authcode';
}


util.inherits(GoogleAuthCodeStrategy, OAuth2Strategy);



GoogleAuthCodeStrategy.prototype.authenticate = function(req, options) {
  options = options || {};
  var self = this;

  if (req.query && req.query.error) {
    // TODO: Error information pertaining to OAuth 2.0 flows is encoded in the
    //       query parameters, and should be propagated to the application.
    return this.fail();
  }
  
  if (!req.body && !req.query && !req.headers) {
    return this.fail();
  }
  
  var authCode;
  if(req.body && req.body.code){
    authCode = req.body.code;
  }else if(req.query && req.query.code){
    authCode = req.query.code;
  }else if(req.headers && req.headers.code){
    authCode = req.headers.code;
  }
  
  if (!authCode) {
	  return this.fail();
  }
  
  self._exchangeAuthCode(authCode, function(err, accessToken, refreshToken, resultsJson) {
    if (err) { return self.fail(err); };

    self._loadUserProfile(accessToken, function(err, profile) {
      if (err) { return self.fail(err); };
      
      function verified(err, user, info) {
        if (err) { return self.error(err); }
        if (!user) { return self.fail(info); }
        self.success(user, info);
      }
      
      if (self._passReqToCallback) {
        self._verify(req, accessToken, refreshToken, profile, verified);
      } else {
        self._verify(accessToken, refreshToken, profile, verified);
      }
    });
  });
}


GoogleAuthCodeStrategy.prototype._exchangeAuthCode = function(authCode, done) {
  var params = {
    'grant_type': 'authorization_code',
    'redirect_uri': this._callbackURL
  };
  this._oauth2.getOAuthAccessToken(authCode, params, done);
}



GoogleAuthCodeStrategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get('https://www.googleapis.com/oauth2/v2/userinfo', accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);
      
      var profile = { provider: 'google' };
      profile.id = json.id;
      profile.displayName = json.name;
      profile.name = { familyName: json.family_name,
                       givenName: json.given_name };
      profile.emails = [{ value: json.email }];
      
      profile._raw = body;
      profile._json = json;
      
      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
}


GoogleAuthCodeStrategy.prototype._loadUserProfile = function(accessToken, done) {
  var self = this;

  function loadIt() {
    return self.userProfile(accessToken, done);
  }
  function skipIt() {
    return done(null);
  }

  if (typeof this._skipUserProfile == 'function' && this._skipUserProfile.length > 1) {
    // async
    this._skipUserProfile(accessToken, function(err, skip) {
      if (err) { return done(err); }
      if (!skip) { return loadIt(); }
      return skipIt();
    });
  } else {
    var skip = (typeof this._skipUserProfile == 'function') ? this._skipUserProfile() : this._skipUserProfile;
    if (!skip) { return loadIt(); }
    return skipIt();
  }
}

module.exports = GoogleAuthCodeStrategy;