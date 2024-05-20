var express=require("express");
var router=express.Router();
//importing contract
var MyContract=require("../backendModules/contract.js");

var web3=require("../backendModules/web3Instance.js");

require("dotenv").config();


// Custom JSON serializer to handle BigInt serialization
function customJSONReplacer(key, value) {
    // Convert BigInt to string
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  }


router.post("/sendVote",async function(req,res){
    try{

console.log("body:",req.body);

var {id,vote}=req.body;

var Gas1=await MyContract.methods.YCP_polling(id).estimateGas({from:process.env.account});
console.log("gas1 for senVote!",Gas1.toString());


var Gas2=await  MyContract.methods.TDP_polling(id).estimateGas({from:process.env.account});
console.log("gas2 for sendVote!",Gas2.toString());


var gasPrice = await web3.eth.getGasPrice();
console.log("Current gas price:", gasPrice.toString());


const gasPriceBigInt = BigInt(gasPrice);
const Gas1BigInt = BigInt(Gas1);
const Gas2BigInt = BigInt(Gas2);
const gasBuffer = BigInt(200000);

    // Check the vote type and send the transaction accordingly
    if (vote === "ycp") {
        console.log("I am YCP!");
        const sendVote = await MyContract.methods.YCP_polling(id).send({
            from: process.env.account,
            gas: (Gas1BigInt + gasBuffer).toString(),  // Adding buffer to gas estimate
            gasPrice:gasPriceBigInt.toString()})
        console.log("sendVote is:", sendVote);
        res.status(200).json({ message: true, vote: "ycp" });
    } else if (vote === "tdp") {
        console.log("I am TDP!");
        const sendVote = await MyContract.methods.TDP_polling(id).send({
            from: process.env.account,
            gas:(Gas2BigInt + gasBuffer).toString(),  // Adding buffer to gas estimate
            gasPrice: gasPriceBigInt.toString()
        });
        console.log("sendVote is:", sendVote);
        res.status(200).json({ message: true, vote: "tdp" });
    } else {
        console.log("i am else!")
        res.status(400).json({ message: false, error: "Invalid vote type" });
    }

    }
    catch(err){
console.log("erro in the sendVote method!"+err);
        res.status(500).json({message:false});
    }
})

module.exports=router;