# Lecture 8: Code Quality

- Page: https://missing.csail.mit.edu/2026/code-quality/
- Coverage: https://coverage.readthedocs.io/en/7.16.0/
- PyTest: https://docs.pytest.org/en/stable/
- Hypothesis (property-based testing library): https://hypothesis.readthedocs.io/en/latest/

## Intro

- The focus of the lecture is to introduce the concepts and not necessarily have as a sole focus the tools.

## Code Formatting

- Auto-formatters are useful to clean up code, while you spend your time actually solving problems.

## Linters

- They perform static analysis on your code, they look for anti-patterns and other syntactical issues in your code.
- You can also define linter rules that customise it to work for your project.
- Use linters that provide documentation so you can see why it did something.
- `semgrep` can find code blocks for you, e.g. `semgrep -l python -e "subprocess.check_output(..., shell=True, ...)"`, the ... stands for any number of args, and this will log a report of where the code block is.

## Testing

- A high level introduction.
- Software testing is a standard technique for increasing the confidence in the code you've written.
- Types of tests:
  - Unit tests - testing individual functions
  - Integration tests - testing interactions between different modules or services
  - Functional tests - end-to-end, tests if the software satisfies the requirements
- A popular practice that came out of this is Test Driven Development (TDD), where you first write the test/specification and then write the implementation to satisfy the spec.
- To check test coverage you can use `Coverage.py` which can also resent a log of the coverage as an HTML page which includes annotations.
  - From main directory `python -m pytest` to run the tests
  - `cd` into test directory:
    - Run coverage test `coverage run -m pytest`
    - Create report `coverage report`
    - Create HTML with annotations `coverage html`

```Python
# original_file
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

# unit_test_file
from python_files.fizzbuzz import fizz_buzz

def test_fizzbuzz():
    assert fizz_buzz(3) == "3 fizz"

def test_fizzbuzz2():
    assert fizz_buzz(30) == "30 fizz buzz"
```

### Property Based Testing

- A concept that is very alike wiriting partial specifications of properties that should hold.
- In Hypothesis a test looks like this:

```Python
# original_file
def left_pad(s: str, i: int) -> str:
    """Pads a string with spaces on the left, so that its min length is i."""
    return (" " * i + s)[-i:]

# test_file
@given(st.text(max_size=20), st.integers(min_value=0, max_value=50))
def test_left_pad_1(s, i):
    assert len(left_pad(s, i) >= i)
```

- Running a Hypothesis test: let a test runner such as `pytest` pick up on it (as long as the function name starts with `test_`)

## Pre-Commit Hooks

- Program `pre-commit`
- A way to setup git to run a command before any commit happens.
- You could set up: formatter, linters, and tests.
- Example configuration:

```YAML
repos:
    - repo: local
      hooks:
        - id: hatch-fmt-check
          name: hatch fmt --check
          entry: hatch fmt --check
          language: system
          pass_filenames: false
          always_run: true
```

- To install a config, run `pre-commit install`
- When you then run `git commit -a` the message editor won't pop up if there are format errors, linter errors, testing errors, etc...

## Continuous Integration

- An example of this is `GitHub Actions`, with this you can schedule code runs to do specific tasks at given times, including making it a recurring process.
- It's a way run code in the cloud whenever you make changes to your repository.
- Example of a GitHub Actions config file:

```YAML
# ci.yml
name: CI
on:
    push:
    pull_request:
    schedule:
        - cron: '0 8 * * 6'
jobs:
    test:
        runs-on: ubuntu-22.04
        strategy:
            matrix:
                python: ["3.10","3.11","3.12","3.13","3.14"]
            name: "Test: Python ${{ matrix.python }}"
            steps:
                - uses: actions/checkout@v5
                - uses: actions/setup-python@v6
                  with:
                    python-version: ${{ matrix.python }}
                - uses: pypa/hatch@install
                - run: hatch test -v --cover --include python=$(echo ${{ matrix.python }} | tr -d '-')
# you can add as many jobs as you want: tests, typechecks, formatting, linting, etc...
```

- This is particularly useful for PRs from comtributors
- For binaries, you can run a compiler and produce the different binaries for operating systems
- You can also automatically deploy applications to web services
- Automatically update a website whenever you `git push` to the repo

## Command Runners

- In this lecture you saw commands like `hatch fmt` and `hatch test`:
  - `hatch` is a Python project manager and it supports TOML configuration files, so it's a convenient way to run all commands that relate to code quality without having to type long invokations.
- `just` is a command runner, which can create short aliases for long command chains, you define the commands in a `justfile`

```TOML
<!-- Example configuration file for hatch -->
[build-system]
requires = ["hatchling"]
build-backend = "hatchling-build"

[project]
name = "your-proj-name"
readme = "README.md"
requires-python = ">=3.10"
dynamic = ["version"]

[tool.hatch.version]
path = "src/your-project-name/__init__.py"

[tool.hatch.envs.default]
installer = "uv"

[tool.hatch.envs.hatch-test]
extra-dependencies = ["hypothesis>=6.150,<7"]

[[tool.hatch.envs.hatch-test.matrix]]
python = ["3.10","3.11","3.12","3.13","3.14"]

[tool.coverage.run]
omit = ["*/tests/*"]
```

```justfile
typecheck:
    hatch run types:mypy --strict --install-types --non-interactive src tests
format:
    hatch run fmt -f
lint:
    match run fmt -l
```

## Regular Expressions (RegEx)

- It's a language to represent string patterns

- Common use cases:
  - You can use it to search for patterns
  - You can also do search-and-replace

- There are many different inplementations of RegEx between different languages and tools, the concept remains the same but there are slight differences in the syntax
- A comprehensive guide can be found here: https://docs.python.org/3/library/re.html#regular-expression-syntax
- You can create RegEx pattern matching tests on: regex101.com

## Mocking (APIs)

- `pythonvcr` is useful to record calls to APIs
