# Privacy model

**Selective privacy:** hide balances and flows inside the shielded set by default; disclose what *you* choose.

## What is protected vs visible

| Protected (ZK path) | Still visible |
|---------------------|---------------|
| Shielded amounts | Block time, gas payer |
| Sender ↔ receiver link inside the set | Public pool reserves |
| Vote choice (shielded tally modes) | Contract addresses you touch |
| Claim eligibility details | Relayer endpoint if you use one |

## Shielded set

1. **Shield** visible AGS into a commitment.
2. **Transfer** inside the set without publishing endpoints.
3. **Unshield** when you need a transparent address.

When public entry is off, you use **Privacy entry** with EIP-712 intents — optionally relayed so someone else pays gas.

## Local secrets

- Witness material stays in the browser unless you pick another path.
- Optional **commitment vault** encrypts UX cache (AES-GCM); unlock is per session.
- Remote provers are optional — local browser proving exists when enabled.

## Fingerprinting

Session IDs and analytics are off by default in the live app. Privacy-heavy routes do not load third-party widgets.

## Reality check

A public chain always leaks *something* — timing, gas patterns, RPC metadata. Privacy tech cuts linkability; it is not magic invisibility.

::: warning
Groth16 reduces who can read your graph. It does not guarantee anonymity against a global passive adversary.
:::
