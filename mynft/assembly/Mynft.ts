import { System } from "@koinos/sdk-as";
import { mynft } from "./proto/mynft";

const NAME = "MY_NFT"
const SYMBOL = "MNFT"

export class Mynft {
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
