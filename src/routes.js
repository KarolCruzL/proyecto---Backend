const Router = require('express');
const router = Router();

// Import routes 

// Status api endinnt
router.get('/api-status', (req, res) => {
    res.send({'Status': 'on'});
});

// Use rotes

module.exports = router;