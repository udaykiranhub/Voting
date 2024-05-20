import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
    const navigate = useNavigate();
    const [owner,setOwner]=useState(null);



const isAdmin = async (event) => {
    event.preventDefault();
    if(!owner){
        alert("enter owner!");
        return;
    }


  try{

var formData=new FormData();
formData.append("owner",owner);
const res = await fetch("http://localhost:5000/isAdmin", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ owner })
});
        const data=await res.json();
console.log("bacekend messsage is:",data.message)
        if(data.message){
            alert("ok");
            navigate("/voteReg");
        }
        else{
            alert("Incoorrect Owner!");
        }

  }

  catch(err){
    console.log("error is :"+err);
    alert("try after some time!");
  }
    
};

    const GoBack = () => {
        window.history.back();
    };

    return (
        <div className="row">
            <div className="col-xs-8 col-sm-10 col-lg-12">
                <center>
                    <h1>I am admin login page</h1>
                    <form onSubmit={isAdmin} >
                    <label>Id:</label>
                    <input type="text" onChange={(e) => { setOwner(e.target.value.trim()) }} />
                    <br />
                    <br />
                    <input type="submit" value="isAdmin" className="btn btn-success"/>
                    <br />
                    <br />
                    </form>
                    <button onClick={GoBack} className="btn btn-success">Go Back</button>
                </center>
            </div>
        </div>
    );
}

export default Admin;
