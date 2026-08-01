# Zero-knowledge

Aegis uses **Groth16** SNARKs. Modules call on-chain verifiers from the factory. Circuits are Circom; proving keys ship with signed public releases.

## Circuit families (names you will see)

| Family | Typical use |
|--------|-------------|
| Mint / shield | Visible → commitment |
| Shielded transfer | Move value inside the set |
| Unshield | Commitment → transparent address |
| Auction | ZK-bound Dutch purchase |
| Private AMM | Policy-gated pool ops |
| Lending | Collateral / tenor proofs |
| Governance | Shielded vote payloads |
| Insurance | Claim eligibility without dumping PII on-chain |

Exact verifier IDs live in the **signed release** so this page does not go stale.

## How you prove

| Path | Trade-off |
|------|-----------|
| **Browser wasm** | You prove locally — more CPU, less trust in a third party |
| **Remote prover** | Snappier UX — the prover sees the witness |

The app shows which path is active. Large moves: prefer local proving or a prover you run.

## What ZK does *not* do

- Hide public pool reserves on Sonic.
- Erase mempool ordering.
- Replace KYC/AML where the law applies.

## Upgrades

New proving versions go through **governance + timelock**. Before large transfers, use a current signed app and match addresses on [verified contracts](../contracts).
