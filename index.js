const app = require('express')();
const http = require('http').Server(app);
const router = require('./routes');
const PORT = 3000;

app.use(router);

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
