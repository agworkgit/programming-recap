from python_files.fizzbuzz import fizz_buzz

def test_fizzbuzz():
    assert fizz_buzz(3) == "3 fizz"

def test_fizzbuzz2():
    assert fizz_buzz(30) == "30 fizz buzz"