var express=require("express");
var router=express.Router();
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


router.post("/voteRegister",async function(req,res){
    try{


console.log("body:",req.body);
var {id,name,ballot}=req.body;
var Gas=await MyContract.methods.VoteRegister(id,name,ballot).estimateGas({from:process.env.account});

console.log("gas for voteRegistration!",Gas.toString());
var gasPrice = await web3.eth.getGasPrice();
console.log("Current gas price:", gasPrice.toString());

// Send the transaction
const receipt = await MyContract.methods.VoteRegister(id, name, ballot).send({
    from: process.env.account,
    gas: Gas,
    gasPrice: gasPrice
});

console.log("Transaction receipt:", receipt);

    // Serialize receipt object with custom JSON replacer
    const serializedReceipt = JSON.stringify(receipt, customJSONReplacer);



    // Send response with serialized receipt
    res.status(200).json({
      message: true,
      receipt: serializedReceipt,
    });

}
    catch(err){
    //    console.log("Error in the voteRegister Router!",err);

        if (err.message.includes('revert')) {
            res.status(400).json({ message:false, error: err.message });
        } else {
            res.status(500).json({ message:false, error: err.message });
        }

    }
})

module.exports=router;