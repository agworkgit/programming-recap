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
- Each new snapshot you create will refer to the previous snapshot: `O <-- O <-- O`
- Splitting from a parent shapshot is called "branching".
- And joining two parallel snapshots "branches" is called "merging".
- What does a blob contain? An array of bites.
- What does a tree contain? `map<String (name), tree || blob>`
- What does a commit (a node in the history graph) contain?

```pseudocode
type commit = Struct {
    snapshots: tree,
    parents: Array<commit>,
    author: String,
    message: String
}
```

- Note: not all data is stored, most things are pointers to the actual data.

- Git also unifies everything under an "object"

```pseudocode
type object = blob/tree/commit
```

- Then Git stores your data in an `object store`, where the data is content addressed by a SHA-1 hash.

```pseudocode
objects = map<String (SHA-1), object>

def Store(obj):
    id = SHA-1(obj)
    object<id> = obj

def Load(id):
    return object<id>
```

### References

- Map human readable names to SHA-1 hashes.
- What is SHA-1? A hash function, that takes in some data that's an array of bytes and returns 160 bytes of data, you can think of it as randomly but deterministically mapping arbitrary length data to a fixed length representation. If you hash two different things it is very unlikely that you will ever get the same output from the hash function.

```pseudocode
references = map<String, String>
```

- Think of `main`(HEAD, points to this), when you make a commit, `main` will point to the active branch and it's last commit.
- If by any chance you happen to commit an API key to GitHub, remember that you can't go back and change the commit once it's added to the repo, the only way to manage this type of situation is to invalidate the API key or delete it at the source to prevent access.
- However git does come with some tools like the `git rebase` command that can re-write the history from the point you change something that was a couple of commits back.

### Remote Repositories

- GitHub is a software service that hosts repositories remotely online.
- And there are other similar services such as GitLab, etc...
- Git itself is an Open Source software and runs repos locally on your machine.

### Git Commands

- `git init` will initialise an empty repo in the current working directory.
- `git status` will show you the current status of the repo, if there are any uncommited changes, etc...
- `git help <command>` will show you a guide of the command you want to run.
-
