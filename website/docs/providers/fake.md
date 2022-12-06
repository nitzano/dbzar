---
sidebar_position: 3
sidebar_label: 🍀 Fake
---

# Fake

Generates fake data instead of the previous value

1. strings - generates fake strings
2. numbers - generates random numbers
3. boolean - generates random boolean

## Options

1. `fakeValue` - fake value to replace (default: `word`), options:
   1. `age` - age as a number
   2. `animal`
   3. `first` / `firstName`
   4. `last` / `lastName`
   5. `letter` - a single letter
   6. `name` - full name
   7. `word` - random word
   8. `email`

## Examples

```
{ 'firstName': 'John'} => { 'firstName': 'Random'}
{ 'email': 'jsmith@business.org'} => { 'email': 'awkir@ptknolyoj.gov'}
```
