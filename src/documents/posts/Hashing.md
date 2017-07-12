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

What is a hash function? Cryptographic vs regular hash functions. We can think of it as a black box that takes *any* chunk of data and maps it to a fixed size output.

What are the properties? It produces a seemingly random output for any input. Random but repeatable. It's collission resistant.

Example, SHA256. Takes any input, maps it to 256 bits. Link to 3blue1brown video about how big this space is. How many 256 bit colors would this be? Or a 256 pixel screen. Where each pixel is on or off.

So what can we build with this machine?

Simplest use, a fingerprint of some chunk of data.

Hash table, hash set
