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

# INPUT
## x = input(s)
### Prints the value of the string 's'
### User types in something and hits enter
### That value is assigned to the variable 'x'
## Binds that value to a variable

text = input("Type anything: ")
print(5 * text)

## 'input' always returns a 'str' type, must cast if working with numbers!

num1 = input("Type a number: ")
print(5 * num1)  # "33333"

num2 = int(input("Type a number: "))
print(5 * num2)  # 15

# YOU TRY IT
## Write a program that:
## * Asks the user for a verb.
## * Prints "I can ___ better than you" where you replace the missing word with the verb.
## * Then print the verb 5 times in a row separated by spaces.

prompt_user = input("Type a verb: ")
print(f"I can {prompt_user} better than you")
mock = (prompt_user + " ") * 5
print(mock[0 : len(mock) - 1])

# AN IMPORTANT ALGORITHM: NEWTON'S METHOD
## Finds roots of a polynomial
### e.g., find 'g' such that f(g,x) = g^3-x = 0
## The algorithm uses successive approximation
### next_guess = guess - f(guess)/f'(guess)
## Partial code of the algorithm that gets input and finds next guess

# Try Newton Raphson for cube root
x = int(input("What x to find the cube root of?: "))
g = int(input("What guess to start with?: "))
print("Current estimated cubed = ", g**3)

next_g = g - ((g**3 - x) / (3 * g**2))
print("Next guess to try = ", next_g)

# CONDITIONS for BRANCHING

## BINDING VARIABLES and VALUES
### In CS, there are two notions of equal
#### Assignement, and Equality test

## variable = value
### Change the stored value of variable to value
### Nothing for us to solve, computer just does the action

## some_expression == other_expression
### TEST FOR EQUALITY
### No binding is happening
### Expressions are replaced by values and the computer just does the comparison
### Replaces the ENTIRE LINE with 'True' or 'False'

# COMPARISON OPERATORS
## i and j are variable names
### They can be of type int, float, string, etc..
## Comparisons below evaluate to the type Boolean
### The Boolean type only has 2 values: 'True' or 'False'

### i > j
### i >= j
### i < j
### i <= j
### i == j --> EQUALITY TEST, True if i is the same as j
### i != j --> INEQUALITY TEST, True if i is not the same as j

# LOGICAL OPERATORS on bool

## 'a' and 'b' are variable names (with Boolean values)
### 'not a' -> True if 'a' is False, False if 'a' is True
### 'a and b' -> True if both are True
### 'a or b' -> True if either or both are True

## COMPARISON EXAMPLES
pset_time = 15
sleep_time = 8
print(sleep_time > pset_time)  # False
derive = True
drink = False
both = drink and derive
print(both)  # False

## YOU TRY IT
### Write a program that:
### * Saves a secret number in a variable
### * Asks the user for a number to guess
### * Prints a bool False or True depending on whether the matches the secret.

user_guess = int(input("Guess the number: "))
secret_num = 5
print(f"Your guess was {user_guess == secret_num}")

# WHY bool?

## When we get to control flow, e.g. branching to different expressions based on values
## We need a way of knowing if a condition is True
## e.g. if something is True, do this, otherwise do that

# BRANCHING in Python

## if <condition>:
##        <code>
##        <code>
##        .....
## <rest of program>

## <condition> has a value of True or False
## INDENTATION MATTERS in Python!
## Execute the code in the 'if block' if condition is True

## We can also decide what to do if the condition is not True with the 'else' branch

## if <condition>:
##        <code>
##        <code>
## else:
##        <code>
##        <code>
## <rest of program>

## We can also check more than just one or two conditions with 'elif' after 'if' and before 'else'

## if <condition>:
##        <code>
##        <code>
## elif <condition>:
##        <code>
##        <code>
## else:
##        <code>
##        <code>
## <rest of program>

# YOU TRY IT
## * Semantic structure matches visual structure
## * Fix this buggy code (hint, it has bad indentation!)

x = int(input("Enter a number for x: "))
y = int(input("Enter a different number for y: "))
if x == y:
    print(x, "is the same as", y)
    print("These are equal!")

# INDENTATION and NESTED BRANCHING

## Matters in Python
## It's how you DENOTE BLOCKS OF CODE

x = float(input("Enter a number for x: "))
y = float(input("Enter a number for y: "))
if x == y:
    print("x and y are equal")
    if y != 0:
        print("therefore, x/y is ", x / y)
elif x < y:
    print("x is smaller")
else:
    print("y is smaller")
print("thanks!")

# BIG IDEA
## Practice will help you build a mental model of how to trace the code
## Indentation does a lot of the work for you!

# YOU TRY IT
## * Write a program that:
## * Saves a secret number
## * Asks the user for a number guess
## * Prints whether the guess was too low, too high, or the same as the secret number

ask = int(input("What is your number guess? "))
secret_num = 3
if ask == secret_num:
    print("That's it, your guess is equal!")
elif ask < secret_num:
    print("Sorry, that number was too low.")
else:
    print("Sorry, that number was too high.")
