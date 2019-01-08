const fs = require('fs');
const utils = require('./utils');
const config = require('./config');
const errors = require('./errors');

const getMetadataList = async() => {
  const metadata = await utils.readFile(config.METADATA);
  return JSON.parse(metadata);
};

const getMetadata = async(id) => {
  const metadata = await getMetadataList();
  const d = metadata.filter((d) => d.id == id);
  if(d.length == 0) {
    throw new errors.NotFound(`Song with id ${id} was not found`);
  }
  return d[0];
};

const getSong = async(id) => {
  const metadata = await getMetadata(id);
  return fs.createReadStream(`${config.SONG_DIR}/${metadata.fileRef}`);
};

module.exports = { 
  getMetadataList,
  getMetadata,
  getSong
};
