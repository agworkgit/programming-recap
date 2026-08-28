def fizz_buzz(limit):
  for i in range(1, limit + 1):
    if i % 3 == 0:
      print("fizz", end="")
    if i % 5 == 0:
      print("buzz", end="")
    if i % 3 and i % 5:
      print("fizz buzz", end="")
    print()

def main():
  fizz_buzz(20)

if __name__ == "__main__":
  main()
