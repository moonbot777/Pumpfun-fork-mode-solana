import { BN, Program } from "@coral-xyz/anchor";
import {
  ComputeBudgetProgram,
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  Transaction,
} from "@solana/web3.js";

import { Pumpfun } from "../target/types/pumpfun";
import {
  ammProgram,
  feeDestination,
  marketProgram,
  SEED_BONDING_CURVE,
  SEED_CONFIG,
} from "./constant";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  NATIVE_MINT,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
