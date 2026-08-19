# Dutch auction (TGE)

Primary **AGS issuance** uses an automated **Dutch auction** on Sonic — ask price falls on a published schedule until the window ends or inventory sells out. The sale contract holds **9.5M AGS** of the fixed 21M supply ([full allocation](./tokenomics)); a separate **1.0M** liquidity seed is held outside the auction.

## Status

The auction contract is **deployed** on Sonic mainnet. The sale is **not open** until we announce and start the window on [official channels](../resources/community) — after that, the schedule runs automatically with no manual intervention.

## Mechanics

- **Linear price decay** over the sale window
- **Fill price** = spot at your transaction confirmation (not uniform clearing)
- **Payment rails** — native S, wS, USDC, USDT, EURC, WETH (per sale app config)

## User flow

1. Wait for official window announcement on [community channels](../resources/community).
2. Open [tge.aegisprotocol.org](https://tge.aegisprotocol.org).
3. Verify the auction contract address matches our [verified contracts registry](../contracts) (and the announcement thread).
4. Connect wallet on Sonic; pay per UI quotes.
5. Receive AGS per auction rules.

## Post-sale

Liquidity seed and canonical swap routing activate per governance — not on an undisclosed admin schedule.

::: danger Copycat contracts
Scammers deploy fake “AGS” and fake auctions. Only trust addresses from our official channels in the announcement thread.
:::
