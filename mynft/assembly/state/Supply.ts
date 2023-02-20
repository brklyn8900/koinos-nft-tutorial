import { Storage } from '@koinos/sdk-as';
import { mynft } from '../proto/mynft';

const SUPPLY_SPACE_ID = 1;

export class Supply extends Storage.Obj<mynft.supply_object> {
  constructor(contractId: Uint8Array) {
    super(
      contractId, 
      SUPPLY_SPACE_ID, 
      mynft.supply_object.decode, 
      mynft.supply_object.encode,
    );
  }
}