import * as anchor from "@coral-xyz/anchor";
import { BN, Program, web3 } from "@coral-xyz/anchor";
import fs from "fs";

import { Keypair, Connection, PublicKey } from "@solana/web3.js";

import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";

import { Pumpfun } from "../target/types/pumpfun";
import {
  createConfigTx,
  launchTokenTx,
  migrateTx,
  swapTx,
  withdrawTx,
} from "../lib/scripts";
import { execTx } from "../lib/util";
import {
  TEST_DECIMALS,
  TEST_INIT_BONDING_CURVE,
  TEST_NAME,
  TEST_SYMBOL,
  TEST_TOKEN_SUPPLY,
  TEST_URI,
  TEST_VIRTUAL_RESERVES,
} from "../lib/constant";
import { createMarket } from "../lib/create-market";

let solConnection: Connection = null;
let program: Program<Pumpfun> = null;
let payer: NodeWallet = null;

/**
 * Set cluster, provider, program
 * If rpc != null use rpc, otherwise use cluster param
 * @param cluster - cluster ex. mainnet-beta, devnet ...
 * @param keypair - wallet keypair
 * @param rpc - rpc
 */
