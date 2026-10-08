# LOOPS OVER STRINGS, GUESS-and-CHECK, BINARY

# RECAP
# * Looping mechanisms
# * * while and for loops
# * While loops
# * * Loop as long as a condition is true
# * * Need to make sure you don't enter and infinite loop
# * For loops
# * * Loop variable takes on values in the sequence, one at a time
# * * Can loop over ranges of numbers
# * * Will soon see many other things are easy to loop over

# BREAK STATEMENT
# * Immediately exits whatever loop it is in
# * Skips remaining expression in code block
# * Exits only innermost loop!
#
# while <condition_1>:
#   while <condition_2>:
#       <expression_a>
#       break
#       <expression_b>
#   <expression_c>

# YOU TRY IT
# * Write code that loops a for loop over some range
# * and prints how many even nubers are in that range
# * Try it with:
# * * range(5)
# * * range(10)
# * * range (2,9,3)
# * * range (-4,6,2)
# * * range (5,6)

even_nums1 = 0
for i in range(5):
    if i % 2 == 0:
        even_nums1 += 1
print(f"There are {even_nums1} even nums in the first range")

even_nums2 = 0
for i in range(10):
    if i % 2 == 0:
        even_nums2 += 1
print(f"There are {even_nums2} even nums in the second range")

even_nums3 = 0
for i in range(2, 9, 3):
    if i % 2 == 0:
        even_nums3 += 1
print(f"There are {even_nums3} even nums in the third range")

even_nums4 = 0
for i in range(-4, 6, 2):
    if i % 2 == 0:
        even_nums4 += 1
print(f"There are {even_nums4} even nums in the fourth range")

even_nums5 = 0
for i in range(5, 6):
    if i % 2 == 0:
        even_nums5 += 1
print(f"There are {even_nums5} even nums in the fifth range")

# STRINGS and LOOPS
# * Code to check for letter i or u in a string
# * All 3 do the same thing

s = "demo loops - fruit loops"
count_i = 0
count_u = 0
for index in range(len(s)):
    if s[index] == "i":
        count_i += 1
    if s[index] == "u":
        count_u += 1
print(f"There are {count_i} i and {count_u} u")

# * Iterates through characters of a string directly

for char in s:
    if char == "i" or char == "u":
        print("There is an i or u")

# Iterates through characters of a string directly (most "pythonic way")

for char in s:
    if char in "iu":
        print("There is an i or u in s")

# BIG IDEA
# * The sequence of values in a for loop isn't limited to numbers

# ROBOT CHEERLEADERS

an_letters = "aefhilmnorsxAEFHILMNORSX"
word = input("I will cheer for you! Enter a word: ")
times = int(input("Enthusiasm level (1-10): "))

for c in word:
    if c in an_letters:
        print(f"Give me an {c}: {c}")
    else:
        print(f"Give me a {c}: {c}")

print("What's that spell?")

for i in range(times):
    print(word, "!!!")

# YOU TRY IT
# * Assume you are given a string of lowercase letters in a variable
# * Count how many unique letters there are in the string
# * For example, if s = 'abca' then your code prints 3

some_string = "aabbccdd"
count = 0
seen = ""
for char in some_string:
    if char not in seen:
        seen += char
        count += 1
print(f"There are {count} unique chars in the string")

# * Solved without the hint

# SUMMARY SO FAR
# * Objects have TYPES
# * Expressions are EVALUATED TO ONE VALUE, and bound to a variable
# * Branching: if,elif,else
# * Looping mechanisms:
# * * while and for loops
# * * Code executes repeatedly WHILE some condition is True
# * * Code executes repeatedly FOR all values in a sequence

# GUESS-and-CHECK
# * Process called exhaustive enumeration
# * Applies to problems where:
# * * You are able to guess a value for solution
# * * You are able to check if the solution is correct
# * You can keep guessing until:
# * * Solution is found, or
# * * Have guessed all values

# SQUARE ROOT
# * Basic idea:
# * * Given an int, call it x, want to see if there is another int which is its square root
# * * Start with a guess and check if it is the right answer

# FIRST ATTEMPT
# init_num = int(input('Type a number you want to find the square root of: '))
# guess_num = int(input('Type a guess as to what that square root might be: '))
# try_guess = guess_num
# if guess_num * guess_num == init_num:
#     print(f'Correct, {guess_num} is the square root of {init_num}')
# elif (try_guess * try_guess < init_num):
#     while try_guess * try_guess != init_num:
#         try_guess = try_guess + 1
#     print(f'The square root of {init_num} is {try_guess}')
# else:
#     while try_guess * try_guess > init_num:
#         try_guess = try_guess - 1
#     print(f'The square root of {init_num} is {try_guess}')

# LECTURE SOLUTION
guess = 0
neg_flag = False
x = int(input("Enter a whole number to get its square root: "))
if x < 0:
    neg_flag = True
while guess**2 < x:
    guess = guess + 1
if guess**2 == x:
    print(f"Square root of {x} is {guess}")
else:
    print(f"{x} is not a perfect square")
    if neg_flag:
        print(f"Just checking..., did you mean, {-x}?")

# BIG IDEA
# * Guess-and-check can't test an infinite number of values
# * You have to stop at some determined point!

# YOU TRY IT!
# * Re-write the guess-and-check with a for loop instead
new_x = int(input("Enter a whole number to get its square root: "))
new_flag = False
found = 0
if new_x < 0:
    new_flag = True
for index in range(new_x):
    if index**2 == new_x:
        found += index
        print(f"The square root of {new_x} is {index}")
if new_x != found**2:
    print(f"{new_x} is not a perfect square")
