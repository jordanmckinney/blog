<center><h2>Cryptographic Hash Functions</h2></center>

A hash function is any function that maps data of arbitrary size to some fixed output size. So whether you give the hash function a 1GB file as input or a single character it will output, in the case of SHA256, 256 bits.

Cryptographic hash functions also have the property of being 'one-way' functions. What that means is that if I give you some output it is practically impossible to figure out what the input was. All you can do is simply try a bunch of inputs until one produces the output you were expecting.

An ideal Cryptographic hash function has the following properties:

* Deterministic (same output for some input everytime)
* Quick to compute
* Hard to reverse
* Sensitive to change in input (changing even a single bit should completely change the output
* Collission resistant

Why do we care? Because here is a mathematical unit of technology that has some unique properties.



What ethereum did was provide a platform with a blockchain, and what you can do is just put arbitrary OP codes into a transaction, also put some gas in there then send it out. Other nodes will pick it up and run your code. Each computational step they run will earn them money. And they are running this code on the ethereum virtual machine. Which I suppose consists of the state. But hey so does any computer right. You have a tape and a head and the tape reads then makes changes to a bunch of 0’s. So it’s state at any time is the values of the memory and harddrive. Programming is what steers the changes, and the data of course determine the outcome, and it’s all fueled by electricity. 

So we can create these smart contracts, which we can imagine as little machines. And they can basically do whatever you want. Though they can’t touch and see the physical world exactly. For example if you want to prove the existence of an object, the code can’t do that. At least not yet. Perhaps soon we can get a fingerprint of arbitrary objects. A photo could do this actually. But would be best suited for certain objects, namely visually detailed ones. A video of the object could do well. Anyway, the code can’t do it. 

Now what if you made a system of smart contracts. You could design arbitrary systems. You could build entire decentralised autonomous organisations. Where no one actually works for it. No one controls it. We can all see the code. We can also all pool money into it to keep it fueled. For DAOs to thrive there need to be strong incentives to keep them running. DAOs that rely on charity will likely exist, but they will not thrive. We could imagine a betting market where the only money that is skimmed off the top is just enough to run the computation. Which would likely be extremely small. 
What ethereum did was provide a platform with a blockchain, and what you can do is just put arbitrary OP codes into a transaction, also put some gas in there then send it out. Other nodes will pick it up and run your code. Each computational step they run will earn them money. And they are running this code on the ethereum virtual machine. Which I suppose consists of the state. But hey so does any computer right. You have a tape and a head and the tape reads then makes changes to a bunch of 0’s. So it’s state at any time is the values of the memory and harddrive. Programming is what steers the changes, and the data of course determine the outcome, and it’s all fueled by electricity. 

So we can create these smart contracts, which we can imagine as little machines. And they can basically do whatever you want. Though they can’t touch and see the physical world exactly. For example if you want to prove the existence of an object, the code can’t do that. At least not yet. Perhaps soon we can get a fingerprint of arbitrary objects. A photo could do this actually. But would be best suited for certain objects, namely visually detailed ones. A video of the object could do well. Anyway, the code can’t do it. 

Now what if you made a system of smart contracts. You could design arbitrary systems. You could build entire decentralised autonomous organisations. Where no one actually works for it. No one controls it. We can all see the code. We can also all pool money into it to keep it fueled. For DAOs to thrive there need to be strong incentives to keep them running. DAOs that rely on charity will likely exist, but they will not thrive. We could imagine a betting market where the only money that is skimmed off the top is just enough to run the computation. Which would likely be extremely small. 

What ethereum did was provide a platform with a blockchain, and what you can do is just put arbitrary OP codes into a transaction, also put some gas in there then send it out. Other nodes will pick it up and run your code. Each computational step they run will earn them money. And they are running this code on the ethereum virtual machine. Which I suppose consists of the state. But hey so does any computer right. You have a tape and a head and the tape reads then makes changes to a bunch of 0’s. So it’s state at any time is the values of the memory and harddrive. Programming is what steers the changes, and the data of course determine the outcome, and it’s all fueled by electricity. 

So we can create these smart contracts, which we can imagine as little machines. And they can basically do whatever you want. Though they can’t touch and see the physical world exactly. For example if you want to prove the existence of an object, the code can’t do that. At least not yet. Perhaps soon we can get a fingerprint of arbitrary objects. A photo could do this actually. But would be best suited for certain objects, namely visually detailed ones. A video of the object could do well. Anyway, the code can’t do it. 

Now what if you made a system of smart contracts. You could design arbitrary systems. You could build entire decentralised autonomous organisations. Where no one actually works for it. No one controls it. We can all see the code. We can also all pool money into it to keep it fueled. For DAOs to thrive there need to be strong incentives to keep them running. DAOs that rely on charity will likely exist, but they will not thrive. We could imagine a betting market where the only money that is skimmed off the top is just enough to run the computation. Which would likely be extremely small. 
What is a hash function? Cryptographic vs regular hash functions. We can think of it as a black box that takes *any* chunk of data and maps it to a fixed size output.

What are the properties? It produces a seemingly random output for any input. Random but repeatable. It's collission resistant.

Example, SHA256. Takes any input, maps it to 256 bits. Link to 3blue1brown video about how big this space is. How many 256 bit colors would this be? Or a 256 pixel screen. Where each pixel is on or off.

So what can we build with this machine?

Simplest use, a fingerprint of some chunk of data.

Hash table, hash set


Hash functions for example were developed out of some necessity somewhere and have found great use in computing. The hash function is a new tool in this landscape, like iron was in the realm of axes and hammers, construction and war. Given a simple tool like this many unexpected things can be done. You can digitally sign a document. That’s pretty neat and pretty powerful. Another thing you can do that took an extra step of insight was to use this property to make a chain, a chain which you can be sure was built from start to end, one piece at a time. So not so much a property but a function of hash functions is to make 1 way chains. What else can we do? Abstract up and imagine you can these little abstract number churning tools, that have this 1 way, repeatable but hard to collide set of properties. 

Well you could put them all in a line like and array and point them outward to a much larger array. To do this you don’t actually need an array holding every output that they hash function could in principle output, this would not be very useful. But if you put a simple mod between the output and target array then you can use any size target array.

Used in ‘isolation’ this device can sign stuff.

And of course you can chain them and use that structure to build bitcoin. Bitcoin also required some other new ideas of course. The blockchain was a tool for a digital currency.

Digital fingerprint. Take a doc, hash it. That’s unique. 

Hash table: Use the randomness and repeatableness of hash functions to build a quick access array.

Hash list: divide a file into N chunks. Hash each chunk and save the hashes into a big list indexed 0 - n-1 probably. This way if one block shows up with a hash not on the list then we turn it down. Bittorrent uses this. Torrent files come with hash lists.

Merkle Tree: Binary hash 

Hash chain: take the hash and re-hash it as many times as you want. Then that first hash served as a sort of seed whereby you could generate N more keys. So this ‘chain’ is still just one hash. It has just been hashed maybe some known number of times. Like h_99(password). https://en.wikipedia.org/wiki/Hash_chain

Hash chain 

Hash graphs

