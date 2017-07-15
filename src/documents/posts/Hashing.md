<center><h2>Hashing & Public key Crypto</h2></center>

Preamble - point of this post
Intro - what is a hash function
Properties - what are they?
Uses - why do we care?


There are really just two technologies necessary to make bitcoin and other cryptocurrencies possible, hash functions and public key crypto. And they are very simple in concept. The implementation of them is less simple but I'm not going to go into that. We can just treat them as black boxes with certain properties.

<center><h2>Hashing</h2></center>

A hash function is just a function that maps an input of arbitrary size to a fixed size output. So you can give the function a single bit or a billion bits, either way it will produce the same size output. SHA-256 for example is the hash function behind Bitcoin's proof of work algorithm, it outputs 256 bits no matter the input size. 

Cryptographic hash functions also have the property of being 'one-way' functions. What that means is that if I give you some output it is practically impossible to figure out what the input was. All you can do is simply try a bunch of inputs until one produces the output you were expecting.

An ideal Cryptographic hash function has the following properties:

* Deterministic (same output for some input everytime)
* Quick to compute
* Hard to reverse
* Sensitive to change in input (changing even a single bit should completely change the output
* Collission resistant

Why do we care? Because here is a mathematical unit of technology that has some unique properties.

Example, SHA256. Takes any input, maps it to 256 bits. Link to 3blue1brown video about how big this space is. How many 256 bit colors would this be? Or a 256 pixel screen. Where each pixel is on or off.

So what can we build with this machine?

Simplest use, a fingerprint of some chunk of data.

Hash table, hash set

Well you could put them all in a line like and array and point them outward to a much larger array. To do this you don’t actually need an array holding every output that they hash function could in principle output, this would not be very useful. But if you put a simple mod between the output and target array then you can use any size target array.

Used in ‘isolation’ this device can sign stuff.

And of course you can chain them and use that structure to build bitcoin. Bitcoin also required some other new ideas of course. The blockchain was a tool for a digital currency.

Digital fingerprint. Take a doc, hash it. That’s unique. 

Hash table: Use the randomness and repeatableness of hash functions to build a quick access array.

Hash list: divide a file into N chunks. Hash each chunk and save the hashes into a big list indexed 0 - n-1 probably. This way if one block shows up with a hash not on the list then we turn it down. Bittorrent uses this. Torrent files come with hash lists.

Merkle Tree: Binary hash 

Hash chain: take the hash and re-hash it as many times as you want. Then that first hash served as a sort of seed whereby you could generate N more keys. So this ‘chain’ is still just one hash. It has just been hashed maybe some known number of times. Like h_99(password).

Hash chain 

Hash graphs

