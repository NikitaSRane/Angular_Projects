express = require("express");

eobj=express();

port=5200;

function ListenServer()
{
    console.log("Marvellous server is in listen mode");
}

eobj.listen(port,ListenServer);

function ConnectRoute(req,res)
{
    res.send("Marvellous server is ON");
}

eobj.get('/',ConnectRoute);