# FLOATS AND APPROXIMATION METHODS
# OUR MOTIVATION FROM LAST LECTURE

x = 0
for i in range(10):
    x += 0.1
print(x == 1)  # False, x = 0.999...
print(x, "==", 10 * 0.1)

# FRACTIONS
# * What does the decimal fraction 0.abc mean?
# * * a*10^-1 + b*10^-2 + c*10^-3
# * For binary representation, we use the same idea
# * * a*2^-1 + b*2^-2 + c*2^-3
# * Or to put this in simpler terms, the binary representation of a decimal fraction f would require finding the values of a,b,c etc such that
# * * f = 0.5a + 0.25b + 0.125c + 0.0625d + ...

# HOW DO WE FIND THE BINARY REPRESENTATION?
# * In decimal form: 3/8 = 0.375 = 3*10^-1 + 7*10^-2 + 5*10^-3
# * RECIPE IDEA: if we can multiply by a power of 2 big enough to turn into a whole number, can convert to binary, and then divide by the same power of 2 to restore
# * * 0.375 * (2**3) = 3_10
# * * Convert 3 to binary (now 11_2)
# * * Divide by 2**3 (shift right three spots) to get 0.011_2

# BUT...
# * If there is NO INTEGER p such that x*(2^p) is a whole number, then internal representation is always an approximation
# * And I am assuming that the representation for the decimal fraction I provided as input is completely accurate and not already an approximation as a result of a number being read into Python
# * Floating point conversion works:
# * * Precisely for numbers like 3/8
# * * But not for 1/10
# * One has a power of 2 that converts to whole number, the other doesn't

# TRACE THROUGH THIS ON YOUR OWN
x = 0.625
p = 0
while ((2**p) * x) % 1 != 0:
    print(f"Remainder = {str((2**p) * x - int((2**p) * x))}")
    p += 1
num = int(x * (2**p))
result = ""
if num == 0:
    result = "0"
while num > 0:
    result = str(num % 2) + result
    num = num // 2
for i in range(p - len(result)):
    result = "0" + result
result = result[0:-p] + "." + result[-p:]
print(f"The binary representation of the decimal {str(x)} is {str(result)}")

# WHY is this a PROBLEM?
# * PROBLEM: 1/10 in binary becomes a really long approximation of 0s and 1s
# * What does the decimal representation 0.125 mean
# * * 1*10^-1 + 2*10^-2 + 5*10^-3
# * Suppose that we want to represent it in binary?
# * * 1*2^-3 --> 0.001
# * How about the decimal representation 0.1
# * * In base 10: 1*10^-1
# * * In base 2: ??? --> 0.000110011001100...close to infinitely many times!

# THE POINT?
# * If everything is ultimately represented in terms of bits, we need to think about how to use binary representation to capture numbers
# * Integers are straight-forward
# * But real numbers (things with digits after the decimal point) are a problem
# * * The idea was to try and convert a real number to an int by multiplying the real with some multiple of 2 to get an int
# * * Sometimes there is no such power of 2!
# * * Have to somehow approximate the potentially infite binary sequence of bits needed to represent them

# STORING FLOATING POINT NUMS
# * Floating point is a pair of integers
# * * Significant digits and base 2 exponent
# * * (1,1) -> 1*2^1 -> 10_2 -> 2.0_10
# * * (1,-1) -> 1*2^-1 -> 0.1_2 -> 0.5_10
# * * (125,-2) -> 125*2^-2 -> 11111.01_2 -> 31.25_10
# * 125 is 1111101 then move the decimal point left by 2
