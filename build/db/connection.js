"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = void 0;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mysql["default"];
  }
});
var _mysql = _interopRequireDefault(require("mysql2"));
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var dbSettings = {
  user: _config["default"].db.user,
  database: _config["default"].db.database,
  host: _config["default"].db.server,
  password: _config["default"].db.password
};
var getConnection = exports.getConnection = function getConnection() {
  try {
    var pool = _mysql["default"].createConnection(dbSettings);
    console.log('db is connected');
    return pool;
  } catch (error) {
    console.log(error);
  }
};