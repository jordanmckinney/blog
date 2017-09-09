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

