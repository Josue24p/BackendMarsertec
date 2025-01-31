import app from './app';
import { getConnection } from './db/connection';

getConnection()
app.listen(4000);
console.log('Server listening on port', 4000);