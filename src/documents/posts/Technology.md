<center><h3>Cryptocurrency & Blockchain Series</h3></center>

My goal with this series of posts is to gain a thorough and inuitive understanding of what cryptocurrencies are, the technology behind them and their potential implications. I will try to explain things from 'first-principles' approach and not gloss over any details.

<center><h3>Technology: Composition and Abstraction</h3></center>

Human technological progress is driven by a continual process of composition and abstraction. Raw materials with useful properties are composed to form tools. The details of how the tool was made and how it works can then be abstracted away, and the tool can be used by others as a building block, or technological 'unit'. Like the original raw materials, these technological units have certain properties and can themselves be composed into new tools. These more complex tools can then be abstracted into new technological units, which can be composed into new tools, and so on.

The internal combustion engine is composed of hundreds of less complex technological units. While it took a great deal of time and effort to invent this machine, once it was figured out others could use it as a building block. It is not necessary for the inventor to understand the details of how the combustion engine works in order for them to use it as a building block. The engine can be treated as a 'black box' with a simple set of properties. It has a certain weight and size, requires fuel to run, produces exhaust gas, heat and noise, but produces constant rotational power.


<center><h3>Abstract Machines</h3></center>

Each time we discover new physical properties, or better understand old ones we expand the physics layer that our technology can be built upon, we gain new building blocks. In the technology layer a similar process occurs. We find ways to combine the fundamental building blocks into new technology, but we also abstract these inventions into technological 'units' and then use *those* as our building blocks.

Once someone invents the wheel, others can use this design and even improve upon it without having to reinvent it. Once someone combines gears, pulleys, pistons and fire into an engine we can all use the engine as a building block. We can then forget about how it works and just abstract it to a black box that has a certain properties. The engine has a certain size, outputs heat, requires fuel to run, and produces rotational power.

This process of composition and abstraction is happening constantly, and at many different levels at the same time.


When computers were invented we were presented with an entirely new technological *platform*. Everything computers do of course still belongs to the physical world, but we now had a platform where we could bring completely abstract mathematical 'machinery' to life. Previously mathematical concepts could only be run on the hardware of human minds. Now we run them at light speed.

Naturally the same process of abstraction and composition is happening on this platform as had occurred in the macro physical realm. Simple units of logic are composed into mathematical operations, which are composed into functions, which are composed into programs. These mathematical constructions require only a little electrical power to run and perform tremendous feats of calculation on a time scale we really can't understand.

The most fascinating thing about this new realm is that some of these mathematical machines are unlike *anything we could ever imagine* existing in the physical world. And we have only just begun this process of exploring the vast landscape of math in search of these abstract creatures that we can animate with electricity.

Public key cryptography and cryptographic hash functions are two such animals that have recently found a very interesting use case in crpytocurrencies and the emerging field of cryptoeconomics. In the next post I look at some of the properties of hash functions and the interesting ways in which these properties have been used so far.


<center><h2>Hashing & Public key Crypto</h2></center>

Preamble - point of this post
Intro - what is a hash function
Properties - what are they?
Uses - why do we care?


There are two core technologies at the heart of cryptocurrencies.

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


All the crypto we need is hashing and public key crypto
Crypto is one building block. Economics is the other.
Read up on the paper vitalik published, hard problems in cryptoeconomics... 

Public-key cryptography

Uses pairs of keys. Public and private. Does not require any shared secret key between the parties. So two parties who’ve never met can establish secure communication.

This is asymmetric encryption. Sending messages this way is expensive. So typically you first securely send a ‘session key’ which is a shared key that both parties can use to encrypt/decrypt, so they can communicate in faster symmetric encryption. 

Authentication: The public key can be used to verify that a message was created by holder of private key. 

Encryption: A message encrypted with the public key can only be decrypted with the private key. 

Alice wants to send message M to Bob
Bob chooses two primes p=17, q=23, then n=pq, n=391. 
We then need the m=LCM(p-1,q-1)=176.
We need r>1 where r is coprime with m (r and m have no factors in common), r=3.
Bob must also find a unique rs=1(mod m) 

Take 2 large primes p and q, then n=pq. N is used to encode the message. P and q are needed to decode. Just given n, it is very hard to find p and q. 

Digital Signatures

Alice generates a signing key and verification key. The verification key is published. To sign something Alice inputs her message and her signing key somehow into a function like RSA/DSS. This produces a number (maybe 256 bit).
Then Bob can see a message along with a signature number and he can input the message, signature, and verification key into RSA? And get a yes/no. Then you know what this signature was created by the combination of this message and the signing key.
In practice you hash your message first and input that along with signing key to get sig.

