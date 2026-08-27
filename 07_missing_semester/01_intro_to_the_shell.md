# Lecture 1: Course Overview + Introduction to the Shell

## Course Structure

- 9 x one hour sessions

## Curriculum

- You are expected to research on your own what is presented in the lecture.
- The lectures are meant to be exposure and your job is to dive deeper.

## Write Down Questions

- As you go along, it is important to write down your questions and research the answers.
- Capture what you find.

## Topic 1 - The Terminal (Shell)

### What is the Shell?

- Computers have a variety of interfaces to interact with them, everyone is familiar with the concept of a GUI (graphical user interface) where you primarily interact with your mouse, but we have other things as well such as Agentic Interfaces, Voice Interfaces, VR/AR Interfaces, Neural Interfaces (at some point).
- The reality however is that almost all of these interfaces are specialised to what the author of that interface had in mind when they created the interface, so for example in a GUI you can only do what is programmed into that interface.
- Similarly, it is difficult with GUIs to take two programs that are doing similar tasks and combine them. It's usually the case that you need to have software A from vendor A and software B from vendor B made to inter-operate.
- Sometimes you just need to drop to one level lower, where **you can write and chain whatever commands you want**, and that is the Shell! The textual interface between you and the computer.
- The Shell is the core language we have had from the beginning to interact with a computer.
- The Shell is a program on your computer that lets you give input commands and prints the outputs of those commands, and that's how you interface with it.
- The Shell runs in the context of a Terminal, you can think of the Terminal as the GUI window that is around it, it doesn't have an UI, and inside this Terminal window runs the Shell.
- The most commonly used Shell is called BASH (Bourne Again Shell), on Mac most recently you will see ZSH (a BASH compatible Shell, so things that work in BASH will also work in ZSH) which has some ergonomic improvements over BASH.
- There are a lot of different Shells out there and they're all built for different specialised purposes.

### Windows Shell

- On Windows things are a little different, you will most commonly see BATCH or PowerShell as you primary shells, which have similar concepts to what you will find in the other shells, but they are different in syntax, program invocation, etc..., we are not concerned with learning these in this class.
- If you are on Windows, install WSL or a Linux VM, that lets you get access to a proper shell.

### Why should you care about the Shell?

- It's usually much faster than clicking around.
- Once you get used to how the Shell works you can do quite a lot of things with minimal input.
- In GUI things tend to get more laborious especially when tasks get complex.
- In the Shell you can automate, the Shell is essentially a programming language.
- The prompt is the start of a file that you write and gets executed.
- Most programs are very simple, but you can write very complex ones the more you know about how it works.
- It has the ability to combine programs. For example, taking the output of a program and feeding it as input to another program that does something else, and so on...
- Knowing your way around the Shell is also useful for interacting with the Open Source community. You will find that for almost any Open Source too you find, the instructions for building it, running it, etc... are all going to things that happen in your Shell.
- It is very useful to know what you're giving your Shell, and what that command will do before you run it!
- There's an increased use of Shell (BASH) in Continuous Integration for projects, in both Open/Closed source situations.

### What is the Shell? (Continued)

#### Defaults

- `~` is short for Home Directory
- `$` says that you're not the Admin of the machine
- And the 'prompt block' is there and waiting for your command

#### Example

- `date` will print the current date

#### Commands with Arguments

- `echo` will print whatever you give it as args
- For example `echo "This is a great day to learn the Shell!"`
- If we type unquoted args, echo will split everything on whitespaces.

#### Commands are built-in

- Most of the commands you run are built-in and run by the Shell

#### Escaping characters

- If you run into file naming issues, where you have quotes etc..., you can put a `\` in front of the character you want to escape.
- The backslash says "don't treat the next character as a special character"!
- Example that won't work! `echo 'bob's world'`
  - The argument interpretation will stop at `'bob'` but since there's more content after that the Shell will terminate abruptly and expect more input!
  - Instead you can wrap in double quotes.

#### `man` - Manuals

- Example: `man echo`
- Will show you the `echo` program's usage and commands.
- Use it to understand the commands you want to run and what they do.

#### `--help` or `-h` - Attribute

- Most programs can take this attribute and show you a shorter manual.

#### `cd` - Change Directory

- To change in which directory (folder) you want to operate.
- Example: `cd /bin`, `cd /`, etc...
- The prompt will indicate your current location.

#### Paths

- If you use `/` you will cd into an absolute path.
- If you use a dir name without the `/` you will `cd` into a relative path. Meaning inside the current location.
- `.` is the current directory.
- `..` is the previous (parent) directory.
- `~` points you back to your `home` directory.
- You can combine these methods to navigate the file system however you see fit.
- **Use case:** easily moving up and down directories without having to specify the whole absolute path each time you want to move around the file system.

#### Zoxide

- Remembers all the paths you `cd` into and it gives you a quicker way to access arbitrary file paths.

#### TAB - gives you autocomplete

- If you start typing a few characters and press TAB you get autocomplete or suggestions.

