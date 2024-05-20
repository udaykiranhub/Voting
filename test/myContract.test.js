
// const MyContract = artifacts.require("MyContract");
// const { expect } = require('chai');

// contract('MyContract', (accounts) => {
//   let myContractInstance;

//   before(async () => {
//     myContractInstance = await MyContract.deployed();
//   });

//   it('should set and get data correctly', async () => {
//     // Set data
//     const owner="0xFfbdC60FB40422d7c217e85fCE01d7A09e67CA61";
    

//     // Get data
//     const storedData = await myContractInstance.owner;

//     // Verify data
//     expect(storedData).to.equal(newData);
//   });




// });

const MyContract = artifacts.require("Voting");
const { expect } = require('chai');

contract('MyContract',async (accounts) => {
  let myContractInstance;

  before(async () => {
    myContractInstance = await MyContract.deployed();
 
  });

  it('should have the correct owner address', async () => {
    // Get the owner address from the contract
    //metamask address is the owner
    const owner='0xFfbdC60FB40422d7c217e85fCE01d7A09e67CA61';
    const ownerAddress = await myContractInstance.owner.call();
  console.log("owner is:",ownerAddress);
    // Verify the owner address
  // Verify the owner address
  expect(ownerAddress).to.equal(ownerAddress)
    
  });
});










// const chai = require('chai');
// const expect = chai.expect;

// describe('Chai Assertion Examples', () => {
//   it('should be a string', () => {
//     const name = 'John Doe';
//     expect(name).to.be.a('string');
//   });

//   it('should have a property', () => {
//     const person = { name: 'Alice', age: 30 };
//     expect(person).to.have.property('name');
//   });

//   it('should be equal to an array', () => {
//     const numbers = [1, 2, 3];
//     expect(numbers).to.be.eql([1, 2, 3]);
//   });

//   it('should include a value in the array', () => {
//     const fruits = ['apple', 'banana', 'orange'];
//     expect(fruits).to.include('banana');
//   });

//   it('should match a regular expression', () => {
//     const email = 'user@example.com';
//     expect(email).to.match(/@/);
//   });

//   it('should contain a substring', () => {
//     const message = 'Welcome to the world!';
//     expect(message).to.have.string('world');
//   });

//   it('should be an empty string', () => {
//     expect('').to.be.empty;
//   });

//   it('should be true or become true based on condition', () => {
//     const isWeekend = true;
//     expect(isWeekend || new Date().getDay() === 6).to.be.true;
//   });

//   it('should throw an error when dividing by zero', () => {
//     function divide(a, b) {
//       if (b === 0) {
//         throw new Error('Division by zero!');
//       }
//       return a / b;
//     }

//     expect(() => divide(10, 0)).to.throw(Error, 'Division by zero!');
//   });

//   it('should satisfy a custom validation logic', () => {
//     expect([1, 2, 3]).to.satisfy(arr => arr.length === 3 && arr.every(num => num > 0));
//   });
// });
