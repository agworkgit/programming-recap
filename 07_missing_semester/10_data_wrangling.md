# Lecture 4: Data Wrangling (2020)

- Lecture: https://www.youtube.com/watch?v=sz_dsktIjt4

## Intro

- The basic idea is that you have data in one format and you want it in some different format.

## Filtering Data with GREP

- `ssh server-name 'journalctl | grep ssh | grep "Disconnected from"' | less`
- `less` is a terminal pager program used to view the contents of a text file one screen at a time.

## RegEx Debugger

- A RegEx debugging tool can be found at: regex101.com

## sed

- `sed` is a stream editor
- One of the most common things you will do with this tool is to run replacement expressions over an input stream.
- Example: `cat server.log | sed 's/.*Disconnected from //' | less`
  - Replace all 'Disconnected from ' with ' '
- `echo 'abcaba' | sed -E 's/(ab)*//g'` this RegEx in `sed` will replace all 'ab' ocurrances with with nothing (the result is the same as removing them), meaning you will get only 'ca'
- `-E` is required in `sed` to force modern RegEx patterns
- `cat server.log | sed -n 's/.*Disconnected from \(user [a-zA-Z]* [0-9.]* port [0-9]*\).*/\1/p''` matches only strings of the form 'user sam 192.168.1.55 port 49201'
  - `^` will anchor the starting point
  - `$` will anchor the end point
- `sort | uniq -c` will give you a sorted list of unique values with a count of how many of each value is repeated
- `wc -l` will give you the number of lines
- `sort -nk1,1` does an ascending numeric sort of the first column
- `tail -n10` gives only the last 10 lines (the top 10 if you will)

## awk

- `awk` is a column based stream processor
- So `awk '{print $3}'` will print the third column (username) in this case
- `paste` is a command that takes a bunch of lines and pastes them together into a single line `-s` with a delimiter `-d,` comma
