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
print(f'There are {even_nums1} even nums in the first range')

even_nums2 = 0
for i in range(10):
    if i % 2 == 0:
        even_nums2 += 1
print(f'There are {even_nums2} even nums in the second range')

even_nums3 = 0
for i in range(2,9,3):
    if i % 2 == 0:
        even_nums3 += 1
print(f'There are {even_nums3} even nums in the third range')

even_nums4 = 0
for i in range(-4,6,2):
    if i % 2 == 0:
        even_nums4 += 1
print(f'There are {even_nums4} even nums in the fourth range')

even_nums5 = 0
for i in range(5,6):
    if i % 2 == 0:
        even_nums5 += 1
print(f'There are {even_nums5} even nums in the fifth range')

# STRINGS and LOOPS
# * Code to check for letter i or u in a string
# * All 3 do the same thing

s = "demo loops - fruit loops"
count_i = 0
count_u = 0
for index in range(len(s)):
    if s[index] == 'i':
        count_i += 1
    if s[index] == 'u':
        count_u += 1
print(f'There are {count_i} i and {count_u} u')

# * Iterates through characters of a string directly

for char in s:
    if char == 'i' or char == 'u':
        print('There is an i or u')

# Iterates through characters of a string directly (most "pythonic way")

for char in s:
    if char in 'iu':
        print("There is an i or u in s")

# BIG IDEA
# * The sequence of values in a for loop isn't limited to numbers

# ROBOT CHEERLEADERS

an_letters = 'aefhilmnorsxAEFHILMNORSX'
word = input('I will cheer for you! Enter a word: ')
times = int(input("Enthusiasm level (1-10): "))

for c in word:
    if c in an_letters:
        print(f'Give me an {c}: {c}')
    else:
        print(f'Give me a {c}: {c}')

print('What\'s that spell?')

for i in range(times):
    print(word, '!!!')

# YOU TRY IT
# * Assume you are given a string of lowercase letters in a variable
# * Count how many unique letters there are in the string
# * For example, if s = 'abca' then your code prints 3

some_string = 'aabbccdd'
count = 0
seen = ''
for char in some_string:
    if char not in seen:
        seen += char
        count += 1
print(f'There are {count} unique chars in the string')

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
    print(f'Square root of {x} is {guess}')
else:
    print(f'{x} is not a perfect square')
    if neg_flag:
        print(f'Just checking..., did you mean, {-x}?')

