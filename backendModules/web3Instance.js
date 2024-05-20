var {Web3}=require("web3");
require("dotenv").config();


//web3 instance 
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ganache_url));

module.exports=web3;