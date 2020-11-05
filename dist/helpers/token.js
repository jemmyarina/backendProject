"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

var generateToken = function generateToken(user) {
  var firstName = user.firstName,
      lastName = user.lastName,
      email = user.email,
      _id = user._id;
  var secreteKey = _config["default"].SECRETE_KEY;
  return _jsonwebtoken["default"].sign({
    firstName: firstName,
    lastName: lastName,
    email: email,
    _id: _id
  }, secreteKey, {
    expiresIn: '90000s'
  });
};

var _default = generateToken;
exports["default"] = _default;