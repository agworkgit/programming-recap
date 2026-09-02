# Lecture 5: Version Control & Git

## Definition

- A Version Control System (VCS) is a piece of software that's used to track changes to your source code and files.
- So these tools help maintain a history of the changes you make to the software you're wiriting and facilitate collaboration through GitHub.
- Another benefit is the ability of working on parallel branches of the same project indepedently.

## Data Model

### Snapshots

- The state of a directory and everything inside it.
- In git terminology a file is called a "blob", and a folder is called a "tree".
- Example: `<root> (tree) -> <foo> (tree) -> [bardock] (blob)`
- With this we now want to maintain a history, by storing different snapshots, i.e. version 1, version 2, version 3, etc... and you can see how something is changing with time by looking at different snapshots.
- Git is a directed acyclic graph of snapsots (a DSA concept).
- Each new snapshot you create will refer to the previous snapshot: O <-- O <-- O
- Splitting from a parent shapshot is called "branching".
- And joining two parallel snapshots "branches" is called "merging".
