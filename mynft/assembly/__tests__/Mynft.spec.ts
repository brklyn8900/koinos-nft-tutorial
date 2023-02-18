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
  it("should return 'MAX_SUPPLY'", () => {
    const c = new Mynft();

    const args = new mynft.max_supply_arguments();
    const res = c.max_supply(args);

    expect(res.value).toStrictEqual(100);
  })
});
