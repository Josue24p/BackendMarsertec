import { getConnection } from "../db/connection.js";

// Obtener productos
export const getProductos = (req, res) => {
    try {
        const pool = getConnection();
        pool.query("SELECT p.id_producto, p.prod_nombre, p.prod_descripcion, p.prod_image, s.id_subcategoria, s.subcat_nombre FROM Productos p JOIN SubCategoria s ON p.id_subcategoria = s.id_subcategoria;", (error, results) => {
            if (error) {
                res.status(500).json({ error: "Error al obtener productos" });
                return;
            }
            res.json(results);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Crear un nuevo producto
export const createProducto = (req, res) => {
   // console.log("Cuerpo recibido:", req.body);
   // console.log("Archivo recibido:", req.file); // Aquí se imprime la imagen enviada
   // console.log("Archivos recibidos:", req.files); // Si usas múltiples archivos

    const { id_subcategoria, prod_nombre, prod_descripcion } = req.body;
    const prod_image = req.file ? req.file.filename : null; // Guardamos solo el nombre del archivo

    if (!id_subcategoria || !prod_nombre) {
        return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    try {
        const pool = getConnection();
        const sql = "INSERT INTO Productos (id_subcategoria, prod_nombre, prod_image, prod_descripcion) VALUES (?, ?, ?, ?)";
        const values = [id_subcategoria, prod_nombre, prod_image, prod_descripcion];

        pool.query(sql, values, (error, result) => {
            if (error) {
                res.status(500).json({ error: "Error al registrar producto" });
                return;
            }
            res.json({ message: "Producto registrado con éxito", id: result.insertId });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
    
};

// Actualizar un producto
export const updateProducto = (req, res) => {
    const { id } = req.params;
    const { id_subcategoria, prod_nombre, prod_descripcion } = req.body;
    const prod_image = req.file ? req.file.filename : null; // Si se subió una nueva imagen

    if (!id_subcategoria || !prod_nombre) {
        return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    try {
        const pool = getConnection();
        let sql, values;

        if (prod_image) {
            // Si se subió una nueva imagen
            sql = "UPDATE Productos SET id_subcategoria = ?, prod_nombre = ?, prod_image = ?, prod_descripcion = ? WHERE id_producto = ?";
            values = [id_subcategoria, prod_nombre, prod_image, prod_descripcion, id];
        } else {
            // Si no se subió una imagen nueva, mantener la existente
            sql = "UPDATE Productos SET id_subcategoria = ?, prod_nombre = ?, prod_descripcion = ? WHERE id_producto = ?";
            values = [id_subcategoria, prod_nombre, prod_descripcion, id];
        }
        console.log("ID recibido:", id);
        console.log("Datos recibidos:", req.body);
        console.log("Imagen recibida:", req.file ? req.file.filename : "No se subió imagen");
        console.log("SQL a ejecutar:", sql);
        console.log("Valores a insertar:", values);

        pool.query(sql, values, (error, result) => {
            if (error) {
                console.error("Error en la consulta SQL:", error);
                res.status(500).json({ error: "Error al actualizar producto" });
                return;
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: "Producto no encontrado" });
            }

            res.json({ message: "Producto actualizado con éxito" });
        });
    } catch (error) {
        console.error("Error interno del servidor:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
