const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Meme Generator is listening at http://localhost:${port}`);
});
