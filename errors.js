class NotFound extends Error {}

const errorHandler = (res, e) => {
  if(e instanceof NotFound) {
    res.status(404);
    return res.send({error: e.message});
  }
  res.status(500);
  res.send({error: 'Service unaivalable'});
};

module.exports = { NotFound, errorHandler };
