const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { shorten, getUserUrls} = require('../controllers/urlController');



router.post('/shorten', shorten);
router.get('/history', getUserUrls);

module.exports = router;
