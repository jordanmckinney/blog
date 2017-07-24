<center><h2>Cryptocurrency & Blockchain Series</h2></center>

My goal with this series of posts is to gain a thorough and inuitive understanding of what cryptocurrencies are, the technology behind them and their potential implications. I will try to explain things from a 'first-principles' approach and not gloss over any details.

<hr>

<center><h3>Technology: Composition and Abstraction</h3></center>

Human technological progress is driven by a continual process of composition and abstraction. Raw materials with useful properties are composed to form tools. The details of how the tool was made and how it works can then be abstracted awayand the tool can be used by others as a building block, or technological 'unit'. Like the original raw materials, these technological units have certain properties and can themselves be composed into new tools. These more complex tools can then be abstracted as new technological units, which can be composed into new tools, and so on.

The internal combustion engine is composed of hundreds of less complex technological units. While it took a great deal of time and effort to invent this machine, once it was figured out others could use it as a building block. It is not necessary for an inventor to understand the details of how the combustion engine works in order for them to use it as a building block. The engine can be abstracted as a 'black box' with a simple set of properties. It has a certain weight and size, requires fuel to run, outputs exhaust gas, heat and noise, but produces constant rotational power.

This process of composition and abstraction has been going on continually for millenia and at many different levels of complexity.

<center><h4>Abstract Machines</h4></center>

When computers were invented we were presented with an entirely new technological *platform*. Everything computers do of course still belongs to the physical world, but the laws governing this new realm are completely unlike the laws of the physical world. On this platform we can bring completely abstract mathematical 'machinery' to life. Previously mathematical concepts could only be run on the hardware of human minds. Now we can run them on an industrial scale.

Naturally the same process of abstraction and composition is happening on this platform as had occurred in the macro physical realm. Simple units of logic are composed into mathematical operations, which are composed into functions, which are composed into programs. These mathematical constructions require only a little electrical power to run and perform tremendous feats of calculation on a time scale foreign to us.

The most fascinating thing about this new realm is that some of these mathematical machines are unlike *anything we could ever imagine* existing in the physical world. And we have only just begun this process of exploring the vast landscape of math in search of these abstract creatures that we can animate with electricity.

Public key cryptography and cryptographic hash functions are two such animals that have found a very interesting use case in crpytocurrencies and the emerging field of cryptoeconomics. These technologies, when treated as technological units with certain properties, are very simple. And for the major features of the major cryptocurrencies, these are the only tools you need.

<hr>

<center><h3>Hashing</h3></center>

Cryptographic hash functions are 'one-way' functions that map data of arbitrary size to some fixed size output. So whether your input is 1 bit or 1 billion bits the output will be the same size.

For example SHA-256 produces a 256-bit hash no matter the input. The hash of the previous paragraph using SHA-256 is:
```
0x1e05ce2168d2bc979f309695235f39ff023701c889c24d78ada0faf3faa6df5e
```
<p>A given input will always map to the same output, and the output should appear completely random. The hash value above is one of 2<sup>256</sup> possible outputs for SHA-256. There are something like 2<sup>260</sup> atoms in the universe so the chance of finding another input that produces that hash is basically zero.</p>

An ideal cryptographic hash function has the following properties:

* Determinism: the same message always produces the same output
* Quickness: it is quick to compute the hash for some input
* Irreversibility: given some hash you can't figure out what the input was except by randomly guessing it and hashing the guess to see if it matches the target hash
* Avalanche effect: even a small change to the input should completely alter the output
* Collision resistance: it is infeasible to find two messages that hash to the same value

OK, so we have a mathematical machine or technological unit with these properties. What useful things can we build with it?

The simplest application is **digital fingerprinting**. Take some chunk of data and hash it. The hash value will be (for all practical purposes) unique to that document, like a fingerprint.

A website can then publish just the hash of a file and users can download the file, hash it themselves, and check that their hash matches the published hash. If it matches then their file is legit. This is much better than going through your file peice by peice and asking the server if each piece is correct.

This concept can be extended to **hash lists** to allow trustless peer to peer file sharing. Take a file, break it up into many small pieces. Hash each piece. Publish this relatively small hash list somewhere trusted. Now a peer in the network can accept a file piece from anyone, hash it, if the hash is found in the list then keep the piece, else discard. This is basically what Bittorrent does.

Even better we could hash the hash list itself to get a master hash or 'top hash'. We can then just publish the top hash and allow the peers to share hash lists. When a peer sends you the hash list, hash it, check if it matches the published top hash. If it matches great, keep that list and start accepting data blocks, else discard.

There are more applications, but the most interesting, and relevant to cryptocurrencies is the blockchain. Take some data

<hr>

<center><h2>Public Key Cryptography</h2></center>

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

