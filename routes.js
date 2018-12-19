const router = require('express').Router();
const config = require('./config');
const services = require('./services');
const fs = require('fs');

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
    const metadata = await services.getMetadataList();
    const d = metadata.filter((d) => d.id == id);
    if(d.length == 0) {
      res.status(404);
      return res.send({error: `Metadata with id ${id} was not found`});
    }
    res.send(d[0]);
  } catch(_e) {
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
    const metadata = await services.getMetadataList();
    const d = metadata.filter((d) => d.id == id);
    if(d.length == 0) {
      res.status(404);
      return res.send({error: `Song with id ${id} was not found`});
    }
    const song = fs.createReadStream(`${config.SONG_DIR}/${d[0].fileRef}`);
    song.pipe(res);
  } catch(_e) {
    res.status(500);
    res.send({error: 'Service unaivalable'});
  }
});

module.exports = router;
