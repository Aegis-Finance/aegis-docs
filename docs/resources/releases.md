# Releases

Protocol and client releases are **Ed25519-signed** on GitHub.

## Verify

1. Grab the release from [Aegis-Finance/Aegis](https://github.com/Aegis-Finance/Aegis).
2. Check `CHECKSUMS.sha256` against the files on disk.
3. Verify `CHECKSUMS.sha256.sig` with `RELEASE_SIGNING_KEY.pem`.
4. Match app addresses to [verified contracts](../contracts) for Sonic mainnet.

## What is inside

- Contracts + circuits
- Clients (app, token sale, docs, landing)
- Address / verifier bundles for Sonic

## Cadence

We ship when mainnet changes or security fixes land — not on marketing calendars.

::: warning
Unsigned ZIPs and random forks without a matching signature are not Aegis releases.
:::
