import { System, Protobuf, authority } from "@koinos/sdk-as";
import { mynft } from "./proto/mynft";

export class Mynft {
  name(args: mynft.name_arguments): mynft.name_result {
    // YOUR CODE HERE

    const res = new mynft.name_result();
    // res.value = ;

    return res;
  }

  symbol(args: mynft.symbol_arguments): mynft.symbol_result {
    // YOUR CODE HERE

    const res = new mynft.symbol_result();
    // res.value = ;

    return res;
  }
}
