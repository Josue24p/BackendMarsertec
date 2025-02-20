import app from "./app.js";
import { getConnection } from "./db/connection.js";

getConnection(); // Conectar a la base de datos

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server listeningg on port ${PORT}`);
});