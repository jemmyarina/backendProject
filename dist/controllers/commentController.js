"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _blogModel = _interopRequireDefault(require("../models/blogModel"));

var _commentModel = _interopRequireDefault(require("../models/commentModel"));

var _default = {
  addComment: function () {
    var _addComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var commentBody, email, _id, articleToComment, newComment, savedComment;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              commentBody = req.body.commentBody;
              email = req.user.email;
              _id = req.params._id;

              if (_mongoose["default"].Types.ObjectId.isValid(_id)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", res.status(400).json({
                error: 'Invalid ID'
              }));

            case 6:
              _context.next = 8;
              return _blogModel["default"].findById({
                _id: _id
              });

            case 8:
              articleToComment = _context.sent;

              if (articleToComment) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", res.status(404).json({
                error: 'No article with the given ID found!'
              }));

            case 11:
              newComment = new _commentModel["default"]({
                commentSender: {
                  email: email
                },
                commentBody: commentBody,
                blogId: {
                  _id: _id
                }
              });
              _context.next = 14;
              return newComment.save();

            case 14:
              savedComment = _context.sent;
              return _context.abrupt("return", res.status(200).json({
                message: 'Comment added successfully',
                savedComment: savedComment
              }));

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(500).json({
                error: _context.t0.message
              }));

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 18]]);
    }));

    function addComment(_x, _x2) {
      return _addComment.apply(this, arguments);
    }

    return addComment;
  }(),
  readComment: function () {
    var _readComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _id, allComments;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _id = req.params._id;

              if (_mongoose["default"].Types.ObjectId.isValid(_id)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                error: 'Invalid ID'
              }));

            case 4:
              _context2.next = 6;
              return _commentModel["default"].find().where('blogId._id', {
                $eq: _id
              });

            case 6:
              allComments = _context2.sent;

              if (!(allComments.length === 0)) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(404).json({
                error: 'No comments for this article yet!'
              }));

            case 9:
              return _context2.abrupt("return", res.status(200).json(allComments));

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(500).json({
                error: _context2.t0.message
              }));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    function readComment(_x3, _x4) {
      return _readComment.apply(this, arguments);
    }

    return readComment;
  }()
};
exports["default"] = _default;