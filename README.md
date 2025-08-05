# 🧠 Pump.fun Fork – Solana/Anchor Smart Contract

A powerful and customizable smart contract for **token launches** and **liquidity management** on Solana, forked and maintained by [greenfoxfun](https://t.me/greenfoxfun).

> **Need custom token launch logic or integrations?**  
> Reach out:  
> Telegram: [@greenfoxfun](https://t.me/greenfoxfun)  
> GitHub: [moonbot777](https://github.com/moonbot777)

---

## 🚀 Features

- **Fully on-chain logic**  
  Token creation and Raydium deposits are handled entirely on-chain.

- **Presale/Sniping Support**  
  Enable a `Presale` phase before launch to support early snipers and initial price discovery.

- **Raydium & Meteora Migration**  
  Migrate token liquidity to Raydium or Meteora after curve completion with a single instruction.

- **Market Cap Oracle Integration**  
  Set a curve limit and use price oracles to calculate market cap in real-time during swaps.

---

## ⚙️ Prerequisites

Ensure the following tools are installed on your system:

### Rust / Solana / Anchor Setup

📦 **Install Instructions**: [anchor-lang.com/docs/installation](https://anchor-lang.com/docs/installation)

```bash
# Check versions
rustc --version            # Rust
solana --version           # Solana CLI
anchor --version           # Anchor (should be 0.30.1)

# Set RPC
solana config set --url devnet

# Check balance and wallet
solana config get
solana balance

# Create a new keypair if needed
solana-keygen new

# Airdrop some test SOL (devnet)
solana airdrop 5
```

## 📂 Project Setup
```bash
# Clone the repo
git clone https://github.com/moonbot777/pumpfun-fork-smart-contract-solana.git
cd pumpfun-fork-smart-contract-solana

# Install dependencies
yarn
```

---

## 🛠️ Build & Deploy

### Build the Program
```bash
# Build the Anchor program
anchor build

# Sync keypairs if needed
anchor keys sync

# After editing `lib.rs` (e.g., changing the program address), rebuild
anchor build
```

---

## Test Locally with Anchor

In `Anchor.toml`, set:
``` toml
[provider]
cluster = "Localnet"
```

Then run:
```bash
anchor test --provider.cluster Localnet
```

---

## Deploy to Devnet

In `Anchor.toml`:
```toml
[provider]
cluster = "https://api.devnet.solana.com"
```

Deploy:
```bash
anchor deploy
```

## 🧪 CLI Usage

Use CLI scripts to interact with the deployed smart contract.

### 1. Initialize Configuration
```bash 
yarn script config
```

### 2. Launch a Token
```bash
yarn script launch
```

> _More CLI commands (swap, migrate, withdraw) are implemented in code but not exposed in the CLI entrypoint. If you want to use them, extend `cli/command.ts` accordingly._

---

## 🧑‍💻 Contact

For paid development or integration work, feel free to reach out:

- Telegram: [@greenfoxfun](https://t.me/greenfoxfun)
- GitHub: [moonbot777](https://github.com/moonbot777)

Let me know if you want to include badges (e.g., build passing, devnet status), visuals like demo GIFs, or links to example tokens deployed with this contract!

