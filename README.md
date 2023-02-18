# koinos-nft-tutorial


So, let's try to start implementing a basic NFT contract, I worked on describing the different entry points/functions that the contract is going to need:

```
- name:
  - description: returns the name of the NFT collection
  - arguments: NONE
  - result:
    - string representing the name of the NFT collection

- symbol:
  - description: returns the symbol of the NFT collection
  - arguments: NONE
  - result:
    - value: string representing the symbol of the NFT collection

- max_supply:
  - description: returns the number of minted NFTs in the collection
  - arguments: NONE
  - result:
    - value: string representing the symbol of the NFT collection
- circulating_supply:
	- description: returns the result of max_supply - current_supply if max_supply exists else it returns the current_supply
	- arguments: 
		- 
	- result:
		- value: uint64 representing the circulating_supply
- balance_of:
  - description: returns the number of minted NFTs in the collection
    - arguments:
      - owner: base58 encoded address
    - result:
      - value: uint64 representing the balance of the address

- mint:
  - description: mints a new NFT to the "to" address
    - arguments:
      - to: base58 encoded address
    - result: NONE

- transfer:
  - description: transfers an NFT from the "from" address to the "to" address
    - arguments:
      - from: base58 encoded address
      - to: base58 encoded address
    - result: NONE
```

Let's start with "name" and "symbol", these should be the easiest to add to the contract and implement.

The way I usually do it is, I start by adding my new function in the proto file.

<aside>
File: Mynft.proto

</aside>

```js
// @description returns the name of the NFT collection
// @read-only true
message name_arguments {
  
}

message name_result {
  string value = 1;
}

// @description returns the symbol of the NFT
// @read-only true
message symbol_arguments {
  
}

message symbol_result {
  string value = 1;
}
```

"name" should be a function that doesn't take any arguments and returns a string. Since this function isn't going to "write" to the contract's state, it should be a "read-only" function. (edited)

There is a naming convention for the entry-points, for example, to describe the "name" function's arguments, I need to create a proto message called "name_arguments". To describe the result of the "name" function, you'd need to create a proto message called "name_result"

For the implementation of the "name" and "symbol" functions, all you need is to store the name and symbol in constants and return these constants in the functions calls.

<aside>
File: Mynft.ts

</aside>

```js
import { System } from "@koinos/sdk-as";
import { mynft } from "./proto/mynft";

const NAME = "MY_NFT"
const SYMBOL = "MNFT"

export class Mynft {
  hello(args: mynft.hello_arguments): mynft.hello_result {
    const name = args.name;

    const res = new mynft.hello_result();
    res.value = `Hello, ${name}!`;

    System.log(res.value);

    return res;
  }
    name(args: mynft.name_arguments): mynft.name_result {
    // YOUR CODE HERE

    const res = new mynft.name_result();
    res.value = NAME;

    return res;
  }

  symbol(args: mynft.symbol_arguments): mynft.symbol_result {
    // YOUR CODE HERE

    const res = new mynft.symbol_result();
    res.value = SYMBOL;

    return res;
  }
}
```
