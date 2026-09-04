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
  - **Filing good bug reports:**
    - Bring along enough context for someone else to reporoduce the problem (environment, configuration files)
    - What you expected to see vs what actually happened
    - An ordered list about the steps to reproduce the bug
    - Include what you already tried
    - The best thing to do is a minimal reproducible example
    - Search whether there is another bug report about the same thing already (avoid duplication and noise)
    - Some projects might have their own template about structuring your report
  - **Sending PRs:**
    - Look at CONTRIBUTIONS.md and LICENSE.md first if they're present
    - In commercial settings the license might stipulate copyrights differently than GPL (where once code is commited you no longer have distribution rights over that code)
    - Keep the general hygiene we covered for commits, useful and reviewable in isolation
    - When you make changes to enable a feature, you should open a PR that says here's the feature with two separate commits in the PR and you mention that it contains two commits, one that makes changes to enable the feature and for the new feature alone, give review instructions (e.g. review commit by commit instead of the entire diff)
    - Keep in mind that the maintainer accepts responsibility for what you're adding to their project
    - Forking is a measure of "last resort", e.g. the original project is no longer maintained, or some other valid reason, not just to implement a small change that works only for you
  - **Revewing:**
    - We tend to think of this as Junior submits pull request and Senior reviews until the work becomes good
    - Reviews are just an asyncronous way for engineers to talk about code
    - E.g. someone proposes a change, someone else then thinks about that change, and then back and forth what is good/bad about that change
    - Remember that the reviews are not about the person they're about the code itself detached from any other context
    - It's a great way to expand your abilities as an engineer
    - Recommendations:
      - Prefer actionable comments (e.g. tell the contributor what to do instead, explain the bad patterns), this starts a conversation if a trade-off is involved
      - Explain why you think something isn't right in the review (give the context)
      - Distinguish in your comments between blocking changes (functionality critical) and nits (take it or leave it, not very detrimental to the functionality)
      - Point it out when someone made a really cool choice, or did something in a really good way
  - **Education:**
    - Super useful to get better at, learn how to ask better questions in such a way that you get answers that are useful to you
    - Julia Evans has some excellent blog posts on “How to ask good questions” and “How to get useful answers to your questions” that are worth reading.
    - State what you know first before presenting the question
    - Ask YES-NO questions, you'll find out quickly what you understood and what you did not
    - Put as much detail as you can in your YES-NO question
    - When you ask something admit clearly the things that you don't understand
    - Don't accept an incomplete answer to a non-trivial question when you don't understand it, but don't overstay your welcome!
    - Do some research yourself first, before asking!
  - **AI Etiquette:**
    - When you use AI in whatever from to contribute to your work, you need to disclose that you've done so, it's not about shame, it's about setting expectations for your output and ensuring that the resulting work gets the appropriate level of review
    - Specify which parts you used AI for and on which ones you did not
    - Follow the norms and expectations of the teams, companies that you work with (e.g. LLMs upload data to the cloud, you don't want confidential health data, financial data, legal data, or any other type of tightly controlled data escaping)
    - Bear in mind that by using LLMs to produce a majority of your work you will learn a lot less from the process, it's a trade-off you should balance.
