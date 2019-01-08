const router = require('express').Router();
const services = require('./services');
const errors = require('./errors');

/**
 * List of all song metadata
 */
router.get('/api/v1/metadata', async (req, res) => {
  try {
    const metadata = await services.getMetadataList();
    res.send(metadata);
  } catch(e) {
    console.log(e);
    errors.errorHandler(res, e);
  }
});

/**
 * Single song metadata
 */
router.get('/api/v1/metadata/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const metadata = await services.getMetadata(id);
    res.send(metadata);
  } catch(e) {
    errors.errorHandler(res, e);
  }
});

/**
 * Single song file
 */
router.get('/api/v1/songs/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const song = await services.getSong(id);
    song.pipe(res);
  } catch(e) {
    errors.errorHandler(res, e);
  }
});

module.exports = router;
