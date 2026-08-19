# Architecture

Aegis lives on **Sonic mainnet** (chainId **146**). The websites are just front ends. Money, proofs, and rules settle on-chain.

## Layers

| Layer | What it does for you |
|-------|----------------------|
| **Your wallet** | Holds keys; can prove Groth16 witnesses in the browser |
| **Sonic RPC** | Reads state; broadcasts the txs you sign |
| **AGS ledger** | Visible balances + shielded commitments |
| **Verifier factory** | On-chain Groth16 checkers per circuit family |
| **Modules** | Swap, lend, stake, govern, auction, insure, … |
| **Privacy entry** | EIP-712 intents when public shield/transfer is gated |

## User flow

```text
Bridge in (Ethereum → Sonic)
        ↓
Visible balance
        ↓
Shield → commitments
        ↓
Use DeFi (swap, lend, stake, vote, …)
        ↓
Unshield when you need transparent rails
```

## Trading modes (no marketing fog)

| Mode | What SonicScan still sees |
|------|---------------------------|
| **Public AMM** | Reserves, swaps, LP — full glass box |
| **Governed router** | Routed swaps across allowlisted pools |
| **Limit / RFQ** | Escrows and signed intents |
| **PrivateAMM** | Pool depth stays public; proofs gate *policy*, not hidden L1 reserves |

If the explorer can read the pool, we will not call it “private liquidity.”

## Clients

| Client | Job |
|--------|-----|
| [App](https://app.aegisprotocol.org) | Day-to-day DeFi |
| [Token sale](https://tge.aegisprotocol.org) | Dutch auction TGE |
| Native Aegis app | Same stack, local RPC / proving when you want it |
| Sonic extension | Companion where published |

Source + signed releases: [GitHub — Aegis](https://github.com/Aegis-Finance/Aegis).
