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

PUBLIC KEY CRYPTO

So you create your private key and public key pair. You can now send out your public key to everyone. Then people can send you messages that no one can read except you. So they can send an encrypted message over public networks. So you could also have 2 way communication right? Alice sends out her public key. She can now get secure messages from Bob. Bob send out his and now Alice can safely send. OR is that true? If I send a message encrypted with Alice's public key and she gets it. She can't know it was from me. Unless we create a chain. 

If we are to establish a connection how can I know it's between us? Once you start you can know that it's still between the same entities by putting the hash of the unencrypted previous message into the new message. That way Alice knew what the original message was and therefore the hash of it. So if she sends and then get a new message encrypted with her public key and she reads it and finds that hash then she knows the guy on the other end did in fact decrypt the message she sent. But there still needs to be some trust about sharing public keys? 

You can also sign a document using your private key and it can be verified by other people that the private key holder did this.

Dffie Hellman:

A and B agree on a shared public color say yellow.
A and B each choose a random secret color. A: light blue, B: orange
A mixes light blue and yellow, then sends it
B mixes orange and yellow, then sends it
A mixes public yellow, private light blue and B's orange+yellow
B mixes public yellow, private orange and A's light blue+yellow
Now A and be actually have the same color. It's just a different order of mixing.

C can only know yellow, and orange+yellow, lightblue+yellow
If C could untangle either compound colors then they could crack it.

So then you have a shared number. A big number. This can be the shared key with which you can encrypt messages from now on.

I'm not sure why you can't just regular public key? A wants to talk to B.
A publish pk_A, B publish pk_B. 
A chooses large random number, puts in message m, enc with pk_B then send
B opens message, stores number and sends their own m with a random number
enc this with pk_A and send
Now A and B each have 2 matching numbers. They could create a key with these.
No one has either number.

But how do you know the public key that hear about it the right one? Can you know?
I don't see any difference. 

A hash function is a function that takes one piece of information of any size and maps it to another piece of data of a fixed size i.e. a 1MB file or a 500KB file when run through a hash function would produce two separate ‘hashes’ 128 bits in length. A Cryptographic Hash Function is one that performs this function but also fulfils three important requirements: it does so in a way that no information is given on what input data produced the hash (non reversible), it does so in a way that a minor change in the input change gives a very different output hash, that the hash cannot be calculated except using the hash function (no shortcuts), that there is an extremely low probability that two different inputs will produce the same hash.
