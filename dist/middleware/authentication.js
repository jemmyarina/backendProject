"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.admin = exports.auth = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

var auth = function auth(req, res, next) {
  var token = req.header('auth-token');
  if (!token) return res.status(401).json({
    msg: 'please, sign in first'
  });

  try {
    // const secreteKey = config.SECRETE_KEY;
    var secreteKey = _config["default"].SECRETE_KEY;

    var verified = _jsonwebtoken["default"].verify(token, secreteKey);

    req.user = verified;
    return next();
  } catch (err) {
    return res.status(403).json({
      message: err.message
    });
  }
};

exports.auth = auth;

var admin = function admin(req, res, next) {
  var admin = req.user.admin;
  if (!admin) return res.status(401).json({
    msg: 'Acces denied, available for admins only'
  });
  return next();
};

exports.admin = admin;