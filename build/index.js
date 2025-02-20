"use strict";

var _app = _interopRequireDefault(require("./app"));
var _connection = require("./db/connection");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _connection.getConnection)();
_app["default"].listen(4000);
console.log('Server listening on port', 4000);