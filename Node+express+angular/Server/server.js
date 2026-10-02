express= require("express");

eobj=express();

port = 5100;    

function MarvellousWElcome()
{
    console.log("Marvellous server is ON");
}

eobj.listen(port,MarvellousWElcome);

function MarvellousGet(req,res)
{
    res.send("Marvellous server is running");
}
eobj.get('/',MarvellousGet);

function MarvellousGetBatches(req,res)
{
    res.json({"Batch":"PPA", "Duration":"3 Months", "Fees":21000});
}
eobj.get('/getBatches',MarvellousGetBatches);

// Handling cors

eobj.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin","http://localhost:4200/");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested with,Content-Type,Accept");
    next();
})
