# Overview

Aegis is **private finance on Sonic** — not a one-trick mixer. Shielded balances plug into swaps, lending, insurance, governance, and treasury tools under one grammar.

## Who it is for

| You | What you get |
|-----|--------------|
| **Users** | Shield, trade, borrow, stake, vote — without broadcasting every hop |
| **Builders** | Modular contracts + governed authorization |
| **Auditors** | Open tree, signed releases, on-chain verifiers |
| **Institutions** | Selective disclosure when you must prove something without dumping the whole graph |

## Design principles

1. **Privacy by default** — commitments unless you choose transparent rails.
2. **Rules in bytecode** — premiums, liquidations, auction clocks, governance delays.
3. **No custodial core** — apps do not hold your keys; relayers only submit what you signed.
4. **Honest labels** — public pools stay public on SonicScan; PrivateAMM proofs gate policy, not fantasy hidden reserves.

## Stack (mental model)

```text
Wallet (+ optional local prover)
        ↓
Sonic RPC
        ↓
AGS ledger (visible + shielded)
        ↓
Verifier factory (Groth16)
        ↓
Modules (swap, lend, stake, govern, auction, …)
        ↓
Privacy entry when public entry is gated
```

## Looking ahead

We keep deepening markets and privacy defaults on Sonic. We do not dump every future product here — see [Roadmap](./roadmap/) and [Community](./resources/community).
