//SPDX-License-Identifier:GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract Voting {
 // Structure to represent a candidate
    struct Candidate {
        uint id;
        bool voted;
       
    }
//struct for voterlist
    struct VoterList{
        uint id;
        string name;
        string ballotName;
    }

//state variables 
address public owner;
uint public totalVotes=0;

uint public votes=0;

uint public TDP=0;

uint public YCP=0;


//contructor for owner
constructor(){
    owner=msg.sender;
}


    
// Mapping to store candidates
mapping(uint => Candidate) public candidateMap;
    

//voter Details in the Voter
mapping(uint=>VoterList)public voterListMap;
    

VoterList public  voter;

VoterList[] public AllVoter;

//Give registration for Only the Head with msg.sender Address
function  VoteRegister(uint _id,string memory _name,string memory _ballotname)public {
require(_id!=voterListMap[_id].id,"Already Registerd!");

voter=VoterList(_id,_name,_ballotname);

//set to AllVoter
AllVoter.push(voter);
voterListMap[_id]=voter;
//total votes
totalVotes++;

}
//Checking the voter is Register or not

function Check_Registration(uint _id)public view  returns(VoterList memory){
    require(_id==voterListMap[_id].id,"User Not Registered!");
    return voterListMap[_id];

}

//Returning the all Registerd Voters

function GetAllVoters()public view returns(VoterList[] memory){
    return AllVoter;
}


//start Voting
modifier check_votes(){
    require(votes<=totalVotes,"Voting OVer!");
    _;
}

modifier check_voter(uint _id){
    require(voterListMap[_id].id==_id," incorrect voter id");
    _;
}

modifier voted_or_not(uint _id){
    require(candidateMap[_id].voted==false,"Already Voted !");
    _;
}

//partiwise polling

function YCP_polling(uint _id)public  check_voter(_id) voted_or_not(_id)  check_votes returns(string memory){
    
    candidateMap[_id].voted=true;
    votes++;
    YCP++;
    return "Voted!";

}


function TDP_polling(uint _id)public  check_voter(_id) voted_or_not(_id)  check_votes returns(string memory){
    
    candidateMap[_id].voted=true;
    votes++;
    TDP++;
    return "Voted!";

}


}
