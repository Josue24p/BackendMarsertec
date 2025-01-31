import { getConnection, sql } from "../db/connection";

export const getContactos = (req, res) => {
    try {
        const pool = getConnection();
        const result = pool.query("SELECT * FROM Contacto", (error, result) => {
            if (error) {
                res.status(500).json({ error: "Error al obtener contactos" });
                return;
            }
            res.json(result); // Devuelve los datos en formato JSON
        });
    } catch (error) {
        console.log(error)
    }
}