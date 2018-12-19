const utils = require('./utils');
const config = require('./config');

const getMetadataList = async (args) => {
  const metadata = await utils.readFile(config.METADATA);
  return JSON.parse(metadata);
};

module.exports = { getMetadataList };
