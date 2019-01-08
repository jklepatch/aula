const express = require('express');
//const app = express();
//const http = require('http').Server(app);
const cors = require('cors');
const router = require('./routes');
const config = require('./config');
const path = require('path');

const app = express();

app.use(cors());
//Need te replace this by a more general middleware that can handle files in different locations (s3...)
app.use('/file-local', express.static(path.join(__dirname, '../data')));
app.use(router);

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
