# Lecture 6: Packaging & Shipping Code

## Definition

- This refers to the idea that while you might get code to work on your own development machine it might not be the case that the same code will run on a different computer.
- You might not be thinking about all the dependecies at play and if those will be available on the next machine.

## Dependencies

- For example, if you run this file:

```Python
import requests

response = requests.get("https://missing.csail.mit.edu")
print(f"Status: {response.status_code}")
```

- It will throw a `ModuleNotFoundError: No module named 'requests'`
- This module is not part of the built-in Python modules, it was written by someone else, so in order to use it, it must be downloaded first and available on the current machine.
- In Python the tool to do this is `pip + package_name`
- The Python package manager `pip` will also download all the dependencies of the package you're trying to install.
