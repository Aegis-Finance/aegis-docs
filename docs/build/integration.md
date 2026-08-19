# Integration

For builders wiring products into Aegis on Sonic — still user-facing contracts, not a hosting tutorial.

## Chain

| Field | Mainnet |
|-------|---------|
| Chain ID | `146` |
| RPC | `https://rpc.soniclabs.com` |
| Explorer | `https://sonicscan.org` |

## Reading state

- Prefer an RPC you trust for high-value flows.
- ABIs and address manifests live in [signed releases](../resources/releases).

## Writing transactions

- Users sign. Relayers only submit EIP-712 intents the user already authorized.
- A module must be **authorized** on the shielded token before it can consume commitments.

## Addresses

Use the [verified contracts](../contracts) page and the current signed release. Do not hard-code screenshots from chat.

## Chain pack

The app ships a Sonic chain pack (bridge tokens, gateway hints). It updates with signed releases — treat that as the live map of rails.

## Next

See [Partners](./partners). Serious integrations go through [community channels](../resources/community), not cold DMs.
