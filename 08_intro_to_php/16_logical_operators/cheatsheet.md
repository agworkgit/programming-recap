# PHP Logical Operators Cheatsheet

PHP uses logical operators to combine or invert boolean expressions. They're commonly used in conditional statements like `if`, `while`, and `switch`.

---

## 1. **AND (`&&`)**

Returns true if both operands are true.

```php
$a = true;
$b = true;
var_dump($a && $b); // true

$a = true;
$b = false;
var_dump($a && $b); // false
```

> ✅ Used to check that **all** conditions must be met.

---

## 2. **OR (`||`)**

Returns true if at least one operand is true.

```php
$a = true;
$b = false;
var_dump($a || $b); // true

$a = false;
$b = false;
var_dump($a || $b); // false
```

> ✅ Used to check that **at least one** condition must be met.

---

## 3. **NOT (`!`)**

Inverts the boolean value of an expression.

```php
$a = true;
var_dump(!$a); // false

$a = false;
var_dump(!$a); // true
```

> ✅ Used to negate a condition (e.g., "if not logged in").

---

## 4. **XOR (`xor`)**

Returns true if exactly one operand is true — not both.

```php
$a = true;
$b = false;
var_dump($a xor $b); // true

$a = true;
$b = true;
var_dump($a xor $b); // false
```

> ⚠️ Rarely used in practice unless you need **exclusive** conditions.

---

## 5. **Logical AND (also `and`)**

Same as `&&`, but has lower precedence than `=` and other operators — use with caution.

```php
$a = true;
$b = false;
var_dump($a and $b); // false

// Avoid this unless you're intentionally overriding operator precedence.
```

> ⚠️ **Avoid** using `and` in complex expressions where order of operations matters. Use `&&` instead for safety.

---

## 6. **Logical OR (also `or`)**

Same as `||`, but has lower precedence than `=` and other operators — use with caution.

```php
$a = false;
$b = true;
var_dump($a or $b); // true

// Avoid this unless you're intentionally overriding operator precedence.
```

> ⚠️ **Avoid** using `or` in complex expressions where order of operations matters. Use `||` instead for safety.

---

## Summary Table

| Operator | Description                            |
| -------- | -------------------------------------- |
| `&&`     | Logical AND (both must be true)        |
| `\|\|`   | Logical OR (at least one must be true) |
| `!`      | Logical NOT (inverts a boolean)        |
| `xor`    | Logical XOR (exactly one is true)      |
| `and`    | Same as `&&`, but lower precedence     |
| `or`     | Same as `\|\|`, but lower precedence   |

---

## Notes:

- Use `&&` and `||` instead of `and`/`or` in complex conditions to avoid unexpected behavior due to operator precedence.
- Logical operators are essential for building conditional logic, especially when combining multiple checks (e.g., login validation).
- Avoid overusing logical operators in a single condition — break it down into smaller parts if needed.
