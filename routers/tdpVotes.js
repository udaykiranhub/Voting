
var express=require("express");
var router=express.Router();

var MyContract=require("../backendModules/contract.js");


router.get("/tdpVotes",async function (req,res){
    try{

 var votes=await MyContract.methods.TDP().call();
 console.log("total TDP votes are:",votes);
 
 return res.status(200).json({votes:votes.toString()});

    }
    catch(err){
        console.log("error in the tdpVotes Router!"+err);
        res.status(500).json({message:false});
    }
})

module.exports=router;