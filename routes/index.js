const express = require('express');
const router = express.Router();

// Redirect root to contacts
router.get('/', (req, res) => {
    res.redirect('/contacts');
});

router.use('/contacts', require('./contacts'));

module.exports = router;