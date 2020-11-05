"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = require("../middleware/authentication");

var _contactController = require("../controllers/contactController");

var contactRouter = _express["default"].Router();

contactRouter.post('/insertContact', _contactController.createContact);
contactRouter.get('/selectContact/:id', [_authentication.auth, _authentication.admin], _contactController.readOneContact);
contactRouter.get('/selectContacts', [_authentication.auth, _authentication.admin], _contactController.readAllContacts);
contactRouter["delete"]('/deleteContact/:id', [_authentication.auth, _authentication.admin], _contactController.deleteContact);
var _default = contactRouter;
exports["default"] = _default;