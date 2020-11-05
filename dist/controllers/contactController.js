"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteContact = exports.readOneContact = exports.readAllContacts = exports.createContact = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _contactModel = _interopRequireDefault(require("../models/contactModel"));

//  POST MESSAGES 
var createContact = function createContact(req, res, next) {
  _contactModel["default"].create(req.body).then(function (contact) {
    console.log('Message sent ', contact);
    res.statusCode = 200;
    res.json(contact);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; //  SELECT ALL CONTACTS MESSAGES BY ID


exports.createContact = createContact;

var readAllContacts = function readAllContacts(req, res, next) {
  _contactModel["default"].find({}).then(function (contact) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(contact);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; //  SELECT ONE CONTACT MESSAGE BY ID


exports.readAllContacts = readAllContacts;

var readOneContact = function readOneContact(req, res, next) {
  var id = req.params.id;

  _contactModel["default"].findById(id).then(function (contact) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(contact);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; // DELETING A CONTACT


exports.readOneContact = readOneContact;

var deleteContact = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var id, existContact;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return _contactModel["default"].findByIdAndDelete({
              _id: id
            });

          case 3:
            existContact = _context.sent;

            if (existContact.length === 0) {
              res.status(404).json({
                status: 403,
                error: 'Contact Id does not exist'
              });
            }

            try {
              res.status(200).send("Contact is deleted ".concat(existContact));
            } catch (error) {
              res.status(500).json({
                error: "not deleted"
              });
            }

            ;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteContact(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.deleteContact = deleteContact;
var _default = _contactModel["default"];
exports["default"] = _default;