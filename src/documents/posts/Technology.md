<center><h2>Cryptocurrency & Blockchain Series</h2></center>

My goal with this series of posts is to gain a thorough and inuitive understanding of what cryptocurrencies are, the technology behind them and their potential implications. I will try to explain things from a 'first-principles' approach and not gloss over any details.

<hr>

I think that in order to understand the potential of cryptocurrencies we need to understand their inner workings in some detail. To understand any cryptocurrency we need to know the blockchain. To appreciate how blockchains are used by crpytocurrencies work we should at least have a high level understanding of hashing and public key cryptography, though I don't think we need also to need know *their* inner workings.

Before getting to hashing and public key crypto I take a brief high level look at technology in general.

<hr>

<center><h3>Technology: Composition and Abstraction</h3></center>

Human technological progress is driven by a continual process of composition and abstraction. Raw materials with useful properties are composed to form tools. The details of how the tool was made and how it works can then be abstracted away and the tool can be used by others as a building block, or technological 'unit'. Like the original raw materials these blocks themselves can then be composed into new tools. These more complex tools can again be abstracted as new technological units, which can be further composed into new tools, and so on.

The internal combustion engine is composed of hundreds of less complex technological units. While it took a great deal of time and effort to invent this machine, once it was figured out others could use it as a building block. It is not necessary for an inventor to understand the details of how the combustion engine works in order for them to use it as a building block. The engine can be abstracted as a 'black box' with a simple set of properties. It has a certain weight and size, requires fuel to run, outputs exhaust gas, heat and noise, but produces constant rotational power.

New inventions can be viewed as artifacts or systems with certain properties or attributes. The inner workings of a given invention is usually not as important to history as the properties of it. While significant impact may come from improving or re-combining the properties of existing technology into something new, revolutionary change can come from technology with entirely new properties altogether.

<center><h4>Abstract Machines</h4></center>

When computers were invented we were presented with an entirely new technological *platform*. Everything computers do of course still belongs to the physical world, but the laws governing this new realm are completely unlike the laws of the physical world. On this platform we can bring completely abstract mathematical 'machinery' to life. Previously mathematical concepts could only be run on the hardware of human minds. Now we can run them at the scale of industry.

Naturally the same process of abstraction and composition is happening on this platform as had occurred in the macro physical realm. Simple units of logic are composed into mathematical operations, which are composed into functions, which are composed into programs. These mathematical constructions require only a little electrical power to run and perform tremendous feats of calculation on a time scale foreign to us.

The most fascinating thing about this new realm is that some of these mathematical machines are unlike *anything we have encountered* in the physical world. And we have only just begun this process of exploring and expanding the vast landscape of math in search of these abstract creatures that we can animate with electricity.

Public key cryptography and cryptographic hash functions are two such animals that have found a very interesting use case in crpytocurrencies and the emerging field of cryptoeconomics. These technologies, when treated as technological units with certain properties, are very simple. And for the core features of cryptocurrencies, these are the only tools you need.

<hr>

<center><h3>Public Key Cryptography</h3></center>

Public key cryptography, or asymmetric cryptography is one of these mathematical machines that seem like magic. This system allows **authentication** and **encryption** to occur between parties which have never met. Most cryptocurrencies including Bitcoin and Ethereum do not actually encrypt transaction data or any other data on their blockchains so we only need to worry about the authentication aspect.

<center><h4>Authentication</h4></center>

<p>Produce your key-pair &#x2012; a public key which you can share with anyone, even publish to your website, and a private key which is kept private. Now you can produce a chunk of data, maybe a will, financial transaction, or any message, use your private key to 'sign' this chunk of data, and recipients can be certain that this message came from you. Or at least they can be sure that someone with the private key, which corresponds to the public key that you published, signed the document.</p>

So as long as your public key is published somewhere that people can trust, you can send out signed messages on a *untrusted* network and people can be sure that the message came from you, and that it wasn't altered in any way. If you cannot or do not want to associate a public key to your identity, you can still send out signed messages and recipients can verify that the message came from someone who holds the private key corresponding to some public key.

<hr>

<center><h3>Hashing</h3></center>

Cryptographic hash functions are 'one-way' functions that map data of arbitrary size to some fixed size output. So whether your input is 1 bit or 1 billion bits the output will be the same size.

<p>A given input will always map to the same output, and the output should appear completely random. The SHA-256 hash algorithm for example produces a 256-bit output. Therefore any given hash value is one of 2<sup>256</sup> possible outputs. There are something like 2<sup>260</sup> atoms in the universe so the chance of finding another input that produces that hash is basically zero.</p>

An ideal cryptographic hash function has the following properties:

* Determinism: the same message always produces the same output
* Quickness: it is quick to compute the hash for some input
* Irreversibility: given some hash you can't figure out what the input was except by randomly guessing it and hashing the guess to see if it matches the target hash
* Avalanche effect: even a small change to the input should completely alter the output
* Collision resistance: it is infeasible to find two messages that hash to the same value

OK, so we have a mathematical machine or technological unit with these properties. It is a fast, one-way, unpredictable, fingerprint-generator. What useful things can we build with it?

The simplest application is **digital fingerprinting**. Take some chunk of data and hash it. The hash value will be (for all practical purposes) unique to that document.

A website can then publish just the hash of a file and users can download the file, hash it themselves, and check that their hash matches the published hash. If their copy of the file has been altered in any way, even if just one bit is flipped, the hash value will not match. If the hash matches then the user can be sure their file is legit. This sort of independent integrity check is much better than going through the file chunk by chunk and asking the server if each chunk is correct.

This concept can be extended to **hash lists** to allow trustless peer to peer file sharing. Take a file, break it up into many small pieces. Hash each piece. Publish this relatively small hash list somewhere trusted. Now a peer in the network can accept a file piece from anyone, hash it, if the hash is found in the list then keep the piece, else discard. An attacker cannot create a malicious file piece that matches a hash in the list. This technique is used by Bittorrent.

Even better we could hash the hash list itself to get a master hash or 'top hash'. We can then just publish the top hash and allow the peers to share hash lists. When a peer sends you the hash list, hash it, check if it matches the published top hash. If it matches then the hash list is legit and you can use it to start accepting blocks.

Hash functions have many other applications, but the one we are most interested in is the blockchain.

<center><h2>Blockchains</h2></center>

Take some chunk or 'block' of data, compute the hash for it, now take that hash value and put it in the next block. Repeat the process for each new block. Now anyone who looks at this sequence of blocks can be sure of their order of creation, as well as the contents of each block being unaltered in any way after the chain was created.

Assuming the hash of at least the newest block is published somewhere trusted, then if an attacker tries to send you a copy of the blockchain with even a single bit changed in *any* block, no matter how far back, the hashes of all blocks following the change will not match. This is one of the few data structures that have a sort of guaranteed 'arrow of time' associated with them.

In addition to the previous block's hash, a block can contain any kind of data you want. In the case of Bitcoin the blocks contain transaction data. Attackers cannot go back to an old block and change a transaction, because doing so would cause all following block hashes to change. A blockchain could also store contracts, records of events, patents or anything else where having an unaltered history matters.

This data structure can serve as a sort of shared database. It would be nice however, to have some way of knowing your blockchain, your database, was correct without having to trust a hash value from *anyone*. And there should be some way of knowing you have the correct blockchain that everyone else is using without having to trust some central authority to keep track of this. Bitcoin very elegantly solves both of these problems.
