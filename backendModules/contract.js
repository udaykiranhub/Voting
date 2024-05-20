var {Web3}=require("web3");
require("dotenv").config();




//connect to block chain contract 
var MyContract;
var contract_address;
try{
    contract_address=process.env.address;
 var  web3=new Web3(process.env.ganache_url)
    
    const abi= require('../build/contracts/Voting.json').abi; 
   MyContract=new web3.eth.Contract(abi,contract_address);


}
catch(err){
    console.log("Error to Connecting to the Block Chain!");
}


module.exports=MyContract;