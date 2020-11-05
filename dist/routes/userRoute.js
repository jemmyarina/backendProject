"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = require("../middleware/authentication");

var _userController = require("../controllers/userController");

// import {user_signup1} from '../controllers/signup';
var userRouter = _express["default"].Router(); // userRouter.post('/insertUser1', user_signup1);


userRouter.post('/insertUser', _userController.signup);
userRouter.get('/selectUser/:id', [_authentication.auth, _authentication.admin], _userController.readOneUser);
userRouter.get('/selectUsers', [_authentication.auth, _authentication.admin], _userController.readAllusers);
userRouter["delete"]('/deleteUser/:id', [_authentication.auth, _authentication.admin], _userController.deleteUser);
userRouter.put('/updateUser/:id', [_authentication.auth, _authentication.admin], _userController.updateUser);
userRouter.post('/login', _userController.login);
var _default = userRouter;
exports["default"] = _default;