const fs = require('fs');
const router = require('express').Router();
const config = require('./config');
const utils = require('./utils');

/**
 * List of all song metadata
 */
router.get('/api/v1/metadata', async (req, res) => {
  try {
    const metadata = await utils.readFile(config.METADATA);
    //metadata is a string and express set content-type to html
    //for strings. Forces express to respond as json instead
    res.setHeader('Content-Type', 'application/json');
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
    let metadata = await utils.readFile(config.METADATA);
    metadata = JSON.parse(metadata);
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
    let metadata = await utils.readFile(config.METADATA);
    metadata = JSON.parse(metadata);
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
