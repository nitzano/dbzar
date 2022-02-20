<h1 align="center">DBZar</h1>
<h2 align="center">🔁👻 Agnostic DB Anonymizer </h2>
<div align="center">

[![npm](https://img.shields.io/npm/v/dbzar)](https://www.npmjs.com/package/dbzar)
[![npm-beta](https://img.shields.io/npm/v/dbzar/beta)](https://www.npmjs.com/package/dbzar)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

- [⭐ Highlights](#-highlights)
- [📃 Documentation](#-documentation)
- [💻 Install](#-install)
- [👻 Basic Usage](#-basic-usage)
  - [`anon-col` : anonymize a single column in a table](#anon-col--anonymize-a-single-column-in-a-table)
  - [`anon-db` : anonymize entire database](#anon-db--anonymize-entire-database)
- [✅ Supported Databases](#-supported-databases)

<br/>

**DBZar** (Database + "stranger" in Hebrew) let you mask/scramble/fake fields in any given database, just add a connection string and anonymize away!

Great for:

1. Anonymizing production servers for local development.
2. General utility to manipulate existing databases easily.

## ⭐ Highlights

- One line [command line](https://nitzano.github.io/dbzar/docs/usage) tool (CLI).
- [Supports](https://nitzano.github.io/dbzar/docs/supported_dbs) most common databases.
- Works on both single columns and entire databases.
- Can manipulate data in many ways: masking, scrambling, faking and more.
- Can be used as an [API](https://nitzano.github.io/dbzar/docs/api).
- Highly [Configurable](https://nitzano.github.io/dbzar/docs/config) (`dbar.config.js`).

## 📃 Documentation

See the full documentation here: [Documentation](https://nitzano.github.io/dbzar/).

## 💻 Install

```
npm i --save-dev dbzar
// OR
yarn add -D dbzar
// OR
npx dbzar
```

## 👻 Basic Usage

### `anon-col` : anonymize a single column in a table

(⚠ Changes whichever db provided so use with caution)

```bash
Usage: dbzar anon-col <provider> [options] <uri> <db> <table> <column>
```

```
// postgres
npx dbzar anon-col mask postgresql://example:example@localhost test users firstName
// { "firstName": "John" } => { "firstName": "****" }

// mongo
npx dbzar anon-col scramble mongodb://example:example@localhost test users firstName
// { "firstName": "John" } => { "firstName": "nhJo" }
```

### `anon-db` : anonymize entire database

```
Usage: dbzar anon-db [options] [uri]
```

1. Create Configuration file (see [Configuration](https://nitzano.github.io/dbzar/docs/config))

2. Run the anonymizer

```
yarn dbzar anon-db mongodb://example:example@localhost
```

## ✅ Supported Databases

1. MongoDB
2. Postgres
3. MariaDB
4. MySQL

Future support:

- SQLite
- Neo4J
- CSV
