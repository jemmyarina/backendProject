"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBlog = exports.deleteBlog = exports.readAllblogs = exports.readOneBlog = exports.createblog = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _blogModel = _interopRequireDefault(require("../models/blogModel"));

//  INSERT A BLOG 
var createblog = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, bTitle, bContent, _req$user, firstName, lastName, blog, newBlog, savedBlog;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, bTitle = _req$body.bTitle, bContent = _req$body.bContent;
            _req$user = req.user, firstName = _req$user.firstName, lastName = _req$user.lastName;
            _context.next = 5;
            return _blogModel["default"].findOne({
              bTitle: bTitle
            });

          case 5:
            blog = _context.sent;

            if (!blog) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              msg: 'Blog published before'
            }));

          case 8:
            _context.next = 10;
            return (0, _blogModel["default"])({
              bTitle: bTitle,
              bPublisher: {
                firstName: firstName,
                lastName: lastName
              },
              bContent: bContent
            });

          case 10:
            newBlog = _context.sent;
            _context.next = 13;
            return newBlog.save();

          case 13:
            savedBlog = _context.sent;
            return _context.abrupt("return", res.status(201).json({
              msg: 'blog created',
              savedBlog: savedBlog
            }));

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              msg: _context.t0.message
            }));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function createblog(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); //  SELECT ONE BLOG BY ID


exports.createblog = createblog;

var readOneBlog = function readOneBlog(req, res, next) {
  var id = req.params.id;

  _blogModel["default"].findById(id).then(function (blogs) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(blogs);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; //  SELECT ALL BLOGS 


exports.readOneBlog = readOneBlog;

var readAllblogs = function readAllblogs(req, res, next) {
  _blogModel["default"].find({}).then(function (blogs) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(blogs);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; // DELETING A BLOG


exports.readAllblogs = readAllblogs;

var deleteBlog = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var id, existBlog, deletedBlog;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _blogModel["default"].find({
              _id: id
            });

          case 3:
            existBlog = _context2.sent;

            if (!existBlog.length) {
              _context2.next = 18;
              break;
            }

            _context2.prev = 5;
            _context2.next = 8;
            return _blogModel["default"].deleteOne({
              _id: id
            });

          case 8:
            deletedBlog = _context2.sent;
            res.status(200).send("Blog is deleted ".concat(existBlog));
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](5);
            res.status(500).json({
              error: _context2.t0
            });

          case 15:
            ;
            _context2.next = 19;
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
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 12]]);
  }));

  return function deleteBlog(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); // UPDATING A BLOG


exports.deleteBlog = deleteBlog;

var updateBlog = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var blog, updatedBlog;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _blogModel["default"].findByIdAndUpdate({
              _id: req.params.id
            }, req.body);

          case 3:
            blog = _context3.sent;
            _context3.next = 6;
            return _blogModel["default"].findOne({
              _id: req.params.id
            });

          case 6:
            updatedBlog = _context3.sent;
            res.status(200).send(updatedBlog);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.status(400).json("Error: ".concat(error));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function updateBlog(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateBlog = updateBlog;