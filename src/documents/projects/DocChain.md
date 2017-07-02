<center> <h2>Doc Chain</h2> </center>

Doc Chain takes files as arguments and uses them to construct a blockchain. Each block consists of the hash of the previous block, the document name, the hash of the document and a nonce used for mining.

Mining autocalibrates to take at least 1 second. Mining uses SHA-256 to hash the block along with an incrementing nonce (like Bitcoin).

[Github](https://github.com/jordanmckinney/doc_chain)

<img src="/src/images/doc_chain.png" alt="doc_chain"/>