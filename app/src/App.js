import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import {ethers} from "ethers";
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import { BrowserRouter , Route, Routes, Link, Outlet } from "react-router-dom"; // Corrected import
//import MyContractABI from "../../build/contracts/MyContract.json";

//files.........



import "./layout.css";
import VoteRegistration from './voteRegistration';

import NavBar from './head.js';

//import ConnectMeta from "./connect_meta.js"
import Body from './body.js';

/////////


const App = () => {
  

  return (
   <div className='row'>
    <div className='col-xs-8 col-sm-10 col-lg-12'>
<div className='layout-container'>
  {/* divisions*/}
<div className='layout-head'>

<div>

<NavBar/>
</div>


  </div>
<div className='layout-body'>
<h1>Decentralized Voting </h1>
<Body/>
</div>
<div className='layout-foot'>
 

</div>
</div>

    

    </div>
   </div>
  );
};

export default App;
