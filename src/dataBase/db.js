const { Pool } = require('pg');

const pool = new Pool({
    user: 'elias',
    host: 'localhost',
    database: 'refund_db',
    password: '123321',
    port: 5432,
});

pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database connection error', err));

module.exports = pool;
