"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.admin = exports.auth = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

var secreteKey = _config["default"].SECRETE_KEY;

var auth = function auth(req, res, next) {
  var token = req.header('auth-token');
  if (!token) return res.status(401).json({
    msg: 'please, sign in first'
  });

  try {
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
    msg: 'Access denied,this is for admins only!'
  });
  return next();
};

exports.admin = admin;