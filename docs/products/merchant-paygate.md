# Merchant paygate

**Status: on roadmap — ready to ship after core TGE stabilizes.**

Non-custodial **invoice checkout** for Sonic-native assets: merchants create invoices server-side, buyers pay via a public link, merchants receive webhooks on settlement.

## What merchants get

- REST API: create invoice, poll status, configure webhook secret
- Public pay page: `/pay/{invoiceId}` (domain TBD at launch)
- On-chain `InvoicePaid` (or shielded nullifier match) as source of truth

## What we do differently

| Typical custodial checkout | Aegis paygate |
|---------------------------|---------------|
| Platform holds funds | Settlement to merchant address or commitment |
| “Trust our dashboard” | Verifiable chain events + optional ZK path |
| Card / fiat matching | Sonic assets (S, wS, stables) |

## Privacy default

**Shielded transfer** as the default payer path; transparent fallback for merchants who need ERC-20 accounting.

## What is not public yet

Full API schemas and webhook signing details ship with merchant beta. This page is the intent — not a copy-paste server kit.

## Announcements

Follow [community](../resources/community) for beta access. We will not DM you first.
