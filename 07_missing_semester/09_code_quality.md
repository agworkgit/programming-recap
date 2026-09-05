# Lecture 8: Code Quality

- Page: https://missing.csail.mit.edu/2026/code-quality/

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
