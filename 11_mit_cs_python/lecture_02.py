# STRINGS, INPUT/OUTPUT, and BRANCHING

## RECAP

### OBJECTS
#### Objects in memory have types.
#### Types tell Python what operations you can do with the objects.
#### Expressions evaluate to a value, and involve objects and operations.
#### Variables bind names to objects.
#### = sign is an assignment, e.g. result = type(5*4)

### PROGRAMS
#### Programs only do what you tell them to do.
#### Lines of code are executed in order.
#### Good variable names and comments help you read code later.

## STRINGS

### Think of a str as a sequence of case sensitive characters.
#### Letters, special characters, spaces, digits
### Enclosed in quotation marks or single quotes
#### Just be consistent about the quotes
#### a = "me"
#### z = 'you'
### Concatenate and repeat strings
a = "me"
b = "myself"
c = a + b  # memyself
d = a + " " + b  # me myself
silly = a * 3  # mememe

b = ":"
c = ")"
s1 = b + 2 * c  # :))
f = "a"
g = " b"
h = "3"
s2 = (f + g) * int(h)  # a ba ba b

## STRING OPERATIONS

### len() is a function used to retrieve the LENGTH of a string in the parentheses.
s = "abc"
chars = len(s)  # 3

## SLICING to get ONE CHARACTER IN A STRING

### Square brackets are used to perform INDEXING into a string to get the value at a certain index/position.
s = "abc"
first = s[0]  # a
second = s[1]  # b
third = s[2]  # c
out_of_bounds = s[3]  # error
first_from_last = s[-1]  # c
second_from_last = s[-2]  # b
third_from_last = s[-3]  # a
