/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TemplateContract,
  TemplateContractInterface,
} from "../TemplateContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220c9b2e926cc752363b523c29308ccc58fc0a9131f557588be1b37001998db38a264736f6c634300080d0033";

type TemplateContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TemplateContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TemplateContract__factory extends ContractFactory {
  constructor(...args: TemplateContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TemplateContract";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TemplateContract> {
    return super.deploy(overrides || {}) as Promise<TemplateContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TemplateContract {
    return super.attach(address) as TemplateContract;
  }
  connect(signer: Signer): TemplateContract__factory {
    return super.connect(signer) as TemplateContract__factory;
  }
  static readonly contractName: "TemplateContract";
  public readonly contractName: "TemplateContract";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TemplateContractInterface {
    return new utils.Interface(_abi) as TemplateContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TemplateContract {
    return new Contract(address, _abi, signerOrProvider) as TemplateContract;
  }
}
