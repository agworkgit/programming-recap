# while loop
while True:
    answer = int(input("How many times should I bark?: "))
    if answer > 0:
        # got a correct value, exit loop
        break
        # if answer < 0 keep looping

# for loop
# range set from 0...3
for i in range(answer):
    print(i + 1, "bark")

# printing something multiple times
# by default Python inserts a newline at the end, the 'end' arg overrides it
# print("meow\n" * 3, end="")
