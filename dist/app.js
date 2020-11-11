"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config/config"));

var _blogRoute = _interopRequireDefault(require("./routes/blogRoute"));

var _contactRoute = _interopRequireDefault(require("./routes/contactRoute"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_blogRoute["default"]);
app.use(_contactRoute["default"]);
app.use(_userRoute["default"]);
app.use('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome to Jemima- dev website!'
  });
});
var option = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true
};
var _default = app;
exports["default"] = _default;