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
