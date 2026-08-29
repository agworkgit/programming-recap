# Note

`g++ -g corruption.c -o corruption`

The `-g` tells the compiler to include the debugging symbols
So, include the name of variable names, functions, so on... in the program, so that when we later open it in a debugger it doesn't see just memory addresses and locations in binary data, but it will also have information about what binary instructions are tied to which variables and functions in your code, it preserves the original mapping.

## Debugging

- Run `rr` and use it's commands to find the bug:
  - `b + line number` set breakpoint
  - `c` continue
  - `watch + expression` and break when that expression changes
  - `reverse-continue` will undo the execution of lines until the watchpoint is hit
  - `list` to show more details
  - `bt` for a backtrace
  - `quit` exit rr
  - If you modify the code and re-compile you have create a new record session!
