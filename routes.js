const fs = require('fs');
const router = require('express').Router();
const config = require('./config');

/**
 * List of all song metadata
 */
router.get('/api/v1/metadata', (req, res) => {
  fs.readFile(config.METADATA, 'utf8', (err, data) => {
    if(err) {
      res.status(500);
      return res.send({error: 'Service unaivalable'});
    }
    //data is a string and express set content-type to html
    //for strings. Forces express to respond as json instead
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

/**
 * Single song metadata
 */
router.get('/api/v1/metadata/:id', (req, res) => {
  const id = req.params.id;
  fs.readFile(config.METADATA, 'utf8', (err, data) => {
    if(err) {
      res.status(500);
      return res.send({error: 'Service unaivalable'});
    }
    data = JSON.parse(data);
    const d = data.filter((d) => d.id == id);
    if(d.length == 0) {
      res.status(404);
      return res.send({error: `Metadata with id ${id} was not found`});
    }
    res.send(d[0]);
  });
});

/**
 * Single song file
 */
router.get('/api/v1/songs/:id', (req, res) => {
  res.send('single song');
});

module.exports = router;
