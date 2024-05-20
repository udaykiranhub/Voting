var express=require("express");
var router=express.Router();

var MyContract=require("../backendModules/contract.js");

var web3=require("../backendModules/web3Instance.js");

// Helper function to convert BigInt to string
//JSON.parse(JSON.stringify(...))


function convertBigIntToString(obj) {
  return JSON.parse(JSON.stringify(obj, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value
  ));
}


router.get("/getallvoters",async function(req,res){
    try{

var voters=await MyContract.methods.GetAllVoters().call();
console.log("voter is:",voters[3])
console.log("voter is:",voters[2])
console.log("voter is:",voters[5])
console.log("voter is:",voters[7])
console.log("voter is:",voters[4])
console.log("voter is:",voters[8])
  // Convert BigInt to string
  const votersWithBigIntConverted = convertBigIntToString(voters);

  res.status(200).json({ voters: votersWithBigIntConverted });
//res.status(200).json({voters:JSON.stringify(voters)});

    }
    catch(err){
        console.log("erro in getallovotesRouter"+err);
        res.status(500).json({message:false})
    }

})

module.exports=router;