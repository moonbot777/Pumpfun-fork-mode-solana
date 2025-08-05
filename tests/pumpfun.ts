import * as anchor from "@coral-xyz/anchor";
import { BN, Program } from "@coral-xyz/anchor";
import { Pumpfun } from "../target/types/pumpfun";
import {
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionConfirmationStrategy,
} from "@solana/web3.js";
import * as assert from "assert";
import {
  SEED_CONFIG,
  SEED_BONDING_CURVE,
  TEST_DECIMALS,
  TEST_NAME,
  TEST_SYMBOL,
  TEST_TOKEN_SUPPLY,
  TEST_URI,
  TEST_VIRTUAL_RESERVES,
  TEST_INIT_BONDING_CURVE,
  SEED_GLOBAL,
} from "./constant";
import {
  calculateAmountOutBuy,
  convertFromFloat,
  convertToFloat,
  getAssociatedTokenAccount,
} from "./utils";
require("dotenv").config();

describe("pumpfun", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.Pumpfun as Program<Pumpfun>;

  const adminKp = Keypair.generate();
  const userKp = Keypair.generate();
  const user2Kp = Keypair.generate();
  const tokenKp = Keypair.generate();

  console.log("admin: ", adminKp.publicKey.toBase58());
  console.log("user: ", userKp.publicKey.toBase58());
  console.log("user2: ", user2Kp.publicKey.toBase58());

  const connection = provider.connection;
}
