---
id: intro
sidebar_position: 1
title: README
---

[![npm](https://img.shields.io/npm/v/dbzar)](https://www.npmjs.com/package/dbzar)
[![npm-beta](https://img.shields.io/npm/v/dbzar/beta)](https://www.npmjs.com/package/dbzar)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

- [💻 Install](#-install)
- [👻 Usage](#-usage)
- [✅ Supported Databases](#-supported-databases)
- [⚙ Configuration](#-configuration)
- [📄 API](#-api)
- [🔧 Providers](#-providers)
  - [🎭 Mask](#-mask)
  - [🔀 Scramble](#-scramble)
  - [🍀 Fake](#-fake)
  - [Future Support](#future-support)

**DBZar** (Database + "stranger" in Hebrew) let you mask/scramble/fake fields in any given database, just add a connection string and anonymize away!

Great for:

1. Anonymizing production servers for local development.
2. General utility to manipulate existing databases easily.

## 💻 Install

## 👻 Usage

## ✅ Supported Databases

## ⚙ Configuration

## 📄 API

## 🔧 Providers

### 🎭 Mask

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

1. `fakeValue` - fake value to replace (default: `word`), options:
   1. `age` - age as a number
   2. `animal`
   3. `first` / `firstName`
   4. `last` / `lastName`
   5. `letter` - a single letter
   6. `name` - full name
   7. `word` - random word

### Future Support

- 🧬 `hash` - replace with hash
- 🧊 `const` - replace with constant string/number
- ❌`remove` - remove the field from the table
