import { Storage } from '@koinos/sdk-as';
import { mynft } from '../proto/mynft';

const TOKENS_SPACE_ID = 2;

export class Tokens extends Storage.Map<string, mynft.token_object> {
  constructor(contractId: Uint8Array) {
    super(
      contractId, 
      TOKENS_SPACE_ID, 
      mynft.token_object.decode, 
      mynft.token_object.encode,
    );
  }
}