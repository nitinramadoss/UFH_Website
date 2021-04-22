const express = require('express')
const { MongoClient } = require("mongodb");
require('dotenv').config()
const app = express()
const port = 8000

const client = new MongoClient(process.env.MONGODB_URI, { useUnifiedTopology: true });

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

	if (documents != null) {
		for (var i = 0; i < documents.length; i++) {
			result.push({name: documents[i].name, wins: documents[i].wins, mlh_points: documents[i].mlh_points});	
		}
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
	let documents;

	try {
		await client.connect();
	
		const database = client.db('leaderboard');
		const points = database.collection('member_points');

		documents = await points.find().toArray();
  
		console.log(documents);
	} catch(err) {
		console.log(err);
	}

	return documents;
}