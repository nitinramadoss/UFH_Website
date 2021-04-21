const express = require('express')
const { MongoClient } = require("mongodb");
const app = express()
const port = 8000

const uri =
  "mongodb+srv://nitinramadoss:ufh123@cluster0.u5z4w.mongodb.net/UFH_Website?retryWrites=true&writeConcern=majority";

const client = new MongoClient(uri);

app.use(express.json()); 

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET, POST');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	if ('OPTIONS' == req.method) {
	   res.sendStatus(200);
	 }
	 else {
	   next();
}});


app.get('/', async (req, res) => {
	res.send("Get req to app");
})

app.get('/loadLeaderboard', async (req, res) => {
	let documents = await queryDB();

	var result = [];

	for (var i = 0; i < documents.length; i++) {
		result.push({name: document[i].name, wins: document[i].wins, mlh_points: document[i].mlh_points});	
	}

	res.send(JSON.stringify(result));
})

app.post('/sendData', function (req, res) {
	console.log(req.body)
	res.send('POST request to the homepage')
})

app.listen(process.env.PORT || port, () => {
	console.log(`Listening on ${port}`);
});

async function queryDB() {
	let documents = [];

	try {
	  await client.connect();
  
	  const database = client.db('leaderboard');
	  const points = database.collection('member_points');
  
	  const query = { name : "Aditya Nair"};
	  document = await points.find().toArray();

	  console.log(document);
  
	  return document;
	} finally {
	  // Ensures that the client will close when you finish/error
	  await client.close();
	}

	return null;
}