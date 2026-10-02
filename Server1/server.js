express = require("express"); // import

eobj=express();

port=5100;

function MarvellousWelcomeMessage()
{
    console.log("Marvellous server is On at port 5100");
}

eobj.listen(port,MarvellousWelcomeMessage);

function MarvellousAcceptRequest(req,res)
{
    res.send("Marvellous server connection is successful.");
}

eobj.get('/',MarvellousAcceptRequest);

function MarvellousBatches(req,res)
{
    res.send("We have PPA,Angular,Python,LB");
}

eobj.get('/Batches',MarvellousBatches);

function MarvellousLocation(req,res)
{
    res.send("Location of Marvellous is Kothrud pune");
}

eobj.get('/Location',MarvellousLocation);

function MarvellousBatchDetails(req,res)
{
    res.json({"Batch":"PPA","Duration":"3 Months", "Fees":21000});
}

eobj.get('/GetBatchdetails',MarvellousBatchDetails);