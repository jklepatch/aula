const router = require('express').Router();

/**
 * List of all song metadata
 */
router.get('/api/v1/metadata', (req, res) => {
  res.send('list of metadata');
});

/**
 * Single song metadata
 */
router.get('/api/v1/metadata/:id', (req, res) => {
  res.send('single metadata');
});

/**
 * Single song file
 */
router.get('/api/v1/songs/:id', (req, res) => {
  res.send('single song');
});

module.exports = router;
