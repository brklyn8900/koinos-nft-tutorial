import { authority, Protobuf, SafeMath, StringBytes, System, Token } from "@koinos/sdk-as";
import { mynft } from "./proto/mynft";
import { Balances } from "./state/Balances";
import { Supply } from "./state/Supply";
import { Tokens } from "./state/Tokens";

const NAME = "MY_NFT"
const SYMBOL = "MNFT"
const MAX_SUPPLY:u64 = 10


export class Mynft {
    contractId: Uint8Array = System.getContractId();

    name(args: mynft.name_arguments): mynft.name_result {

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

  mint(args: mynft.mint_arguments): mynft.mint_result {
    const balance = new Balances(this.contractId);
    const supply = new Supply(this.contractId);
    const to = args.to;
    

   // ensure only the contract owner can mint new tokens (see System.requireAuthority)
    System.requireAuthority(authority.authorization_type.contract_call, this.contractId);
   
    // ensure "to" argument is not empty ("to" is going to be an array of bytes, so to see if it's not empty you just need to check that the length of the array is greater than 0)
    System.require(to.length > 0, 'Argument "to" is missing')

    // ensure new supply (current supply + 1) is lower or equal to max supply
    let supplyObj = supply.get();

    if(supplyObj == null) {
      supplyObj = new mynft.supply_object();
    }
    supplyObj.value = SafeMath.add(supplyObj.value, 1);
    
    System.require(supplyObj.value <= MAX_SUPPLY, "Max supply limit reached");

    // create a token_object
    let tokenObj = new mynft.token_object();
    tokenObj.owner = to;

    // save the token_object
    const token = new Tokens(this.contractId);
    token.put(supplyObj.value.toString(), tokenObj);
    supply.put(supplyObj);

    // update "to" balance
    let balanceObj = balance.get(to);
    if(balanceObj == null) {
      balanceObj = new mynft.balance_object();
    }
    balanceObj.value = SafeMath.add(balanceObj.value, 1);
    balance.put(to, balanceObj);    

    // generate mint event
    const tokenId = supplyObj.value.toString();
    token.put(tokenId, tokenObj);
    let mintNft = new mynft.mint_event();
    mintNft.to = to;
    mintNft.token_id = StringBytes.stringToBytes(tokenId);

    System.event("collections.mint_event",Protobuf.encode(mintNft, mynft.mint_event.encode),[to]);

    const res = new mynft.mint_result();

    return res;
  }
}
