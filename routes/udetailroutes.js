const express = require('express');
const router = express.Router();
const { getUserDetails } = require('../controllers/udetailController');

// Route to fetch user's own details based on name
router.post('/me', getUserDetails); 

module.exports = router;