### What can we execute in the Shell?

- What the Shell does is, take the program name we typed and goes to look for it in PATH.
- PATH is an environment variable (set across the whole Shell) of variable to value mappings, usually names to strings and those will describe a bunch of meta information that the Shell can make use of, like `whoami`, what shell is this, what host am I running? etc...
- `echo $PATH` will list out a sequence of paths with `:` separators, and when you try to run a program in your Shell it will walk through these folders one by one looking for a file by the name of the program and if it finds it then it will run it, else it will look in the next folder and so on...
- `which date`, in this case `date` is a program and `which` will point the directory of the program.
- So when we type a program's name and run it, the Shell will get pointed to the path of that program and automatically execute it, after which we get our Terminal output.
- You could also take the path and run the program that way, but it's more convenient to just type the program name and have the Shell do the heavy lifting.

#### Questions

- Q: If you have multiple versions of the same program with the same name, how does Shell know which one to run?
- A: The Shell will execute the first it finds in the PATH order.
- You can ask the Shell with `which -a program-name` how many matching executables of that program you have.

#### Listing directory contents with `ls`

- `ls` will take the path of a directory and list its contents
- If `ls` is called in the current directory it will list its contents.
- If you want to see hidden .files you can add the flag `-a` to list them.

#### Printing (reading) the contents of a file with `cat`

- `cat` will take as argument a file path and print the contents of that file in the Terminal.

#### Sorting with `sort`

- Will take its input or a file that is specified as input, and print the lines in sorted order.
- The precedence is: symbols, numbers, characters
- The way it sorts is by looking at the first character it finds on a line, e.g. 3, 31, 4

#### Printing only the unique values with `uniq`

- Let's say you have a file with multiple entries of the same number or character
- `uniq` will print only the unique instances it finds
- It only eliminates consecutive lines with the same value! If a value that is similar to others is sandwiched between two different values it will not pick up on that (so it's not that smart).
- You can also do this type of sorting with `sort -u filename`!

#### Printing only the first few lines at the top of a file with `head`

- `head` takes a `-n` argument where `n` is the number of lines you want printed.

#### Printing only the first new lines at the bottom of a file with `tail`

- `tail` args are the same as `head`

#### Searching for patterns inside files with `grep`

- `grep` takes as arguments a pattern/value and a file or list of files, and it will print the lines that match that you give it
- This is a very powerful tool, it can take regular expressions (regex) to search for patterns
- And regex can describe very complex patterns such as 'I want you to find all the files where the first 3 characters are digits, followed by a dash, followed by another 3 characters and ending in 99'
- `grep` can also search in directories, for example `grep -r programming .` will return the lines of files that contain the "programming" string
- `-r` in `grep` means recursive, useful when you want to search nested directories!

#### Tools that let you edit files `sed`

- `sed` is a line editor that is intended to be programmed, and has its own programming language that lets you program the way it will edit your file.
- Usually it is used for tasks such as search-and-replace
  - Example: let's replace every intance of 7 with D in data.txt
  - `sed -i 's/7/D/g' */*.txt`
  - `-i` tells sed to perform the operation in-place, in other words, not in a new file
  - `/g` means global, across the entire line
  - `*/*.txt` is called a glob (what's a glob?)
  - globs (a simple type of pattern, **approximation of a file or path**) e.g. `*/*.txt` or `*.pdf` are expanded by your Shell
- You can then check with `git diff` what's being changed

#### Find files with `find`

- When you run `find` you tell the program the kinds of files you're looking for and it will search where you tell it to, the files that match that structure
- Example: `find ~/Downloads -type f -name "*.zip" -mtime +30`
- `find` is recursive by default
- This command says: find in Downloads all items of type file (f) by name "contains .zip" modified in the last 30 days.
- You can also run other programs on the files found with `find`
- Example `find ~/Downloads -type f -size +100M -exec ls -lh {} \;`
- This will list the files with more details `-l` in `-lh`, and the `-h` says print the size in human readable notation (not in bytes, in MB/GB/... etc.).
- The curly braces `{}` get replaced with all the paths found for each file.
- Outputs: `-rw-r--r-- 1 ag ag 1.7M Aug 25 14:31 /home/ag/Downloads/data_set_ml/train/keyboard/IMG_6884.jpeg`
- The `\;` is for when you want to give `find` more arguments, in this case it says "this is the end of the list of commands for `-exec` anything after this is a command for `find`"
- Example `find ../ -name "*.md" -exec grep -l "let" {} \;`
- With `-l` as an argument to `grep` this command will return all the md files paths where "let" is in the file

#### If you need to parse files use `awk`

- `awk` has its own programming language
- `awk '{print $2}' data`, the `{print $2}` tells awk to run the instruction
- Before the execution you can specify a pattern
- `$2` says: print me every second entry on every line
- `awk -F, '{print $2}' data` tells awk to behave like a CSV parser and split on commas
- It's a very useful tool for pulling data out of semi-structured files easily
