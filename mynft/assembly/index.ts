import { System, Protobuf, authority } from "@koinos/sdk-as";
import { Mynft as ContractClass } from "./Mynft";
import { mynft as ProtoNamespace } from "./proto/mynft";

export function main(): i32 {
  const contractArgs = System.getArguments();
  let retbuf = new Uint8Array(1024);

  const c = new ContractClass();

  switch (contractArgs.entry_point) {
    case 0x82a3537f: {
      const args = Protobuf.decode<ProtoNamespace.name_arguments>(
        contractArgs.args,
        ProtoNamespace.name_arguments.decode
      );
      const res = c.name(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.name_result.encode);
      break;
    }

    case 0xb76a7ca1: {
      const args = Protobuf.decode<ProtoNamespace.symbol_arguments>(
        contractArgs.args,
        ProtoNamespace.symbol_arguments.decode
      );
      const res = c.symbol(args);
      retbuf = Protobuf.encode(res, ProtoNamespace.symbol_result.encode);
      break;
    }

    default:
      System.exit(1);
      break;
  }

  System.exit(0, retbuf);
  return 0;
}

main();
