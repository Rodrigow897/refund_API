const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'refund',
  password: 'Messi10*',
  port: 5432,
});

pool.connect()
.then(() => console.log('Connected to the database'))
.catch((err) => console.error('Database connection error', err));

module.exports = pool;
