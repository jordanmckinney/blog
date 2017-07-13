<center> <h2>Blockchain: A Time Ordered Datastructure</h2> </center>

Using hash functions we can create a hash chain. A data structure where we can be sure that parts of it were created in a certain order. I do not know of any other data structure that has such a property. There’s just no way to make a hash chain starting at the end. You just can’t. Wow. So we have a data structure that is not completely agnostic regarding time. Arrays and hash tables and objects have no concern for time, no way to tell the future from the past, no relationship to time at all. Hash Chains can promise that links in the chain flowed forward in time. So we get the time direction (not length... yet) of the order of creation of parts of this data structure. 

Perhaps we could do better? Could we get a better sense of how much time has passed. If the we could set a hash difficulty to get a probabalistic timer of sorts. But that depends on the machine. So we still need a time oracle to get ‘10 minute’ blocks. 

So the structure of the blocks are simple. 

1MB blocks. 
The first block has a pointer to the previous which is 00000000000000000000000000
A time stamp, which could be the epoch number. This is better than just incrementing a counter for each block then having to make sure they were produced regularly. 
A nonce. 
The block of hashes. 256 bit chunks.

We hash this block until we get 0000xxxxxxxxxxxx or w/e and that becomes the header for the next block. That value becomes the prev value. The prev is the hash of the previous block. But this number can serve as the block address. 

How do we ensure the miners create accurate timestamps? Well for bitcoin, the clients all try to find a nonce for their block. When one finds one they tell the other nodes. You can’t fake this because the other nodes will verify a broadcasted block. Then start mining the next one. Of course 2 nodes could discover valid nonces, or ‘mine valid blocks’ at the same time. Then part of the network will be on one chain and the other on the other. So we have a fork. 2 valid forks. But eventually another block will be found. And that miner was mining on top of one of the initial forks. Nodes around him who also heard fork A broadcast their new block will be fine. But the other nodes will hear this 2nd broadcast and notice that this new block doesn’t match. It has an previous prev value.

What else can we do with a blockchain? You can make a chain of hashes. This way you could timestamp a document. The timestamp lives on the blockchain. There’s a hash in one of the blocks. So you have a giant chain of blocks. Each block has 1MB of hashes. Maybe more info as well? It could have meta data like the time. Then you take your document that you want to verify existed 4 years ago and you hash it. Now go through the whole blockchain looking for that hash. When/if you find it you check the timestamp for that block and you can say it existed at least before X date.

Link blockchain demo video
