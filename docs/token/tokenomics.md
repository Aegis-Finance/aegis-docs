# Tokenomics

Fixed **21,000,000 AGS** cap — full supply is created once at genesis. There is no inflationary mint path after deployment.

## Genesis allocation (mainnet)

Fixed **21,000,000 AGS** cap — full supply is created once at genesis. There is no inflationary mint path after deployment.

| Location | AGS | Role |
|----------|-----:|------|
| **AutomatedDutchAuction** (public sale) | 9.5M | Sellable Dutch-auction inventory — sale opens only when announced ([Dutch auction](./dutch-auction)) |
| **Liquidity seed vault** | 1.0M | Uniswap / public-pool bootstrap budget (not mixed on the auction) |
| **GovernanceTreasury** (ecosystem / DAO) | 6.3M | DAO-controlled budget — incentives and programs via governance (not pre-drained at genesis) |
| **Treasury wallet** (ops / deployer cut) | 4.2M | Protocol operations wallet from `TokenAllocation` — not used to fund the auction |
| **Total** | **21.0M** | |

The on-chain `TokenAllocation` contract uses **50% / 30% / 20%** (10.5M public = 9.5M sale + 1.0M liquidity, 6.3M ecosystem, 4.2M treasury). No team or founder carve-out.

::: tip Verify addresses
Match the [verified contracts](../contracts) page on SonicScan before sending funds — especially the [Dutch auction](./dutch-auction).
:::

::: info DAO budget policy
The 6.3M ecosystem sink stays whole at genesis. Later program splits (gauges, insurance, grants) happen only through governance — see operator note `Aegis-contracts/docs/ops/DAO_ECOSYSTEM_BUCKETS.md` in the monorepo.
:::

## After TGE

- Liquidity seed on public pairs and Uniswap (from the **1.0M** vault + sale proceeds per [auction rules](./dutch-auction))
- LP mining from **governance-voted** gauge budgets — not open-ended inflation
- Treasury bonds and allocator policy via governance votes

## What we skip here

Private vesting side letters and market-maker deals are not published on this site. On-chain allocation is what counts.