if new_flag == True:
    print(f"Just checking..., did you mean, {-new_x}?")

# BIG IDEA
# * Booleans can be used as signals that something happened

# WHILE loop or FOR loop?
# * Already saw that code looks cleaner when iterating over sequences of values (for)
# * * You don't set up the iteration yourself as with a while loop
# * * Less likely to introduce errors
# * Consider an example that uses a FOR loop and an explicit RANGE of values

# GUESS-and-CHECK cube root (absolute cubes)
cube = int(input("Enter an integer: "))
for guess in range(abs(cube + 1)):
    # Terminate search once you reached and passed the answer
    if guess**3 >= abs(cube):
        break
if guess**3 != abs(cube):
    print(f"{cube}, is not a perfect cube")
else:
    if cube < 0:
        guess = -guess
    print(f"Cube root of {cube} is {guess}")

# ANOTHER EXAMPLE
# * Remember those word problems from your childhood?
# * For example:
# * * Alyssa, Ben, and Cindy are selling tickets to a fundraiser
# * * Ben sells 2 fewer than Alyssa
# * * Cindy sells twice as much as Alyssa
# * * 10 total tickets were sold by the three people
# * * How many did Alyssa sell?
# * Could solve this algebraically, but we can also use guess-and-check

alyssa = 0
total = 0
while total < 10:
    alyssa += 1
    ben = alyssa - 2
    cindy = alyssa * 2
    total = alyssa + ben + cindy
print(
    f"Alyssa sold {alyssa} tickets, Ben sold {ben} tickets, and Cindy sold {cindy} tickets"
)  # 3, 1, 6

# * Solved before solution, and the solution was incrementing 10 times for each person
# * And with a for loop

for alyssa in range(1001):
    ben = max(alyssa - 20, 0)
    cindy = alyssa * 2
    if ben + cindy + alyssa == 1000:
        print(f"Alyssa sold {alyssa}, Ben sold {ben}, and Cindy sold {cindy} tickets")

# BIG IDEA
# * You can apply computation to many different problems!

# BINARY NUMBERS
# * NUMBERS IN PYTHON
# * * int: integer
# * * float: reals, decimals

x = 0
for i in range(10):
    x += 0.1
print(x == 1)  # False
print(x, "==", 10 * 0.1)  # x == 1

# * This calculation results in a floating point arithmetic error, 0.99 instead of 1

# BIG IDEA
# * Operations on some floats introduce a very small error
# * The small error can have a big effect if operations are done many times!

# A CLOSER LOOK AT FLOATS
# * Python (and every other programming language) uses "floating point" to approximate real numbers
# * The term "floating point" refers to the way these numbers are stored in computer memory
# * Approximation usually doesn't matter
# * But it does for us! Let's see why

# FLOATING POINT REPRESENTATION
# * Depends on computer hardware, not programming language implementation
# * Key things to understand:
# * * Numbers (and everything else) are represented as a sequence of bits (0 or 1)
# * * When we write numbers down, the notation uses base 10
# * * * 0.1 stands for the rational number 1/10
# * * This introduces cognitive dissonance - and it will influence how we write code

# WHY BINARY?
# HARDWARE IMPLEMENTATION
# * Easy to implement in hardware - build components that can be in one of two states
# * Computer hardware is built around methods that can efficiently store information as 0's or 1's and do arithmetic with this representation
# * * a voltage is "high" or "low"
# * * a magnet spin is "up" or "down"
# * Fine for integer arithmetic, but what about numbers with fractional parts (floats)?

# BINARY NUMBERS
# * Base 10 representation of an integer
# * * sum of powers of 10, scaled by integers from 0 to 9
# 1507 = 1*10^3 + 5*10^2 + 0*10^1 + 7*10^0 = 1000 + 500 + 7
# * Binary representation is the same idea in base 2
# * * sum of powers of 2, scaled by integers from 0 to 1
# 1507_10 = 1*2^10 + 1*2^8 + 1*2^7 + 1*2^6 + 1*2^5 + 1*2^1 + 1*2^0
# = 1024 + 256 + 128 + 64 + 32 + 2 + 1 = 2^10 + 2^8 + 2^7 + 2^6 + 2^5 + 2^1 + 2^0
# = 10111100011_2

# CONVERTING DECIMAL INTEGER TO BINARY
# * We input integers in decimal, computer needs to convert to binary
# * Consider an example of:
# * * x = 19_10 = 1*2^4 + 0*2^3 + 0*2^2 + 1*2^1 + 1*2^0 = 10011_2
# * If we take remainder of x relative to 2 (x % 2), that gives us the last binary bit
# * If we then integer divide x by 2 (x // 2), all the bits get shifted right
# * * x // 2 = 1*2^3 + 0*2^2 + 0*2^1 + 1*2^0 = 1001_2
# * Keep doing successive divisions, now remainder gets next bit, and so on
# * Let's covert to binary form

# DOING this in Python for POSITIVE NUMBERS
num = 1507
result = ""
if num == 0:
    result = "0"
# record if the number mod 2 is 0 or 1, repeatedly divide the number by 2
while num > 0:
    result = str(num % 2) + result
    num = num // 2
print(result)  # 10111100011

# DOING this in PYTHON and HANDLING NEGATIVE NUMS
num = int(input("Type a whole number you want converted to binary: "))
if num < 0:
    is_neg = True
    num = abs(num)
else:
    is_neg = False
result = ""
if num == 0:
    result = "0"
while num > 0:
    result = str(num % 2) + result
    num = num // 2
if is_neg:
    result = "-" + result
print(result)
