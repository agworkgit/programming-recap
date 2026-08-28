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
