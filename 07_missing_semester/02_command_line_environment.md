# Lecture 2: Command Line Environment

## Link

[Video](https://www.youtube.com/watch?v=ccBGsPedE9Q&list=PLyzOVJj3bHQunmnnTXrNbZnBaCA-ieK4L&index=2)

## Write Down Questions

- As you go along, it is important to write down your questions and research the answers.
- Capture what you find.

## Inputs/Outputs

Python example:

```python
def add(x: int, y: int) -> int:
    return x + y
```

Bash example:

```bash
if [[ -f $1 ]]; then
    echo "Target file already exists"
    exit 1
else
    if $DEBUG; then
        grep 'error' - | tee $1
    else
        grep 'error' - > $1
    fi
    exit 0
fi
```

## Arbitrary numbers of arguments

### Shorthand notation

```bash
# Instead of doing this
mkdir project1
mkdir project2
mkdir project3

# We can do it all on one-line
mkdir project1 project2 project3
```

### Flags

- Flags can be passed to a program in the form of `-a` or `--all`, and with the shorter syntax we can chain multiple flags together e.g. `-la`.

### Globbing Patterns

- Looking for files, you can use the `*/*.ext` in combination with `ls` syntax to look for files nested one folder deep in the current directory.
- By using the asterisk, we can match all file names that match the py extension e.g. `*.py`.
- If we want to create multiple files in a project for example, we can use the following pattern: `touch project1/{a,b,c}.py`, as you can probably guess, the arguments between curly braces are file names.

### Concatenating Programs

- By using pipe `|` we can chain as many programs as we want for an operation
- Example: `cat numbers.txt | grep -P '^\d$' | sort | uniq`
- Note: `'^\d$'` is a regex patter that says: only filter numbers with a single digit
- Each program will create an output which is then fed into the input of the next program, and this process repeats for all the chained programs.
- Another example: `python -u slow.py | grep -P '(1|2|3|4|5|6|7|8|9)'`
- Note: As this command is running both programs are running in parallel, python will produce a number between 0-9 every second and grep will only show the ones that match it's pattern.
- Note: `-P, --perl-regexp --> PATTERNS are Perl regular expressions`

- We can also use `&&` to say complete the next program only if the first one runs.
- Or, the logical OR `||` to say complete the next program only if the first one fails.
- Example: `(sleep 15 && cat numbers.txt) | grep -P '^\d$' | sort | uniq`

- Nuance:
  - The Shell has two output streams:
  1. The standard output stream
  2. The error output stream
  - If we wanted to capture an error in a file, we can't simply do `ls nonexistent > err.txt`, we must use the second stream `ls nonexistent 2> err.txt`
  - And, if you don't want to see the error at all, we can use `ls nonexistent 2> /dev/null`

### Environment Variables

- To create variables in bash we do `foo=bar`
- And to access variables we use `$foo`
- Beware of whitespaces, with variables in bash you cannot use spaces as in standard programming languages, so `foo = bar` is incorrect syntax in bash, it will interpret the `=` and `bar` as arguments to a program `foo`, which is not what we're doing here.
- Whenever you create a variable it will be stored in your current local session, but sometimes you want those variables to be passed into other programs that you defined
- Example: `TZ=Asia/Tokyo date`, this command will specify the timezone argument to the date program
- To get access to a variable across the whole session use `export foo=bar`, from that point on, any program you run will see the variable in that bash session
- Once you export a variable, if you modify it, the value will get updated
- To delete a variable we use `unset name_of_var`

### Program Call - Return Values

- If we need to see what the return value of a program was after running it, we can use `echo $?`, and if the output is `0`, it means the program executed successfully, if it prints `2` something went wrong

### Signals

- Signals are a type of software iterrupts
- For an extensive list check the docs on bash signals
- Check here for more info on this: https://programming4u.com/bash/signals

### Remote Machines

- Connecting to a remote machine via the Terminal
- Syntax --> `ssh jjgo@192.168.65.4` or `ssh jjgo@server.mit.edu`
- Initially you get prompted for a password
- If you want to prevent having to enter the password every time you connect, you have to create an ssh key
- In order to generate a key `ssh-keygen -a 100 -t ed25519 -f ~/.ssh/id_ed25519`
- You should never share what your private ssh key is publicly! e.g. `id_ed25519`
- Copy files between a machine and a remote (ssh) machine: `scp ignore.py jjgo@192.168.65.4:/home/jjgo`

### Terminal Multiplexers (tmux)

- Terminal Multiplexers are programs that make it easy to run many other programs within the same environment
- Why is this convenient? Because if you have a tmux session and for some reason your ssh session is dropped, tmux will intercept the kill signal and handle it so that it's session keeps running, so next time you re-connect to the remote machine we can re-arrach with `tmux attach` and the session will still be there as we left it with all it's running tasks.

### Customising your Shell

- To install additional programs you might want to use e.g. `ripgrep, tmux, etc...` you have to check your OS's package manager, there are several in use e.g. `brew (mac), apt (ubuntu), pacman (arch), etc...`
- Once you know the above you can simply run `sudo apt install ripgrep` as an example for the apt package manage and it will install the program for you
- A reference site to find out how to install programs that you don't have, in case you get 'command not found' is: https://command-not-found.com
- Shell configuration files are commonly found on GitHub as dotfiles, read through some of them and check how other people configure their Shells
- By using **symlinks** (a file pointing to another file) you can have a common repo of all your dot files and have the local files point to a local pull of that repo, in which case you can repeat this process on any machine and restore your configurations

#### Appending more programs to PATH

- If you want to append another program to PATH (the built-in programs of the Shell) you can use the following syntax `export PATH="$PATH:path/to/append"`, this says append to the PATH variable whatever is currently in PATH + the new program you want to append.
- On a remote machine, if you disconnect, that program you appended will not persist!
- The way to persist that is to add `export PATH="$PATH:path/to/append"` to the Shell configuration file, e.g. `vim ~/.bash_profile` or whatever the configuration file name is for your Shell

#### Plugins

- Many plugins exist that can extend the functionality of your Terminal, e.g. autocomplete, fuzzy find, highlighting existing/non-existing commands, etc...
- Frameworks can be good too but they might slow down your Shell, it's better to install only the things you use.
- There are also LLM tools that can let you describe your command in plain English and covert it to the relevant bash command that needs to be run.
- You can also integrate Claude Code into the shell for plain English instructions.
