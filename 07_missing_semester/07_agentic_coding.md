# Lecture 7: Agentic Coding

- Page (details/exercises): https://missing.csail.mit.edu/2026/agentic-coding/

## Aside

- Wow, the audience differences between this and the previous lecture are astonishing.
- Why are so many people interested in Agentic Coding?
- Even though if you have an app written with agentic coding you still need to understand how to version it, package it, and ship it. Mind boggling!

## Intro

- A continuation of the previous lectures on AI assisted auto-complete.

### CLI Coding Agents

- A coding agent is a conversational AI model with some access to tools that will help it write code.
- The agent can then read or write files and execute Shell commands.
- When it's editing files, it won't ask for permission (has to be configured in that way), but for other tools that it's trying to run the agent should ask whether it's allowed to do it.
- Another consideration about this type of tool is the cost, keep an eye on how much it costs you to run it, it big companies that cost is offset due to productivity gains, but it's not a one-size fits all tool.

## How AI Models & Agents work

- LLM models can be thought of as modelling a probability distribution of completion strings, as a function of prompt strings.
- A lot of the work is involved in finding a useful probability distribution.
- LLMs have a limited context window, so the length of the prompt and the length of the output have bounds.

### How does Conversational Chat work?

- They use turn markers, and you give your entire conversation history as input to the model and it gives you the next thing the models output as the output from the probability distribution.
- In the case of chat models, the way they respond to a follow-up prompt is by taking the previous prompts/answers as a group and sending them back into the probability distribution model to predict its next likely response.

### Building an Agent Harness

- Now we can add some special interpretation of the outputs from the LLM.
- We can tell the model to output:
  - assistant {text}
  - tool call {tool, arguments}
- The Agent Harness will interpret these outputs, execute them on the machine and feed them back into the language model as a subsequent input along with the messages it outputs as it's executing its process.
- Examples of tools it can use:
  - Bash
  - File read, write

- Together the combination of tools lets the underlying model make changes to things on your machine and develop code in a some-what intelligent way (running tasks, tests, etc.., and inform it's future actions).
- An example of an Open Source agent harness is Open Code, which can work with most AI models.
- This gives the illusion of intelligence but these models are always prone to fail in one case or another, but generally they work "reasonably" well when they're used for what they're good at.

#### Privacy Concerns

- Hosted models run in the cloud, and when you're using these models (unless you are a big corporation and have some agreements with the provider) you're sending them your data, which in turn gets used to further train their models, so keep that in mind as you're using them.

### Great Use Cases

- Using them to fix issues in your code: bugs, refactoring, compilation errors, linter issues.
- Using a unit test, you can check if the agent can make the test pass.
- Code review.
- Helping you understand code bases to make it easier to contribute.

## Advanced Features

- Reusable prompts (presets)
- Parallel agents (git worktree)
- MCPs (model context protocol), for connecting agent harnesses with tools/services
- Context Management:
  - Clearing the context window (prompt/response history)
  - Rewind (pop messages off the history stack)
  - Compaction (replacing the prefix of your context with a summary of it)
  - LLMs.txt:
    - The underlying coding models used by agents are fixed (data from a specific time bracket)
    - They do get updated from time to time but at any given moment the model's data might be stale (knowledge cutoff).
    - A way around this limitation is to give the model at inference time the data it doesn't have or know about.
  - AGENTS.md or CLAUDE.md (a repo level document that gets read by the agent everytime it gets booted up)
  - Skills (context management):
    - Used to solve the problem of having an overblown AGENTS.md file
    - See this document to know how to run tests, this document on coding best practices, etc...
    - Provides general information on the various topics the agent should know in a modular way.
  - Sub-agents:
    - A parent agent directing specialised agents for specific tasks.

## Validation & Security

- For critical jobs, validate and check security concerns yourself, these agents can make mistakes and in those areas your experience might be more important in addressing the issues.
- Be aware that models can hallucinate, try to gaslight you that it's correct, and fall down rabbit holes, and get stuck on a tests generating rubbish code.
- We're far off from the point where programmers and computer scientists are obsolete.
