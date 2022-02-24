<h1 align="center">DBZar</h1>
<div align="center">
<img src="https://raw.githubusercontent.com/nitzano/dbzar/master/website/static/img/logo.svg" height="120">
</div>
<h2 align="center">Agnostic DB Anonymizer </h2>
<div align="center">
<br/>

[![npm](https://img.shields.io/npm/v/dbzar)](https://www.npmjs.com/package/dbzar)
[![npm-beta](https://img.shields.io/npm/v/dbzar/beta)](https://www.npmjs.com/package/dbzar)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Repo stars](https://img.shields.io/github/stars/nitzano/dbzar?style=social)](https://github.com/nitzano/dbzar/stargazers)

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

- Single line [command line](https://nitzano.github.io/dbzar/docs/usage) tool (CLI).
- [Supports](https://nitzano.github.io/dbzar/docs/supported_dbs) many databases out of the box.
- Works on both single columns and entire databases.
- Can manipulate data by masking, scrambling, faking and more.
- Full [API](https://nitzano.github.io/dbzar/docs/api) support (Typescript).
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
Usage: dbzar anon-col [options] [command]

Anonymize a single column in a table

Options:
  -skip --skip-confirm  skip confirmation
  -u --uri              Connection string
  -db --database        Database name
  -t --table            Table name
  -c --column           Column name
  -h, --help            display help for command

Commands:
  scramble [options]    scramble a single column
  fake [options]        fake a single column
  mask [options]        mask a single column
  help [command]        display help for command
```

```
// mask "firstName" in postgres
dbzar anon-col mask postgresql:/localhost test users firstName
// { "firstName": "John" } => { "firstName": "****" }

// scramble "lastName" in mongo
dbzar anon-col scramble mongodb://localhost test users lastName
// { "lastName": "Smith" } => { "firstName": "hSmti" }
```

### `anon-db` : anonymize entire database

```
Usage: dbzar anon-db [options] [uri]
```

1. Create Configuration file (see [Configuration](https://nitzano.github.io/dbzar/docs/config))

Example:

```yaml
// .dbzarrc
dbName: db1
tables:
  - name: users
    columns:
      - name: firstName
        provider: mask
      - name: lastName
        provider:
          type: mask
          options:
            character: "#"
  - name: products
    columns:
      - name: name
        provider:
          type: fake
          options:
            fakeValue: animal
```

2. Running the anonymizer

```
dbzar anon-db mongodb://example:example@localhost
```

Will:

1. `mask` the `firstName` column in `users` table (replacing letters with default `*`).
2. `mask` the `lastName` column in `users` table (replacing letters with `#`).
3. `fake` the `name` column in `products` table (replacing it with a random animal name, for example: "Fish").

## ✅ Supported Databases

1. MongoDB
1. Postgres
1. MariaDB
1. MySL

Future support:

- SQLite
- Neo4J
- CSV
