const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { shorten, getUserUrls} = require('../controllers/urlController');



router.post('/shorten', auth, shorten);
router.get('/history', auth, getUserUrls);

module.exports = router;
