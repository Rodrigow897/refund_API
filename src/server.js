const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const requestRouter = require('../src/routes/requestRouter');

app.get('/', (req, res) => {
    res.send('bem vindo ao sistema de reembolso');
});

app.use('/requests', requestRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}`);
});

module.exports = app;