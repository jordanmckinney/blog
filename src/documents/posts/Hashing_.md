<center><h2>Technology</h2></center>

<center><h4>Purpose of this Series</h4></center>
My goal for this series is to gain a thorough understanding and intuition for what cryptocurrencies are, how they work, and what their implications might be for the future. I will try to assume no prior knowledge and explain as much as possible from first principles.

<center><h3>The Machinery of Technology</h3></center>

There are two 'layers' involved with technology that I want to mention before getting into hash functions. The physics layer is the raw materials in nature and their known properties. This is the set of building blocks available to the inventor. The technology layer sits on top of the physics layer and consists of all the stuff we make with the physics blocks.

The physics layer is the most important and impactful of the two. Human technology has always been limited by the physical properties of the materials available to us. Technology is made of stuff, and what a given piece of technology can do depends on, and is limited by what it's made of.

Stone has properties of hardness, heaviness, weather resistance, and so on, but it doesn't hold an edge very well and will chip or fracture if made too fine. These properties make it a good building material and useful for some simple tools, but not very useful for precision instruments, or tools requiring lightness and flexibility. 

Our technology advances gradually as we learn to more skillfully work with our materials. It advances more quickly when we figure out creative ways to combine existing materials into useful technology. But the biggest advancements come when we discover materials with a unique **combination of properties**, and especially when we discover **brand new properties altogether**. This adds new fundamental building blocks to the phyics layer available for us to compose into new technology.

Probably the best example of finding a new property in an existing material is that of electrical conductivity. We used metals for thousands of years before noticing this property, and then a couple thousand more years passed before we began to really exploit it. Then it utterly transformed the world.

The technology layer that we build on top of the physics layer can be divided into 'lower order' or 'higher order' technology. A lower order technology is a simple invention probably made from a single material. A nail would fit this category. A higher order technology is the composition of multiple lower order technologies, along with perhaps some unique lower order pieces. A 

The interesting part is that higher level technologies can be composed into *new* additional higher level technologies. The compositions can go in every direction.

Now all these units of technology are like the physics units in that we can figure out their properties and then use them abstractly. The difference being that it's much easier to change the properties of a technology layer unit than a physics layer one. 


The other aspect of technological progress that I want to mention is the process of abstracting technology into new 'atomic units'.  When a new invention is made that invention can be viewed as a 'black box' where we don't worry about how it works, we just look at what properties does it have. This process sits on top of the previous layer of finding new properties in materials. Once this invention exists we can then use it as a sort of atomic chunk in new invetions. A gas engine is pretty complicated but once it exists you can think of it abstractly as a black box that has certain properties. In this case it requires fuel, it ouputs heat and noise, and it can turn a shaft of some kind with quite a lot of power for a long time.

that concept of a wheel can be used by other inventors without worrying about 
As people have used building blocks to construct technology 

This concept is well known to software developers where large complex pieces of software have their implementation details abstracted away and offer a simple API that users can interact with. A piece of software might do complex image recognition but offer an API that simply takes an image as input and outputs a single word label like 'cat' or 'car'. This piece of software then becomes a unit 

What we've done with computers arguably makes up a new layer different from the others. Of course it's still just electrons moving around so it's still in the middle layer, but while the middle layer does stuff only in the regular world of atoms, the digital layer does stuff in the world of information (and atoms).

This also applies to things we might not consider technology. Something like fire can be abstracted to its properties. It can produce heat and light. So anytime we need heat or light we can think if we can use fire somehow.

<center><h4>Hash Functions as Abstract Machines</h4></center>

A hash function is any function that can be used to map data of arbitrary size to data of fixed size. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. One use is a data structure called a hash table, widely used in computer software for rapid data lookup. Hash functions accelerate table or database lookup by detecting duplicated records in a large file. An example is finding similar stretches in DNA sequences. They are also useful in cryptography. A cryptographic hash function allows one to easily verify that some input data maps to a given hash value, but if the input data is unknown, it is deliberately difficult to reconstruct it (or equivalent alternatives) by knowing the stored hash value. This is used for assuring integrity of transmitted data, and is the building block for HMACs, which provide message authentication.

<center><h4>Things you can build with Hash Functions</h4></center>

<img src="/public/images/vimtmux.png" alt="Drawing" style="max-width: 100%;"/>
