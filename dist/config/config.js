"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var _default = {
  PORT: process.env.PORT,
  SECRETE_KEY: process.env.SECRETE_KEY,
  DATABASE_URL1: process.env.DATABASE_URL1,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_URL_test: process.env.DATABASE_URL_TEST // DATABASE_URL1: process.env.DATABASE_URL

};
exports["default"] = _default;