const app = require('express')();
const http = require('http').Server(app);
const cors = require('cors');
const router = require('./routes');
const config = require('./config');

app.use(cors());
app.use(router);

http.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
