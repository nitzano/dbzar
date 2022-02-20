---
sidebar_position: 1
sidebar_label: 🎭 Mask
---

# Mask

Mask let you mask some or all of the fields in a given column.
It does the following:

1. strings - Masks word with the same character
2. numbers - does nothing
3. boolean - does nothing

## Options

1. `character` (string) - Replacing character (default `*`).
2. `excludeStartCount` (number) - exclude N characters from the beginning.
3. `excludeEndCount` (number) - exclude N characters from the end of the string.
4. `excludeChars` (array of strings) - exclude the following characters from masking.

## Examples

Default options

```
{ 'firstName': 'John'} => { 'firstName': '****'}
```
