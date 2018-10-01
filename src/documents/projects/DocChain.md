<center> <p id="title">Doc Chain</p> </center>

[Doc Chain](https://github.com/jordanmmck/doc_chain) takes files as input and uses them to construct a blockchain. Each block consists of the hash of the previous block, the document name, the hash of the document and a nonce used for mining.

Mining autocalibrates to take at least 1 second. Mining uses SHA-256 to hash the block along with an incrementing nonce (like Bitcoin).

[![Github](/public/images/doc_chain.png)](https://github.com/jordanmmck/doc_chain)
