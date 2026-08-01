# Sonic network

Aegis settles on **[Sonic](https://docs.soniclabs.com/)** — an EVM L1 with sub-second finality. Fast chain; private DeFi on top.

## Network card

| Field | Mainnet |
|-------|---------|
| Network name | Sonic |
| Chain ID | `146` |
| RPC URL | `https://rpc.soniclabs.com` |
| Explorer | [sonicscan.org](https://sonicscan.org) |
| Gas token | **S** |

## Why Sonic

- Confirmations in under a second — DeFi that feels alive.
- Full EVM — same Solidity mental model you already know.
- Fee monetization for apps that actually drive usage ([Sonic docs](https://docs.soniclabs.com/)).

## Bridging in

Come from Ethereum via the official **Sonic Gateway**. The app’s [Bridge](https://app.aegisprotocol.org/bridge) wraps that flow. After assets land: shield, swap, govern.

::: tip
Only use gateway addresses from Sonic’s own docs. “Fast bridge” links in DMs are how people lose funds.
:::

## Wallets

Any EVM wallet that can add a custom chain works (MetaMask, Rabby, …). Chain ID **146**, RPC above. The app will nag you to switch if you are on the wrong network.

## Contracts

Canonical addresses with SonicScan **code** links: **[Verified contracts](./contracts)**. Do not trust random explorer search hits named “Aegis.”

::: warning
Token lists and “official AGS” contracts that did not come from [community](./resources/community) or the [registry](./contracts) are noise until proven otherwise.
:::
