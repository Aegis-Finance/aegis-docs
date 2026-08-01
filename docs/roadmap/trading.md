# Trading & DEX

Where swap and liquidity stand on Sonic today — and what we are shipping next.

## Live now

| Capability | What you get |
|------------|--------------|
| **Public AGS / S pool** | Swap and provide liquidity in the app. Reserves are visible on SonicScan. |
| **PrivateAMM (on-chain)** | Proof-backed private path is deployed and verified. Pool depth stays public; proofs gate policy, not hidden reserves. |
| **Limit & RFQ settlement** | Escrow sells, signed limit orders, and one-shot RFQ contracts are live on Sonic. |

Open the app: [Swap](https://app.aegisprotocol.org/swap) · [Liquidity](https://app.aegisprotocol.org/liquidity)

## In progress

| Focus | What we are finishing |
|-------|------------------------|
| **More public pairs** | Seeding USDC, USDT, WETH, and related pools so depth is not AGS/S-only. |
| **Smart routing** | Best quote across allowlisted pools in the app (router is on-chain; wiring and pool coverage are active work). |
| **PrivateAMM in product** | End-to-end proof UX, prover reliability, and clear labeling in Swap. |
| **Limits & RFQ in the app** | Surfaces to create, fill, and manage orders on top of the live settlement contracts. |

## Next up

| Focus | Notes |
|-------|--------|
| **ZK-wrapped advanced execution** | Confidential size / path where circuits and audits justify it. |

Broader protocol and commerce horizons (high level only): [2026–2030 phases](./phases).

## How we talk about privacy

- **Public pools** — full transparency on SonicScan.
- **PrivateAMM** — proofs gate **policy**, not hidden liquidity.
- We label each path clearly so you always know what explorers can see.

## Risks (plain language)

Public paths can face MEV. Limits and TWAP-style triggers need careful oracles. More venues can split liquidity until routing and incentives catch up — we ship each step with clear explorer visibility.
