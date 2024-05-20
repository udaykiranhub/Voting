import React from 'react';
import ReactDOM from 'react-dom/client';
import './layout.css';
import App from './App.js';
import { BrowserRouter,Routes,Route,Link,Outlet } from 'react-router-dom';
import VoteRegistration from './voteRegistration.js';
import Admin from './admin.js';
import Voting from './voting.js';
//redux store
import store from "./store.js";
import {Provider} from "react-redux";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import VotersList from './voterlist.js';

import About from './about.js';

function Home(){
return (

<div className='row'>
  <div className='col-xs-6 col-sm-8 col-lg-12'>

    <div className="page-title text-center">
      <h1>Elections</h1>
    </div>



<Routes>
<Route path="/" element={<App/>}/>
<Route path="/voterList" element={<VotersList/>}/> 
<Route path="/admin" element={<Admin/>}/> 
<Route path="/voting" element={<Voting/>}/>
<Route path="/voteReg" element={<VoteRegistration/>}/>
<Route path="/about" element={<About/>}/>

  </Routes>


  </div>
</div>
)


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
  <Home />
  </Provider>
  </BrowserRouter>
  
);
