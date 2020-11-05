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
var url = _config["default"].DATABASE_URL;

var connect = _mongoose["default"].connect(url);

connect.then(function (db) {
  console.log(" The server is currently connected correctly");
}, function (err) {
  console.log(err);
});
var PORT = _config["default"].PORT;
var _default = app;
exports["default"] = _default;