import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { useState } from 'react';

import ycpImage from './ycp.jpeg'; // Adjust the path as needed

import tdpImage from "./tdpjanasena.jpeg";

import { useRef } from 'react';

function Voting(){

  const bimg=useRef(null);

  const [response,setResponse]=useState(null);

const [voted,setVoted]=useState(false);

const [id,setId]=useState(null);




async function sendVote(vote){

  try{
    const res=await fetch("http://localhost:5000/sendVote",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({id,vote})
     })   
    
    const mess=await res.json();
    setResponse(mess.vote);
if(mess.message){

//backgorund Image to Div


if(mess.vote==="ycp"){

if (bimg.current) {
  bimg.current.style.backgroundImage =`url(${ycpImage})` ;
  bimg.current.style.backgroundSize = 'cover'; // Set background size
  console.log(`Background image set to: url(${ycpImage})`); // For debuggin

}

}

else{
if (bimg.current) {
  bimg.current.style.backgroundImage =`url(${tdpImage})` ;
  bimg.current.style.backgroundSize = 'cover'; // Set background size
  console.log(`Background image set to: url(${tdpImage})`); // For debuggin
}


}

   
    alert("Voted   to => " +mess.vote);
    }
    else{
        alert("already Voted!  or  incorrect   id!");
    }


  }
  catch(err){
    console.log("Erro in the sendVote method"+err);
    alert("try after some time!");
  }
   
   }



async function ycp(){

if(!id){
    alert("enter id!")
    return ;
}


sendVote("ycp");


setVoted(true)

}



async function tdp(){

    if(!id){
        alert("enter id!")
        return ;
    }
    
  
sendVote("tdp");

setVoted(true);

}


    return(
        <div ref={bimg} style={{}}>
    <center>
        <h1>Caste Your Vote!!!</h1>
        </center>    
        <Container>
        <Row>
  <Col sm>
<br/>
<input type="number" className='form-control' placeholder='enter id' onChange={(e)=>{setId(e.target.value)}} />
<br/>
  </Col>

      </Row>
      <Row>
        <Col sm>
<center><h1>Part 1</h1>

<img src={ycpImage} alt="YCP Party" />
<br/>
<br/>
{voted=== false ? (
  <Button variant="danger" onClick={ycp}>Vote</Button>
) : null}

</center>


</Col>


        <Col sm>
<center><h1>Party 2</h1> 

<img src={tdpImage} alt="TDP party" />
<br/>
<br/>
{voted=== false ? (
  <Button variant="danger" onClick={tdp}>Vote</Button>
) : null}
</center>
</Col>
       
</Row>

</Container>
  

        </div>
    )
}

export default Voting;