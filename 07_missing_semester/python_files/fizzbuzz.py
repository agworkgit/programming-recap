def fizz_buzz(num):
  results = []
  for num in range(1, num + 1):
    if num % 3 == 0 and num % 5 == 0:
      results.append(f"{num} fizz buzz")
    else:
      if num % 3 == 0:
        results.append(f"{num} fizz")
      if num % 5 == 0:
        results.append(f"{num} buzz")
  return results[-1]

def main():
  print(fizz_buzz(30))

if __name__ == "__main__":
  main()