# Security

## Before you trust anything

1. **Bytecode** — SonicScan **Exact Match** vs addresses on [verified contracts](../contracts).
2. **Addresses** — registry + signed release; ignore chat screenshots.
3. **Signatures** — `CHECKSUMS.sha256.sig` with `RELEASE_SIGNING_KEY.pem`.
4. **Origins** — only `app.aegisprotocol.org` and `tge.aegisprotocol.org`.

## Threat model (short)

| Risk | What we do / what you do |
|------|--------------------------|
| Fake tokens / auctions | Official announcements only; AGS not live until we say so |
| Phishing sites | Bookmark official URLs |
| Malicious relayers | You sign intents; pick relayers carefully |
| RPC snooping | Use RPC you trust |
| Circuit drift | Verifier upgrades go through timelock |

## Reporting

Use `SECURITY.md` in the public GitHub tree. Do not drop exploitable bugs in Telegram first.

## Audits

Reports ship with releases when available.
