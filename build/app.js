"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _contactoRoutes = _interopRequireDefault(require("./routes/contacto.routes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])()); // Habilita CORS para permitir solicitudes de Angular
app.use(_express["default"].json()); // Habilita JSON en las peticiones

// Ruta para insertar un nuevo contacto
app.post("/contactos", function (req, res) {
  var _req$body = req.body,
    nombre_contacto = _req$body.nombre_contacto,
    telefono_contacto = _req$body.telefono_contacto,
    correo_contacto = _req$body.correo_contacto,
    mensaje_contacto = _req$body.mensaje_contacto;
  var sql = "INSERT INTO Contacto (nombre_contacto, telefono_contacto, correo_contacto, mensaje_contacto) VALUES (?, ?, ?, ?)";
  var values = [nombre_contacto, telefono_contacto, correo_contacto, mensaje_contacto];
  conexion.query(sql, values, function (error, result) {
    if (error) {
      res.status(500).json({
        error: "Error al insertar contacto"
      });
      return;
    }
    res.json({
      message: "Contacto agregado con éxito",
      id: result.insertId
    });
  });
});
app.use(_contactoRoutes["default"]);
var _default = exports["default"] = app;