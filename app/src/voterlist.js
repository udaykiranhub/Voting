import {useState,useEffect} from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Table } from 'react-bootstrap';

function VotersList(){

    const [voters, setVoters] = useState([]);

useEffect(()=>{
    async function getVoterList(){
        const res=await fetch("http://localhost:5000/getallvoters",{
            method:"GET"
        })
        const data=await res.json();

        setVoters(data.voters);
        console.log("data is:",data);

    }

getVoterList();
},[])
    
    return(
        <div  style={{backgroundImage:'linear-gradient(lightblue,lightgreen)'}}>
        <center>
          <Container>
            <Row>
              <Col>
                <h1>Voters List!</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Ballot Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {voters.map((voter, index) => (
                      <tr key={index}>
                        <td>{voter.id}</td>
                        <td>{voter.name}</td>
                        <td>{voter.ballotName}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </center>
      </div>
    )
}

export default VotersList;