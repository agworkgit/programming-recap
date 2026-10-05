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
# out_of_bounds = s[3]  # error
first_from_last = s[-1]  # c
second_from_last = s[-2]  # b
third_from_last = s[-3]  # a

# SLICING to get a SUBSTRING

## Can slice strings using [start:stop:step]
## Get characters at START up to and including STOP-1 taking every STEP characters
## If you give two numbers, [start:stop], step = 1 by default
## If you give one number, you are back to indexing from the character at one location
## You can also omit numbers and leave just colons

demo_str = "I love walking with my dog"
demo_substr = demo_str[2:6]  # STOP is up to but not including 6
# same as demo_str[2:6:1]

demo_substr_double = demo_str[:]  # same as demo_str[0:len(demo_str):1]
demo_substr_reverse = demo_str[::-1]  # eveluates to a reversed string of the original
demo_substr_mod = demo_str[4:1:-2]  # evaluates to 'vl'

# IMMUTABLE STRINGS

## Strings are IMMUTABLE - cannot be modified once they are created
## You can create NEW OBJECTS that are versions of the original one
## Variable names can only be bound to ONE OBJECT

demo2 = "car"
# demo2[0] = "b" # gives and error
demo2 = "b" + demo2[1 : len(demo2)]  # is allowed, demo2 gets bound to a new object
# print(demo2) # "bar"

# BIG IDEA
## If you are wondering "what happens if..."
## Just try it out in the console!

# INPUT / OUTPUT

# PRINTING
## Used to OUTPUT results to the console
## Command is 'print'
## Printing many objects in the same command
### Separate objects using commas to output them separated by spaces
### Concatenate strings toghether using + to print as a single object

a = "the"
b = 3
c = "musketeers"
print(a, b, c)  # the 3 musketeers
print(a + str(b) + c)  # the3musketeers
