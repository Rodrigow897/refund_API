const express = require('express');
const app = express();
const requestController = require('../controllers/requestController');

const router = express.Router();

router.get('/', requestController.getAllRequests);
router.get('/:id', requestController.getRequestById);
router.post('/', requestController.createRequest);
router.delete('/:id', requestController.deleteRequest);

module.exports = router;