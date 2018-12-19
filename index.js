const app = require('express')();
const http = require('http').Server(app);
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('ok');
});

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
