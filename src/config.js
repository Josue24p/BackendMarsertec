import { config } from "dotenv";

config();

export default {
    port: process.env.PORT || 3000,
    db: {
        host : process.env.DB_SERVER,
        database : process.env.DB_DATABASE,
        user : process.env.DB_USER,
    }
}