import { Mynft } from '../Mynft';
import { mynft } from '../proto/mynft';

describe('contract', () => {
  it("should return 'NAME'", () => {
    const c = new Mynft();

    const args = new mynft.name_arguments();
    const res = c.name(args);

    expect(res.value).toStrictEqual('MY_NFT');
  });
  it("should return 'SYMBOL'", () => {
    const c = new Mynft();

    const args = new mynft.symbol_arguments();
    const res = c.symbol(args);

    expect(res.value).toStrictEqual('MNFT');
  });
});
