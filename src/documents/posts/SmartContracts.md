<center><h2>Smart Contracts</h2></center>

Types of smart contract:
DApps: apps
DAO: orgs
DAC: corps
DAS: societies

<center> <h2>Smart Contracts</h2> </center>

There are two kinds of accounts in ethereum. There are regular user accounts and smart contracts. These realy should be called ether agents or something. They are accounts that contain their source code as well as a key value store! So they can keep track of their own internal state. To animate them you send them a tx and set a gas price? Then the network executes the code and they take that ether depending on the number of steps and the total storage used. 

So gas is a separate thing from ether. 1 gas is/was set at 1/100,000 ether. 10 Szabo. Then different computational operations cost 1, 5, 10, 20 etc gas. You want the gas cost of things to stay the same regardless of the price of ether. So you just change the price of gas itself. I think you can actually set your gas price now. So your smart contract has some total gas cost. 1150 gas to do some simple task. And you set your gas price as 10 Szabo then you’re saying I’ll pay 11,500 Szabo if you run my code. Or about .115 Ether. So your gas cost won’t change for this contract ever. But when you want to run it, maybe one a month for years, you make a tx where you set your gas price and you know how many steps so you know how much to send. The gas price would be entirely based on the market. Average gas price would fluctuate. 

So when you create a smart contract you create it as a special tx. The tx fee that you pay will be based on the size of your program. If it is many bytes then you must pay more. Just to store it. To load it into the state, into memory. Then later you pay to run it. Once sharding is figured out then we can avoid storing and computing all this stuff on every damn computer in the whole network. If we had some minimal necessary number of computers running it but they all shared hashes so they knew the system was coherent, then we could no doubt reduce gas costs by millions of times. I imagine the theoretical best case would be where data is stored on some minimum of like 10 machines or so. All distributed around randomly. The chance of 10 random machines dying at the same time is small. But if you must store for months it is higher. Perhaps longer term would just cost more. So then more nodes store your data. The speed of this system would ultimately be limited by the network speeds.

To make the DPU multicore you can somehow shard the incoming compute jobs (tx’s) so a given tx only gets actually run by 100 nodes or something. And they each run their own block chain perhaps, but then merkle tree them back and forth and together so everyone can be assured of the current state. All nodes I think should be able to agree on some hash value indicating that the system is coherent. 

A great picture of this could be, take all the nodes and line them up vertically. Now tx propagate up and down and fill hoppers of sorts. As nodes get tx they run the computation, apply intermediate state changes. If they win the block then their blockchain version extends and the signal their block. Now all the other nodes also apply the state change to their block chain, which should be identical up to this new block. So this wave goes outward from the discoverer of this gradually extending blockchain. Each node has a copy.

All the computations you run only make changes to the blockchain. So it is safe to run them. The code will only allow valid stuff to be done to the blockchain, and some of these things are secured by crypto. But the code inside the smart contract is only aware of other accounts. It does not know about the host system at all. 

Ethereum has the EVM to run contracts?, Solidity to write contracts in, tokens (ETH) and fuel (gas). So we can put a smart contract out ‘there’ and then send ETH to it. The eth is converted into ‘gas’ to run the program.

A transaction on ethereum is when you send ether to another account or send ether to a smart contract. A message is when a smart contract sends to another smart contract.
