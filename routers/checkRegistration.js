
var express=require("express");
var router=express.Router();

var MyContract=require("../backendModules/contract.js");

//var web3=require("../backendModules/web3Instance.js");


router.put("/checkvoter",async function (req,res){
    try{

var {id}=req.body;
var check=await MyContract.methods.Check_Registration(id).call();

if(check){
    console.log("chec voter!",check)
    res.status(200).json({message:true})
}
else{
    res.status(200).json({message:false});
}

    }
    catch(err){
        console.log("error in the check voter Router!"+err);
        res.status(500).json({message:false});
    }
})

module.exports=router;