# Lecture 3: Development Environment and Tools

## What is a Development Environment?

- A development environment is a set of tools for developing software.

## Text editing in VIM

- When you're writing code, the way you're interacting and editing code is a lot different from other types of editors.
- One reason VIM is important is that it is a text editor that has a unique way of interacting with a buffer of text that is optimised for this use case of moving around text a lot.
- So the saying goes that if you learn to use VIM and it's features you become really effective at writing software.
- VIM's core idea is that switching between a keyboard and mouse will slow you down when editing code, and also the interface of VIM itself can be thought of as a programming language, there are some primitives and you can compose those primitives to do a bunch of things.
- For example: the movement around the editor is done with `j` - for down, `k` - for up, `h` for left and `l` for right.

- VIM is what we call a 'modal editor', in a modal editor there are different operating modes for doing different classes of tasks.
  - Normal mode `esc` from Insert mode
  - Insert mode `i`
  - Replace mode `R` override text
  - Visual mode `v` (plain, line `V`, block `CTRL + v`) for selecting text
  - Command mode `:` for running commands, such as `w` to save, `q` to quit
- Many other IDEs support VIM motions (keybindings).

### Normal Mode

- Movement
  - up, down, left, right arrows
  - Alternatively h,j,k,l keys do the same
  - w moves the cursor by one word at a time
  - b moves back one word at a time
  - e moves to the end of a word
  - 0 goes back to the beginning of the line
  - $ goes to the end of the line
  - H goes to the top of the file
  - M goes to the middle of the file
  - L goes to the bottom of the file
  - CTRL + D scrolls down
  - CTRL + U scrolls up
  - gg goes to the top of the line
  - G goes to the bottom of the line
  - : + line number -> goes to that line number
  - % -> goes to the next matching character
  - f + character -> finds the closest match
  - / + string -> finds that string
- Selection
- Edits
  - o -> creates a new line and puts you in Insert Mode
  - u -> for undo
  - O -> creates a new line above and puts you in Insert Mode
  - d + movement (e.g. w) will delete a word
  - a -> will put you in insert mode and append
- Counts
  - you can combine a count + a command to repeat certain things (e.g. 5w -> move 5 words)
- Modifiers
  - c+i+( - deletes the content inside a set of parentheses
  - you can also use it with [], or {}

### Visual Mode

- CTRL + V let's you select rectangular blocks of code

### Insert Mode

### General Consensus

- The investment of learning the ways of VIM pay off big time once you get comfortable.

## Code Intelligence and Language Servers

### Language Servers

- IDE -> talks to an LSP (Language Server Protocol)
- What does an LSP enable? One of the tasks is performs is code completion, jumping to definitions (structs) and in-line documentation.
- It helps you catch errors in your code as you write.

## AI Powered Development

### Fundamentals

- Since the intro of Copilot, LLMs have become better and better at helping people write code.
- Some of the tools that are available is auto-complete, in-line chat, and coding agents.

### IDE + AI integration (e.g VSCode + Copilot)

- You will have functionality that gives you really smart auto-complete.
- When you work with some of these tools really make sure to review and understand what they do, they are clever but not as smart as a trained engineer.
- Hard tasks are not yet suitable, beware that they will fumble.
- Keep up to date with how this tech is advancing and what is possible.

#### Tab auto-completion

- You can steer the auto-completion with comments.
- TAB completion only works past the level of your cursor.

#### In-line chat

- CTRL/CMD + I if Copilot is enabled.
- After a prompt, the code will be modified and you will see a git style diff of the changes.

#### Energy concerns

- Local AI inference drains battery quickly.
- Remote AI drains battery less than Local but still significantly.

#### Privacy concerns

- Models can relay data back to their cloud if they are Remote models.
- Local models are less affected by this.

## Regular Expressions & Search-and-Replace

- Mentioned but not covered yet.
