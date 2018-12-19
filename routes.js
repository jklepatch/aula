const router = require('express').Router();
const config = require('./config');
const services = require('./services');
const fs = require('fs');
const errors = require('./errors');

/**
 * List of all song metadata
 */
router.get('/api/v1/metadata', async (req, res) => {
  try {
    const metadata = await services.getMetadataList();
    res.send(metadata);
  } catch(_e) {
    res.status(500);
    res.send({error: 'Service unaivalable'});
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
    if(e instanceof errors.NotFound) {
      res.status(404);
      return res.send({error: e.message});
    }
    res.status(500);
    res.send({error: 'Service unaivalable'});
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
    if(e instanceof errors.NotFound) {
      res.status(404);
      return res.send({error: e.message});
    }
    res.status(500);
    res.send({error: 'Service unaivalable'});
  }
});

module.exports = router;
