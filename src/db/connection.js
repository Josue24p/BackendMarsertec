import sql from 'mysql2';
import config from '../config';

const dbSettings = {
    user : config.db.user,
    database : config.db.database,
    host : config.db.server,
}

export const getConnection = () => {
    try {
        const pool = sql.createConnection(dbSettings);
        console.log('db is connected')
        return pool;
    } catch (error) {
        console.log(error)
    }
}

export {sql}