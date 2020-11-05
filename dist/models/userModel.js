"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var User = _mongoose["default"].model('Users', new _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 200,
    required: true
  },
  role: {
    type: String,
    "default": "standard user"
  },
  createdAt: {
    type: Date,
    "default": new Date()
  },
  modifiedAt: {
    type: Date,
    "default": new Date()
  }
}));

var _default = User;
exports["default"] = _default;