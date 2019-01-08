import client from '../../apiBase';

export const getMetadataList = () => {
  return client.get('/metadata');
};
