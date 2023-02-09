// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract MyWill {
  struct participant {
    address _address ;
    uint amount ;
  }
struct owner{
participant[]  participants ;
uint timestamp;
}
mapping(address => owner)  ownerWill;
function setTimeLimit(uint _timestamp) public {
  require(ownerWill[msg.sender].timestamp <= 0 , "timestamp has already been set");
ownerWill[msg.sender].timestamp = _timestamp;
  }
function makeMyWill( address _addr , uint _amount  ) public payable  {
    require(msg.value == _amount * 1e18, "insufficient funds");
   ownerWill[msg.sender].participants.push(participant(_addr , _amount * 1e18  ));
}
function getMyWill() public view returns(owner memory) {
  require(ownerWill[msg.sender].participants.length != 0 ,"user doesn't own any will"  );
return ownerWill[msg.sender];
}
function deleteMyWill () public payable returns(bool res) {
  require(ownerWill[msg.sender].participants.length > 0 , "user doesn't own any will");
    for(uint i = 0; i < ownerWill[msg.sender].participants.length; i++ ){
payable(ownerWill[msg.sender].participants[i]._address).transfer(ownerWill[msg.sender].participants[i].amount);
  }
delete ownerWill[msg.sender];
  return true;
}
function with_drawal() public  payable returns(bool res) {
  require(ownerWill[msg.sender].participants.length != 0 , "insufficient funds");
  uint totalAmount;
for(uint i = 0; i < ownerWill[msg.sender].participants.length; i++ ){
totalAmount += ownerWill[msg.sender].participants[i].amount;

}
delete ownerWill[msg.sender];
payable(msg.sender).transfer(totalAmount - 1);
return true ;
}
function transferFunds() public payable returns(bool res) {
  require(ownerWill[msg.sender].participants.length != 0 , "user doesn't own any will");
    for(uint i = 0; i < ownerWill[msg.sender].participants.length; i++ ){
payable(ownerWill[msg.sender].participants[i]._address).transfer(ownerWill[msg.sender].participants[i].amount);
  }
delete ownerWill[msg.sender];
return true ;
}
}
