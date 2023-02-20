import { Storage } from '@koinos/sdk-as';
import { mynft } from '../proto/mynft';

const BALANCES_SPACE_ID = 3;

export class Balances extends Storage.Map<Uint8Array, mynft.balance_object> {
  constructor(contractId: Uint8Array) {
    super(
      contractId, 
      BALANCES_SPACE_ID, 
      mynft.balance_object.decode, 
      mynft.balance_object.encode,
    );
  }
}