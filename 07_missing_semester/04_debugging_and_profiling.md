# Lecture 4: Debugging and Profiling

## Debugging

- Exploring the delta between what we told the computer to do and what it actually did.
- This is very important because computers do not interpret instructions in the same way we do.
- Quote: "The most effective debugging tool is still careful thought coupled with judiciously placed print statements."

### Print Statements

- Place print statements in your code where you need to understand what the computer is doing.
- You will discover the discrepancies between what you think the computer should have done and what it actually is doing.

### Logging

- Storing print statements into log data in a file, this in turn allows you to use Shell tools to perform analysis on the logs.
- Logging can be tagged in several levels: trace, info, warnning, error, etc...
- Allowing you to print only certain things during debugging or production environments.

### App/System Logging

- For example with Shell programs you can use the `--verbose` flag to see what it's actually doing and if it matches your expectations.
- For system services you can inspect with built-in tools, for example in Linux that tool would be `journalctl`, which says give me the logs from this particular application that's running in the background.

## Debuggers

- Sometimes you might not know exactly what a program is doing, in which case you would use a tool like `gdb, lldb` to inspect what is happening as the program executes.
- These tools attach to a currently running process and allow you to control that process's execution. With commands like, pause/resume, inspect memory, etc...
- These general purpose types of debuggers and they work with any program but tend to prefer native (compiled) programs (binaries).
- For certain languages you need to use language specific debuggers. For example, for Python you might use a tool like `pdb`, and let's you interface in the same way.

### Reverse Debugging (Record-Replay Debugging)

- When you run a debugger it executes your program normally top-to-bottom and then as it runs you get to stop it and resume it.
- In most cases you will see that a bug was triggered as the debugger was running and you want to go back to where that happened.
- For example, on Linux you have a program called `rr` that will record everything your program does, it's interactions with the OS, memory, so that the program can be executed in reverse order, so after execution this tool will allow you do to do reverse steps (undo current line of code and move to the line before).

### Heisenbugs

- The Heisenbugs are bugs that when you try to observe them they're not there, you will commonly run into this when doing print debugging, why so? Print debugging will slow down your program, because it has to stop and write some characters in your Terminal then go back to running as normal, and that small delay can sometimes cause your program to behave differently, this happens especially for concurrent programs where a bug might manifest because one thread of the cpu was faster than the other.
- The same can happen with debuggers, because they can change the way the program gets executed, especially true for `rr` because as it runs it has to record the entire program's execution and the way it does that is by using a deterministic scheduler, so it runs all the threads in a very specific order so that it gets to capture all of their information so that you can reverse them. But it is very much possible that a bug won't manifest because of that specific order. So when it runs normally it might crash, but as it goes trough the debugger that crash does not manifest.
- This is the lovely world of debugging!

### `rr` - Study Case

- `demo/corruption.c`
- Bear in mind that `rr` does not work well on VMs because they require hardware support, they need to monitor certain things on the CPU in order to do the reverse-debugging or record the things that you need.
- This is also a Linux only tool, but when you can use it, it can be extremely powerful.
- This process can also be accomplished with `gdb`.

### Stuck Processes

- `strace` lets you trace system calls that a given process is running.
- e.g. `strace + name_of_program` or `strace -p + PID` of a running program.
- Test `strace ls -l 2>&1 | less`
- `less` is useful when you have a program that produces a lot of output.
