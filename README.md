<h1 align="center">DBZar</h1>
<h2 align="center">Agnostic DB Anonymizer 🔁👻</h2>
<div align="center">

[![npm](https://img.shields.io/npm/v/dbzar)](https://www.npmjs.com/package/dbzar)
[![npm-beta](https://img.shields.io/npm/v/dbzar/beta)](https://www.npmjs.com/package/dbzar)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

- [💻 Install](#-install)
- [👻 Usage](#-usage)
  - [`anon-col` : anonymize a single column in a table](#anon-col--anonymize-a-single-column-in-a-table)
  - [`anon-db`: anonymize entire database (future Version)](#anon-db-anonymize-entire-database-future-version)
- [✅ Supported Databases](#-supported-databases)
- [🔧 Providers](#-providers)
  - [🎭 Mask](#-mask)
  - [🔀 Scramble](#-scramble)
  - [🐱‍👤 Fake](#-fake)
  - [Future Support](#future-support)

<br/>

**DBZar** (Database + "stranger" in Hebrew) let you mask/scramble/fake fields in any given database, just add a connection string and anonymize away!

Great for:

1. Anonymizing production servers for local development.
2. General utility to manipulate existing databases easily.

## 💻 Install

```
npm i --save-dev dbzar
// OR
yarn add -D dbzar
// OR
npx dbzar
```

## 👻 Usage

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

### `anon-db`: anonymize entire database (future Version)

1. Create Configuration file:

```yaml
// dbzar.config.yml
tables:
    - name: users
      columns:
        - name: name
          provider: fake
          options: { fakeValue: name }
        - name: email
          provider: mask
          options: { exclude: '@', excludeEnd: 4, excludeStart: 3}
        - name: password
          provider: const
          options: { value: "REMOVED!"}
    - name: products
      columns:
        - name: productName
          provider: fake
          options: { fakeValue: alphaNumeric, min: 5, max: 10 }
        - name: price
          provider: random_number
          options: { min: 100, max: 999 }

```

1. Run the anonymizer

```
// postgres
npx dbzar anon-db postgresql://example:example@localhost test2

// mongo
npx dbzar anon-db mongodb://example:example@mongo:27017 test1
```

## ✅ Supported Databases

1. MongoDB
2. Postgres
3. MariaDB
4. MySQL

- Future support
  - SQLIte
  - CSV

## 🔧 Providers

### 🎭 Mask

Replaces some/all characters

Options:

1. `character` - charcter to replace (default `*`)

### 🔀 Scramble

Change the order randomly

### 🐱‍👤 Fake

Generates fake data

Options:

1. `fakeValue` - fake value to replace (default: random word)

### Future Support

- `hash` - replace with hash
- rock `const` - replace with constant string/number
- `remove` - remove the field from the table
