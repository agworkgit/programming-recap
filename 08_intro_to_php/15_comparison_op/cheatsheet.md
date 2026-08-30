# PHP Comparison Operators Cheatsheet

PHP has several comparison operators used to compare values. These are often used in conditional statements like `if`, `while`, and `switch`.

---

## 1. **Equality (`==`)**

Checks if two values are equal (type-insensitive).

```php
$a = 5;
$b = "5";
var_dump($a == $b); // true
```

> ⚠️ This is type-insensitive: `5` and `"5"` are considered equal.

---

## 2. **Identity (`===`)**

Checks if two values are equal **and** of the same type.

```php
$a = 5;
$b = "5";
var_dump($a === $b); // false
```

> ✅ Use this when you need strict equality (type and value).

---

## 3. **Inequality (`!=`)**

Checks if two values are not equal (type-insensitive).

```php
$a = 5;
$b = "10";
var_dump($a != $b); // true
```

> ⚠️ Not recommended for strict comparisons.

---

## 4. **Non-identity (`!==`)**

Checks if two values are not equal or of different types.

```php
$a = 5;
$b = "5";
var_dump($a !== $b); // true
```

> ✅ Use this when you need to ensure both value and type differ.

---

## 5. **Greater than (`>`)**

Checks if the left operand is greater than the right.

```php
$a = 10;
$b = 5;
var_dump($a > $b); // true
```

---

## 6. **Less than (`<`)**

Checks if the left operand is less than the right.

```php
$a = 3;
$b = 5;
var_dump($a < $b); // true
```

---

## 7. **Greater than or equal to (`>=`)**

Checks if the left operand is greater than or equal to the right.

```php
$a = 10;
$b = 10;
var_dump($a >= $b); // true
```

---

## 8. **Less than or equal to (`<=`)**

Checks if the left operand is less than or equal to the right.

```php
$a = 5;
$b = 5;
var_dump($a <= $b); // true
```

---

## Summary Table

| Operator | Description                           |
| -------- | ------------------------------------- |
| `==`     | Equal (type-insensitive)              |
| `===`    | Identical (same value and type)       |
| `!=`     | Not equal (type-insensitive)          |
| `!==`    | Not identical (value or type differs) |
| `>`      | Greater than                          |
| `<`      | Less than                             |
| `>=`     | Greater than or equal to              |
| `<=`     | Less than or equal to                 |

---

## Notes:

- Avoid using `==` unless you're certain about the types being compared.
- Use `===` and `!==` for strict comparisons (important in security-sensitive logic).
- These operators work with all data types, including strings, numbers, arrays, objects, etc.
