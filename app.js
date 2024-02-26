const express = require('express')
const app = express()
const port = 3000
const router = express.Router();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.route('/font')
.get ((req, res) => {
  res.send({response: true});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})