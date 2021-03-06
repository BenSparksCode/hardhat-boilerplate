/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Contract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Contract__factory>;
    getContractFactory(
      name: "TemplateContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TemplateContract__factory>;

    getContractAt(
      name: "Contract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Contract>;
    getContractAt(
      name: "TemplateContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TemplateContract>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
