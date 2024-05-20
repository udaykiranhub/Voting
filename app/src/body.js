import { useNavigate } from "react-router-dom";
import "react-bootstrap";
import Button from 'react-bootstrap/Button';

function Body(){
    const navigate=useNavigate();
function GoToVoting(){
    navigate("/voting");
}
    return (
        <div style={{backgroundImage:'linear-gradient(skyblue,lightgreen)'}}>
 <center>
<h3>
A decentralized voting system utilizing blockchain technology represents a revolutionary approach 
to conducting elections. By leveraging the inherent properties of blockchain—transparency, security, and immutability.
such a system can address many issues associated with traditional voting methods.
 Here’s an in-depth look at how decentralized voting systems work, their benefits, challenges, and a sample implementation.
<br/>
<br/>
<Button variant="danger" onClick={GoToVoting} size="lg">Voting</Button>{' '}

<br/>
Ethereum Solidity is a programming language used to write smart contracts that run on the Ethereum blockchain.
 A voting system built with Solidity can be used for decentralized and tamper-proof voting applications.
  Below is an overview of how a basic voting system can be implemented using Solidity, 
  covering its core components and functionaliti
</h3>

 </center>

        </div>
    )
}

export default Body;