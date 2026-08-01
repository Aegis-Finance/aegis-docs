# Wallet

The wallet module is the **privacy entry point** — shield visible AGS into commitments, transfer inside the shielded set, and unshield to transparent addresses.

## What it does

- **Shield** — move from visible ERC-20 balance to a private note.
- **Transfer** — send inside the shielded pool without public `Transfer` events linking sender and receiver.
- **Unshield** — exit to any transparent address you specify.
- **Commitment vault** — optional encrypted local storage for UX rows (unlock per session).

## When to use it

Use the wallet before any module that consumes shielded balances (private swap, lending, governance with shielded votes, etc.).

## Privacy entry

When direct public shielding is disabled by governance, flows route through **PrivacyEntryRouter** with signed intents. Relayers may submit on your behalf for gas abstraction.

## App link

[app.aegisprotocol.org/wallet](https://app.aegisprotocol.org/wallet)
