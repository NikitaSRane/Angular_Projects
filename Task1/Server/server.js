

// load express
express = require("express");
// load mongoClient class from mongodb


const {MongoClient} = require("mongodb");

// create object of express server
eobj=express();

//Assign port no
port=2700

// url of mongodb compass
const url ="mongodb://localhost:27017";

//create mongodb object by passing url
const client = new MongoClient(url);

// Handling cors

eobj.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested with,Content-Type,Accept");
    next();
})

// mongodb connection 

async function MongoConnection(params)
{
    let result = await client.connect();
    let db=result.db("Marvellous");
    return db.collection("MeanBatch");
}

// read data from mongodb

async function ReadData()
{
    let data= await MongoConnection();
    let result = await data.find().toArray();
    //console.log("Data retrived");
    //console.log(result);
    return result;
}

// This function called automatically when start server. it starts server on port 2700 and call callback function connection

function ExpressConnection()
{
    console.log("Server is in listening mode.");
}

// default route
function FullStackAcceptRequest(req,res)
{
    res.send("Fullstack server connection is successful.");
}

async function BatchDetails(req,res)
{
    let data = await ReadData();
    res.json(data);
}

function main()
{
    let ret;

    eobj.listen(port,ExpressConnection);
    eobj.get('/',FullStackAcceptRequest);
    eobj.get('/BatchDetails',BatchDetails);

    ret=MongoConnection();
    //console.log(ret);
    ReadData();
}
main();


