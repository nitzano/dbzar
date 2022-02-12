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
  - [`anon-db`: anonymize entire database](#anon-db-anonymize-entire-database)
- [✅ Supported Databases](#-supported-databases)
- [⚙ Configuration](#-configuration)
- [🔧 Providers](#-providers)
  - [🎭 Mask](#-mask)
  - [🔀 Scramble](#-scramble)
  - [🍀 Fake](#-fake)
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

### `anon-db`: anonymize entire database

1. Create Configuration file (see [Configuration](#Configuration))

2. Run the anonymizer

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

## ⚙ Configuration

Create any one of these files:

- `.dbzarrc`
- `.dbzarrc.json`
- `.dbzarrc.yaml`
- `.dbzarrc.yml`
- `.dbzarrc.js`
- `.dbzarrc.cjs`
- `dbzar.config.js`
- `dbzar.config.cjs`

Example config:

```yaml
// .dbzarrc
name: db1
columns:
  - table: users
    name: firstName
    provider: mask
  - table: users
    name: lastName
    provider:
      type: mask
      options:
        character: "#"
  - table: products
    name: name
    provider: fake
  - table: products
    name: price
    provider: random_number
      options: { min: 100, max: 999 }

```

## 🔧 Providers

### 🎭 Mask

```
{ 'firstName': 'John'} => { 'firstName': '****'}
```

1. strings - Masks word with the same character
2. numbers - does nothing
3. boolean - does nothing

Options:

1. `character` - Replacing character (default `*`).
2. `excludeStart` - do not mask X chars from start.
3. `excludeEnd` - do not mask X chars from end.
4. `excludeCharacters` - do not mask these characters.

### 🔀 Scramble

```
{ 'firstName': 'John'} => { 'firstName': 'ohJn'}
```

Changes the word order randomly

1. strings - scrambles characters
2. numbers - scrambles digits
3. boolean - generates random boolean

### 🍀 Fake

```
{ 'firstName': 'John'} => { 'firstName': 'Random'}
```

Generates fake data

1. strings - generates fake strings
2. numbers - generates random numbers
3. boolean - generates random boolean

Options:

1. `fakeValue` - fake value to replace (default: random word)

### Future Support

- 🧬 `hash` - replace with hash
- 🧊 `const` - replace with constant string/number
- ❌`remove` - remove the field from the table
