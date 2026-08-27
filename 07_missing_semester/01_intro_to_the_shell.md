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
