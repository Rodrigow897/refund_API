const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'refund',
  password: '',
  port: 5432,
});

pool.connect()
.then(() => console.log('Connected to the database'))
.catch((err) => console.error('Database connection error', err));

module.exports = pool;
