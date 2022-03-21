import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "@ethersproject/contracts";
import { ethers, expect, constants } from "./constants.test";
import { TemplateContract, TemplateContract__factory } from "../typechain-types";

describe("tests", () => {
  let owner: SignerWithAddress, artist: SignerWithAddress, buyer: SignerWithAddress;

  // this var name should be changed to something more descriptive
  let TemplateContractArtifacts: TemplateContract__factory;
  let TemplateContract: TemplateContract;

  beforeEach(async () => {
    // Put logic that will be needed before every test
    [owner, artist, buyer] = await ethers.getSigners();

    TemplateContractArtifacts = await ethers.getContractFactory("Contract");
    TemplateContract = await TemplateContractArtifacts.connect(owner).deploy();
  });

  describe("view functions", () => {
    it("returns something properly")
    it("can't return something that doesn't exist")
  })

  describe("state-changing functions", () => {

  })

  describe("event tests", () => {
    
  })
})