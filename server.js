var express=require("express");
var app=express();
var {Web3}=require("web3");
var cors=require("cors")

app.use(express.json());
app.use(express.urlencoded())
app.use(cors());

require("dotenv").config()

//Routers Importing

var isAdmin=require("./routers/isAdminRouter.js");
var voteRegister=require("./routers/VoteRegistrationRouter.js");

var getallvoters=require("./routers/getAllVoterRouter.js");

var checkvoter=require("./routers/checkRegistration.js");

var totalVotes=require("./routers/totalVotes.js");

var sendVote=require("./routers/receiveVoteRouter.js");

var ycpVotes=require("./routers/ycpVotes.js");

var tdpVotes=require("./routers/tdpVotes.js");

//connect to block chain
var MyContract;
var contract_address;
try{
    contract_address=process.env.address;
   var web3=new Web3(process.env.ganache_url)
    
    const abi= require('./build/contracts/Voting.json').abi; 
   MyContract=new web3.eth.Contract(abi,contract_address);
  

}
catch(err){
    console.log("Error to Connecting to the Block Chain!");
}

            
//GetOwenr Address
async function Owner(){
   var owner= await MyContract.methods.owner().call();
   console.log("owner is:",owner);

}
Owner()
//

//Using Routers

app.use("/",isAdmin);

app.use("/",voteRegister);

app.use("/",getallvoters);
app.use("/",checkvoter);      
app.use('/',totalVotes);

app.use("/",sendVote);

app.use("/",ycpVotes);

app.use("/",tdpVotes);

///

app.listen(5000,function(err){
    if(err){
        console.log("Error in the server Running!");
    }
    else{
        console.log("server is Running!");
    }
})