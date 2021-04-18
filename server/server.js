const express = require('express')
const app = express()
const port = 8000

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/sendData', function (req, res) {
	console.log(req.body)
	res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
