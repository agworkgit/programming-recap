# Programs manipulate DATA OBJECTS
# OBJECTS have a TYPE that defines the kinds of things programs can do to them.
# 30
# Is a number (integer)
# We can add/sub/mult/div/exp/etc...
# 'Joe'
# Is a sequence of chars (aka a string)
# We can grab substrings, but can't divide it by a number

# OBJECTS
# Scalar (cannot be subdivided)
# Numbers: 8.3, 2
# Truth value: True, False
# Non-scalar (have internal structure that can be accessed)
# Lists
# Dictionaries
# Sequence of characters: "abc"

# SCALAR OBJECTS
# int - represents integers, e.g. 5, -100, etc...
# float - represents real numbers, e.g. 3.27, 2.0...
# bool - represents Boolean values, True and False
# NoneType - sepcial and has one value, None
# Can use type() to see the type of an object

# TYPE CONVERSIONS (TYPE CASTING)
# Can convert OBJECT of one type to another
# float(3) casts the int 3 to float 3.0
# int (3.9) casts (note the truncation!) the float 3.9 to int 3
# Some operations perform implicit casts
# round(3.9) returns int 4

# EXPRESSIONS
# Combine objects and operators to form expressions
# 3 + 2
# 5 / 3
# An expression has a VALUE, which has a type
# 3 + 2 has value 5 and type int
# 5 / 3 has a value of 1.666667 and type float
# Python evaluates expressions and stores the value. It does not store expressions!
# Syntax for a simple expression: <object> <operator> <object>

# BIG IDEA
# Replace complex expressions by ONE value
# Work systematically to evaluate the expression

# OPERATORS on int and float
# i + j -> the sum
# i - j -> the difference
# i * j -> the product
# i / j -> division (results in float, always)
# i // j -> floor division (truncates result)
# i % j -> the remainder when i is divided by j
# i ** j -> i to the power of j

# VARIABLES
# Computer science variables are DIFFERENT than math variables
# Math variables
# Abstract
# Can represent many values
# a + 2 = b - 1
# x * x = y
# CS variables
# Is bound to one single value at a given time
# Can be bound to an expression (but expressions evaluate to one value!)
# a = b + 1
# m = 10, F = m * 9.98

# BINDING VARIABLES to VALUES
# In CS, the equal sign is an ASSIGNMENT
# One value to one variable
# Equal sign is not equality, not "solve for x"
# An assignment binds a value to a name

# Step 1: Compute the value on the right hand side (the VALUE)
# Value stored in computer memory
# Step 2: Store it (bind it) to the left hand side (the VARIABLE)
# Retrieve value associated with name by invoking the name (typing it out)

# ABSTRACTING EXPRESSIONS
# Why give names to values of expressions?
# To reuse names instead of values
# Makes code easier to read and modify
# Choose variable names wisely
# Code needs to be readable
# Today, tomorrow, next year
# By you and others
# You'll be fine if you stick to letters, underscores, don't start with a number

# Compute approximate value of PI
pi = 355 / 113
radius = 2.2
area = pi * (radius**2)
circumference = pi * (radius * 2)
print(pi, radius, area, circumference)

# CHANGE BINDINGS
# Can re-bind variable names using new assignment statements
# Previous value may still be stored in memory but lost the handle for it

# BIG IDEA
# Lines are evaluated one after the other
# No skipping around, yet

meters = 100
feet = 3.2808 * meters
print(feet)  # 328.08
meters = 200

# pythontutor.com is a useful tool for debugging and checking code execution line by line

x = 1
y = 2

temp = y
y = x
x = temp

print(x, y)
