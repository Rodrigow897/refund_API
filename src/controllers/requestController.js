const pool = require('.././dataBase/db');

const getAllRequests = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tb_requests');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getRequestById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM tb_requests WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Request not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createRequest = async (req, res) => {
    const { name, value, receipt_path, status_id, categories_id } = req.body;
    try {
        const result = await pool.query('INSERT INTO tb_requests (name, value, receipt_path, status_id, categories_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, value, receipt_path, status_id, categories_id]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error creating request:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteRequest = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM tb_requests WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Request not found' });
        }
        res.sendStatus(204);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



module.exports = {
    getAllRequests,
    getRequestById,
    createRequest,
    deleteRequest
};