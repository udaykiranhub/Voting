
import { useState } from "react";

import "react-bootstrap";
import {useNavigate} from "react-router-dom";

function VoteRegistration(){
const navigate=useNavigate();

const [id,setId]=useState(null);
const [name,setName]=useState(null);
const [ballot,setBallot]=useState(null);

const [user,setUser]=useState(null);
const [reg,setReg]=useState(false);


const onSubmit=async (event)=>{
    event.preventDefault();

    if(!id || !name || !ballot){
        alert("please Fill Details!");
        return ;
    }

try{


var res=await fetch("http://localhost:5000/voteRegister",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({id,name,ballot})

})

var data=await res.json();
setUser(data.receipt);
if(data.message){
    alert("Regsiterd!");
    setReg(true);
 
}
else{
    alert("Already Registerd!");
   
}


}
catch(err){
    console.log("err in VoteRegister:"+err);
    alert("try again after some time!");
}


}

return (
    <div className="row">
<div className="col-xs-8 col-sm-10 col-lg-12">

<center>
<h1>Vote Registration for Condidate!</h1>
<form  onSubmit={onSubmit} action="/as">
<label>ID:</label><input type="number" placeholder="enter Id" className="form-control" onChange={(e)=>{setId(e.target.value)}}/>
<br/>
<br/>
<label>Name:</label><input type="text" placeholder="enter name"  className="form-control" onChange={(e)=>{setName(e.target.value)}}/>
<br/>
<br/>
<label>Ballot Name:</label><input type="text" placeholder="enter Ballot name" className="form-control" onChange={(e)=>{setBallot(e.target.value)}}/>
<br/>
<br/>


<input type="submit" value="Register"/>
</form>

</center>
</div>

  
    </div>
)

}

export default VoteRegistration;