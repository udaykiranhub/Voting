
var express=require("express");
var router=express.Router();

var MyContract=require("../backendModules/contract.js");



router.get("/totalvotes",async function (req,res){
    try{

 var votes=await MyContract.methods.totalVotes().call();
 console.log("total votes are:",votes);
 
 return res.status(200).json({votes:votes.toString()});

    }
    catch(err){
        console.log("error in the totalvotes Router!"+err);
        res.status(500).json({message:false});
    }
})

module.exports=router;