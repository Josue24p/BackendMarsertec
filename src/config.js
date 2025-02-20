import { config } from "dotenv";

config();

export default {
    port: process.env.PORT || 3000,
    db: {
        host : process.env.DB_SERVER,
        database : process.env.DB_DATABASE,
        user : process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT || 3306
    }
}