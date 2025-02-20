"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContactos = void 0;
var _connection = require("../db/connection");
var getContactos = exports.getContactos = function getContactos(req, res) {
  try {
    var pool = (0, _connection.getConnection)();
    var result = pool.query("SELECT * FROM Contacto", function (error, result) {
      if (error) {
        res.status(500).json({
          error: "Error al obtener contactos"
        });
        return;
      }
      res.json(result); // Devuelve los datos en formato JSON
    });
  } catch (error) {
    console.log(error);
  }
};