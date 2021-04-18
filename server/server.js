const express = require('express')
const { MongoClient } = require("mongodb");
const app = express()
const port = 8000

const uri =
  "mongodb+srv://nitinramadoss:ufh123@cluster0.u5z4w.mongodb.net/UFH_Website?retryWrites=true&writeConcern=majority";

const client = new MongoClient(uri);

app.use(express.json()); 

app.get('/', async (req, res) => {
	let user = await queryDB();
	res.json({
		name : user.name,
		hackathons: user.hackathons,
		wins: user.wins,
		points: user.MLH_points
	})
})

app.get('/loadLeaderboard', (req, res) => {
	res.send('Hello World!')
})

app.post('/sendData', function (req, res) {
	console.log(req.body)
	res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

async function queryDB() {
	let document = null;

	try {
	  await client.connect();
  
	  const database = client.db('leaderboard');
	  const points = database.collection('member_points');
  
	  const query = { name : "Aditya Nair"};
	  document = await points.findOne(query);

	  console.log(document);
  
	  return document;
	} finally {
	  // Ensures that the client will close when you finish/error
	  await client.close();
	}

	return null;
}