# The input function always returns strings
# Convert to numbers for math operations

x = float(input("What is x?: "))
y = float(input("What is y?: "))

# Beware of floating-point imprecission

result = x / y

# Format the result with a decimal point and 2 following digits

print(f"Result: {result:.2f}")
