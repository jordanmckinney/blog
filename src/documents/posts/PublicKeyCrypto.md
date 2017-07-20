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
