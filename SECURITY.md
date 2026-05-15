# Security Policy

## Reporting

Please do not open public issues for security concerns. Contact the project owner privately with a concise description, affected file or URL, and reproduction steps if applicable.

## Public Repository Scope

This repository is a sanitized frontend showcase. It must not contain production secrets, backend source code, admin logic, payment workflows, database access, private deployment configuration, or production Socket.IO server code.

## Before Publishing

- Confirm no `.env` files are committed.
- Confirm no API keys, tokens, passwords, database URLs, private keys, or service-account files are committed.
- Confirm backend, auth, admin, payment, referral, and database code are absent.
- Run a secret scan before every public release.
