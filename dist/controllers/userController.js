"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.deleteUser = exports.updateUser = exports.readAllusers = exports.readOneUser = exports.signups = exports.signup = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _token = _interopRequireDefault(require("../helpers/token"));

var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, firstName, lastName, email, password, checkUser, salt, PassH, newUser, savedUser;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password;
            _context.next = 4;
            return _userModel["default"].findOne({
              email: email
            });

          case 4:
            checkUser = _context.sent;

            if (!checkUser) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: 'Email already exist!'
            }));

          case 7:
            _context.next = 9;
            return _bcryptjs["default"].genSalt(10);

          case 9:
            salt = _context.sent;
            _context.next = 12;
            return _bcryptjs["default"].hash(password, salt);

          case 12:
            PassH = _context.sent;
            // const token = await generateToken(checkUser);
            newUser = new _userModel["default"]({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: PassH
            });
            _context.next = 16;
            return newUser.save();

          case 16:
            savedUser = _context.sent;
            return _context.abrupt("return", res.status(201).json({
              msg: 'User account created successfully',
              savedUser: savedUser
            }));

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // USER SIGN UP


exports.signup = signup;

var signups = function signups(req, res, next) {
  _userModel["default"].create(req.body).then(function (user) {
    console.log('User Created ', user);
    res.statusCode = 200;
    res.json(user);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; //  SELECT ONE USER BY ID


exports.signups = signups;

var readOneUser = function readOneUser(req, res, next) {
  var id = req.params.id;

  _userModel["default"].findById(id).then(function (users) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; //  SELECT ALL USERS 


exports.readOneUser = readOneUser;

var readAllusers = function readAllusers(req, res, next) {
  _userModel["default"].find({}).then(function (users) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; //  UPDATE A USER 


exports.readAllusers = readAllusers;

var updateUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var user, updatedUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _userModel["default"].findByIdAndUpdate({
              _id: req.params.id
            }, req.body);

          case 3:
            user = _context2.sent;
            _context2.next = 6;
            return _userModel["default"].findOne({
              _id: req.params.id
            });

          case 6:
            updatedUser = _context2.sent;
            res.status(200).send(updatedUser);
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            res.status(400).json("Error: ".concat(error));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function updateUser(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}(); // DELETING A USER


exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var id, existUser, deletedUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _userModel["default"].find({
              _id: id
            });

          case 3:
            existUser = _context3.sent;

            if (!existUser.length) {
              _context3.next = 18;
              break;
            }

            _context3.prev = 5;
            _context3.next = 8;
            return _userModel["default"].deleteOne({
              _id: id
            });

          case 8:
            deletedUser = _context3.sent;
            res.status(200).send("User is deleted ".concat(existUser));
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](5);
            res.status(500).json({
              error: _context3.t0
            });

          case 15:
            ;
            _context3.next = 19;
            break;

          case 18:
            res.status(404).json({
              status: 403,
              error: 'Blog does not exist'
            });

          case 19:
            ;

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 12]]);
  }));

  return function deleteUser(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}(); // POST LOGIN


exports.deleteUser = deleteUser;

var login = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, email, password, checkAccount, isValidPass, token;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context4.next = 4;
            return _userModel["default"].findOne({
              email: email
            });

          case 4:
            checkAccount = _context4.sent;

            if (checkAccount) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(404).json({
              error: 'Invalid email'
            }));

          case 7:
            _context4.next = 9;
            return _bcryptjs["default"].compare(password, checkAccount.password);

          case 9:
            isValidPass = _context4.sent;

            if (isValidPass) {
              _context4.next = 12;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              error: 'Invalid password!'
            }));

          case 12:
            _context4.next = 14;
            return (0, _token["default"])(checkAccount);

          case 14:
            token = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              msg: 'Logged in successfully!',
              token: token
            }));

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).json({
              error: _context4.t0.message
            }));

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 18]]);
  }));

  return function login(_x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();

exports.login = login;