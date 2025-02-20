import { getConnection } from "../db/connection.js";

export const getSubcategorias = (req, res) => {
    try {
        const pool = getConnection();
        pool.query("SELECT * FROM SubCategoria", (error, result) => {
            if (error) {
                console.log("Error en la consulta SQL:", error); //  Verifica el error en la consola
                res.status(500).json({ error: "Error al obtener subcategorías" });
                return;
            }
            res.json(result);
        });
    } catch (error) {
        console.log("Error en la conexión:", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
};

export const createSubcategoria = (req, res) => {
    try {
        const { id_categoria, subcat_nombre, subcat_imagen, subcat_descripcion } = req.body;

        if (!id_categoria || !subcat_nombre) {
            return res.status(400).json({ error: "El id de la categoría y el nombre de la subcategoría son obligatorios" });
        }

        const connection = getConnection();
        const sql = "INSERT INTO SubCategoria (id_categoria, subcat_nombre, subcat_imagen, subcat_descripcion) VALUES (?, ?, ?, ?)";

        const values = [id_categoria, subcat_nombre, subcat_imagen || null, subcat_descripcion || null];

        connection.query(sql, values, (error, result) => {
            if (error) {
                return res.status(500).json({ error: "Error al registrar la subcategoría" });
            }
            res.json({ message: "Subcategoría registrada con éxito", id: result.insertId });
        });

    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
};
