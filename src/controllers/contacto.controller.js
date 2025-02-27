import { getConnection } from "../db/connection.js";

// Obtener todos los contactos
export const getContactos = (req, res) => {
    try {
        const pool = getConnection();
        pool.query("SELECT * FROM Contacto", (error, result) => {
            if (error) {
                res.status(500).json({ error: "Error al obtener contactos" });
                return;
            }
            res.json(result);
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Insertar un nuevo contacto
export const createContacto = (req, res) => {
    try {
        const { nombre_contacto, telefono_contacto, correo_contacto, mensaje_contacto } = req.body;
        const pool = getConnection();

        const sql = "INSERT INTO Contacto (nombre_contacto, telefono_contacto, correo_contacto, mensaje_contacto) VALUES (?, ?, ?, ?)";
        const values = [nombre_contacto, telefono_contacto, correo_contacto, mensaje_contacto];

        pool.query(sql, values, (error, result) => {
            if (error) {
                res.status(500).json({ error: "Error al insertar contacto" });
                return;
            }
            res.json({ message: "Contacto agregado con éxito", id: result.insertId });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
