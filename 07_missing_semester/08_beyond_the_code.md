# Lecture 8: Beyond The Code

- Page: https://missing.csail.mit.edu/2026/beyond-code/

## Intro

- We're going to cover things that don't have to do with code, engineering, or aspects of your computer.
- We discuss about the soft skills involved in being an engineer.

## Your Responsibilities

- About 50% of being a good engineer is about writing good code and good systems.
- The other 50% is about communicating with the others.

## One-way Communication

- When you are writing something for other engineers to read:
  - The primary method for this is code comments (often used ineffectively):
    - The most useless way of writing them is to explain what the code does
    - The more important things that you want to capture in your comments is the non-trivial aspects that make it easier to parse your code
    - A very useful thing is writing TODOs
    - Adding references pointing to the source of an algorithm
    - WHY NOTs, comments that explain why you didn't create your solution the default way
    - READMEs, a 3-4 step process:
      - What does it do?
      - Why should I care?
      - How do I use it?
      - How do I install it?
      - Keep it concise!
    - CONTRIBUTING.md:
      - Instructions about the contributions process
      - Conventions
    - Commit messages:
      - A description of the changes you're making (why did you make the change?)
      - A historical record
      - `git blame` is only useful when the commit messages are informative enough
      - What are the trade-offs about your change? Why did you make that trade-off?
      - Non-obvious implications about your change (e.g. runtime is faster but build time is slower)
      - Separate all the logical changes into different commits, don't push out one large change, makes it hard for others to review what you did
      - `git bisect` allows you to say here's a version of the software where it worked correctly, here's a version where it does not, find me the commit where the problem was introduced
- Respect the time of the reader!

## Collaboration

- The most popular way of collaborating is contributions, this is where you are making some change or submitting a bug report to someone else, no matter who it is, bear in mind that there's a magnitude order between the number of users vs the number of maintainers (e.g. millions of users but 2-3 maintainers). You really want to spend that extra effort to ensure whatever you submit to them is already an effective use of their time.
- There are a couple tools at your disposal to make sure your contributions will be more worth-while:
  - Filing good bug reports:
    - Bring along enough context for someone else to reporoduce the problem (environment, configuration files)
    - What you expected to see vs what actually happened
    - An ordered list about the steps to reproduce the bug
    - Include what you already tried
    - The best thing to do is a minimal reproducible example
    - Search whether there is another bug report about the same thing already (avoid duplication and noise)
    - Some projects might have their own template about structuring your report
  - Sending PRs:
    - Look at CONTRIBUTIONS.md and LICENSE.md first if they're present
    - In commercial settings the license might stipulate copyrights differently than GPL (where once code is commited you no longer have distribution rights over that code)
    - Keep the general hygiene we covered for commits, useful and reviewable in isolation
    - When you make changes to enable a feature, you should open a PR that says here's the feature with two separate commits in the PR and you mention that it contains two commits, one that makes changes to enable the feature and for the new feature alone, give review instructions (e.g. review commit by commit instead of the entire diff)
