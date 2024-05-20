import { useState, useEffect } from "react";
import Web3 from 'web3';
import { useDispatch } from 'react-redux';
import MyContractABI from "./contracts/MyContract.json";

function ConnectMeta() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contractInstance, setContractInstance] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const connectToBlockchain = async () => {
      try {
        let web3Instance;
        let accounts;

        if (window.ethereum) {
          // Use MetaMask's provider
          web3Instance = new Web3(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          alert("Connected through MetaMask!");
        } else {
          // Fallback to Ganache local blockchain
          const ganacheEndpoint = 'http://localhost:7545';
          web3Instance = new Web3(ganacheEndpoint);
          alert("Connected through Ganache!");
        }

        setWeb3(web3Instance);

        // Get accounts
        accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);
        setAccount(accounts[0]);

        // Dispatch the web3 instance to Redux
        dispatch({ type: "web3", payload: web3Instance });

      } catch (error) {
        console.error('Error connecting to blockchain:', error);
      }
    };

    connectToBlockchain();
  }, [dispatch]);

  const connectContract = async () => {
    try {
      if (web3) {
        const contractAddress = "0xeBFcc86FFc0F5d9BCb472B5989E0799408830ee6";
        const contract = new web3.eth.Contract(MyContractABI.abi, contractAddress);
        setContractInstance(contract);
        alert("Connected to contract");

        // Check if the contract instance is created correctly
        console.log("Contract Instance:", contract);

        // Fetch and log the owner state variable
        const contractOwner = await contract.methods.owner().call();
        console.log("Owner is:", contractOwner);

        // Dispatch the contract instance to Redux
        dispatch({ type: "setContractInstance", payload: contract });
      }
    } catch (error) {
      console.error("Error connecting to contract:", error);
      alert("Unable to connect to contract!");
    }
  };

  return (
    <div>
      <h1>Connecting to Blockchain with Web3 in React.js</h1>
      <h2>Connected Account: {account}</h2>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
    
      <button onClick={connectContract} className="btn btn-danger">
        ConnectToContract
      </button>
    </div>
  );
}

export default ConnectMeta;
