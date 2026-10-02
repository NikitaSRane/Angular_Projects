const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);


async function GetConnection(params)
{
    let result = await client.connect();
    let db=result.db("Marvellous");
    return db.collection("Batches");
}

async function ReadData()
{
    let data = await GetConnection();
    data= await data.find().toArray();
    console.log("Data retrived from database : ");
    console.log(data);
}

async function InsertData()
{
    let data = await GetConnection();
    let result=await data.insertMany([{"Name":"LSP", "Fees":"23000", "Duration":"3.5 Months"},{"Name":"GO", "Fees":"25000", "Duration":"3.5 Months"}])

    if(result.acknowledged)
    {
        console.log("Data inserted successfully");
    }
}

async function DeleteData()
{
    let data = await GetConnection();
    let result=await data.deleteOne({"Name":"Python"})

    if(result.acknowledged)
    {
        console.log("Data deleted successfully");
    }
}


async function Update()
{
    let data = await GetConnection();
    let result=await data.updateOne({"Name":"LB"},{$set : {
        "Fees":"25000" }})

    if(result.acknowledged)
    {
        console.log("Data updated successfully");
    }
}


function main()
{
    let ret;
    ret=GetConnection();
    console.log(ret);
    console.log("Database connection is successful");

    InsertData();
    ReadData();
    //DeleteData();
    //Update();
}

main()