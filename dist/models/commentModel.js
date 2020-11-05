"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Comment = _mongoose["default"].model('Comment', new _mongoose["default"].Schema({
  commentSender: {
    email: String
  },
  commentBody: {
    type: String,
    required: true
  },
  blogId: {
    _id: _mongoose["default"].Schema.Types.ObjectId
  }
}));

var _default = Comment;
exports["default"] = _default;