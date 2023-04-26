---
sidebar_position: 2
---

# Expressions

Mobirise utilise Rivet.js to

The expressions work in interpolation of values, directives and `conditions` within parameters (check the 'Interpolation in attributes' section). The expressions are the same as in ECMAScript (JavaScript), but they have some extra features:

- The context is only local: there are no variables except for the ones declared in the parameters.
- A tolerance to non-declared variables: the script does not fail if there is no variable or value.
- There is a filter support (not maintained?).
- Assigning values is not allowed.
- Square brackets are not allowed - item['name'] or even item[0] (it can work in RivetsJS).
- Using of loops, conditionals and exceptions is not allowed.
- Declaring functions isn't allowed.
- Using of RegExp with literal notation isn't allowed.
- Creating objects using the new operator isn't allowed.
- Using of bitwise-operators, the , operator or void isn't allowed.
