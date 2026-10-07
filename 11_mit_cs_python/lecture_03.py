# ITERATION

# RECAP

# Strings provide a new data type
# * They are SEQUENCES OF CHARS, the first one at index 0
# * They can be indexed and sliced
# Input
# * Done with the 'input' command
# * Anything the user inputs is READ AS A STRING OBJECT!
# Output
# * Is done with the 'print' command
# * Only objects that are printed in a .py code file will be VISIBLE TO THE SHELL
# Branching
# * Programs execute CODE BLOCKS when conditions are True
# * In an if-elif-else structure, the FIRST CONDITION THAT IS True will be executed
# * Indentation matters in Python!

# WHILE LOOPS

## while <condition>:
##  <code>
##  <code>
##  .....

# * <condition> evaluates to a Boolean
# * If <condition> is True, execute all the steps inside the while code block
# * Check <condition> again
# * Repeat until <condition> is False
# * If <condition> is never False, then will loop forever!!

## My attempt at re-creating LOST IN THE WOODS
answer = input(
    "You're lost in the the woods and need to find your way out, you move LEFT or RIGHT, which way first? "
).lower()
count = 0
while answer != "left":
    answer = input("Still lost, which way next? ").lower()
    count += 1
    if count == 2:
        print("Going in circles there...maybe try going somewhere else.")
print("Congrats! You found your way out!")

# Iternate through NUMS IN A SEQUENCE
# * Set loop variable outside the while loop
# * Test loop variable in condition
# * Increment the loop variable inside the while loop

## n = 0
## while n < 5:
##  print(n)
##  n = n + 1

# A COMMMON PATTERN
# * Find 4! (factorial)
# * i is our loop variable
# * factorial keeps track of the product
## x = 4
## i = 1
## factorial = 1
## while i <= x:
##      factorial *= i
##      i += 1
## print(f'{x} factorial is {factorial}')

x = 4
i = 1
factorial = 1
while i <= x:
    factorial *= i
    i += 1
print(f'{x} factorial is {factorial}') # 4 (4 * 3 * 2 * 1) factorial is 24

# FOR LOOPS
# * shortcut with the for loop
## for <variable> in <sequence of values>:
##      <code>
##      .....
# * Each time through the loop, <variable> takes a value
# * First time <variable> is the first value in the sequence
# * Next, time <variable> gets the second value
# * Etc., until <variable> runs out of values to iternate

for n in range(5):
    print(n)

# * range, iterates up to but not including the num, starting at 0
# * E.g. 0,1,2,3,4

# range()
# * Generates a SEQUENCE of ints, following a pattern
# * range(start, stop, step)
## * start: first int generated
## * stop: controls last int generated (go up to but not including this int)
# * A lot like what we saw for splicing
# * Often omit start and step:
## * E.g, for i in range(4)
## * start defaults to 0
## * step defaults to 1
## * E.g, for i in range(3,5):
## + step defaults to 1

# YOU TRY IT
# * What do these print?
for i in range(1, 4, 1):
    print(i)
## 1,2,3

for j in range(1, 4, 2):
    print(j * 2)
## 2,6

for me in range(4, 0, -1):
    print("$" * me)
## start at me = 4 and descend by -1
## $$$$,$$$,$$,$

# RUNNING SUM
# * mysum is a variable to store the running sum
# * range(10) makes i be 0 then 1 then 2 ... then 9

mysum = 0
for i in range(10):
    mysum += i
print(mysum) # 45

# FOR LOOPS and RANGE
# * Factorial implemented with a for loop
x = 4
factorial = 1
for i in range(1, x + 1, 1):
    factorial *= i
print(f'{x} factorial is {factorial}') # 4 factorial is 24

# SUMMARY
# * Looping mechanisms
# * * while and for loops
# * * Lots of syntax today, be sure to get lots of practice!
# * While loops
# * * Loop as long as a condition is True
# * * Need to make sure you don't enter an infinite loop
# * For loops
# * * Can loop over ranges of numbers
# * * Can loop over elements of a string
# * * Will soon see many other things are easy to loop over
