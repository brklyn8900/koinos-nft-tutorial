import { System } from "@koinos/sdk-as";
import { mynft } from "./proto/mynft";

const NAME = "MY_NFT"
const SYMBOL = "MNFT"
const MAX_SUPPLY = 100

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
    max_supply(args: mynft.max_supply_arguments): mynft.max_supply_result {
    // YOUR CODE HERE

    const res = new mynft.max_supply_result();
    res.value = MAX_SUPPLY;

    return res;
  }
}
