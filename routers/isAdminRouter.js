var express=require("express");
var router=express.Router();
//importing contract
var MyContract=require("../backendModules/contract.js");


router.post("/isAdmin",async function(req,res){
    try{

    var ownerAddress= await MyContract.methods.owner().call();
    console.log("contract owner is for isAdmin:",ownerAddress);
         
     

var {owner}=req.body;
console.log("body is",req.body)

if(owner==ownerAddress){
    res.status(200).json({message:true});
}
else{
    res.status(200).json({message:false});
}


    }
    catch(err){
        console.log("Error in the isAdmin Router!"+err);
        res.status(500).json({message:"server error"});
    }
})

module.exports=router;