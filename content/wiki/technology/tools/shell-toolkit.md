---
title: Shell Toolkit
created:
  - 2026-06-08
date modified: Monday, June 9th 2026, 6:00:00 pm
aliases:
  - Shell Toolkit
  - CLI Toolkit
  - Unix Tools
  - grep
  - cut
  - tr
  - xargs
  - regex
category: Technology
tags:
  - Shell
  - CLI
  - Unix
  - Tools
  - DataEngineering
banner: https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1400
publish: true
---

> "The shell is the universal glue of computing. Master the pipe, and you master composition."
> <cite>— Unix philosophy, paraphrased</cite>

---

<span class="at-kicker">Tools · CLI · Unix</span>

# Shell Toolkit

<p class="at-lead">
The Unix shell and its core utilities — grep, cut, tr, xargs, and regular expressions — form
the original data-processing pipeline. Long before Spark or Pandas, engineers chained these
tools to transform, filter, and analyse text streams. They remain indispensable for log
analysis, quick data inspection, and automation in modern data engineering and DevOps workflows.
</p>

<span class="at-stat">pipes</span> &nbsp;·&nbsp; <span class="at-stat">streams</span> &nbsp;·&nbsp; <span class="at-stat">filters</span> &nbsp;·&nbsp; <span class="at-mark">composition over complexity</span>

<span class="at-kicker">grep</span>

## Pattern Matching in Streams

`grep` searches text for patterns using regular expressions. It is the most frequently used
Unix filter.

```bash
# Basic search
grep "error" app.log

# Case-insensitive
grep -i "error" app.log

# Whole-word match (avoids matching "errors")
grep -w "error" app.log

# Invert match (lines NOT containing pattern)
grep -v "INFO" app.log

# Show context: 3 lines before and after match
grep -B 3 -A 3 "Exception" app.log

# Recursive search in directory
grep -r "TODO" ./src/

# Count occurrences per file
grep -c "error" *.log

# Output only filenames with matches
grep -l "error" *.log
```

> [!tip] `grep` with regex
> `grep` supports basic (`-G`), extended (`-E`, or `egrep`), and Perl-compatible (`-P`) regex.
> Use `grep -E` for `{n,m}` quantifiers and `|` alternation without escaping.

---

<span class="at-kicker">cut & tr</span>

## Column Extraction & Character Translation

### cut — extract columns

```bash
# Extract character range
cut -c 1-10 filename

# Extract field by delimiter
cut -d ' ' -f 5 filename          # 5th space-separated field
cut -d ':' -f 1 /etc/passwd       # usernames
cut -d ',' -f 1,3 data.csv        # 1st and 3rd columns
```

### tr — translate characters

```bash
# Uppercase to lowercase
cat file | tr 'A-Z' 'a-z'

# Squeeze repeated characters
tr -s ' '                    # collapse multiple spaces to one

# Delete characters
tr -d '\r'                   # remove Windows carriage returns

# Replace specific characters
echo "hello world" | tr ' ' '-'   # hello-world
```

> [!info] `tr` works on single characters only
> `tr` is not a string replacement tool — it maps individual characters. For multi-string
> replacement, use `sed` or `awk`.

---

<span class="at-kicker">xargs</span>

## From Stream to Arguments

`xargs` converts standard input into arguments for another command — bridging the gap between
output-producing and argument-consuming tools.

```bash
# Basic: echo every line
cat files.txt | xargs echo

# Limit arguments per command
find . -name "*.py" | xargs -n 10 pylint

# Parallel execution (4 processes)
find . -name "*.csv" | xargs -P 4 -I {} python process.py {}

# Placeholder for complex commands
ls | xargs -I {} mv {} backup_{}

# Handle filenames with spaces (null-delimited)
find . -name "*.txt" -print0 | xargs -0 rm

# Generate files
seq 100 | xargs -I {} touch {}.txt
```

> [!warning] The argument limit
> Operating systems limit the maximum command-line length. `xargs` automatically splits
> arguments into multiple command invocations. This is why `find ... | xargs rm` succeeds
> where `rm $(find ...)` might fail with "argument list too long."

---

<span class="at-kicker">Regular Expressions</span>

## Pattern Language

Regular expressions describe patterns in text. They are used by `grep`, `sed`, `awk`, `python`,
`pandas`, and virtually every text-processing tool.

### Character classes

| Pattern | Matches |
|---------|---------|
| `.` | Any single character (except newline) |
| `\d` | Digit `[0-9]` |
| `\w` | Word character `[a-zA-Z0-9_]` |
| `\s` | Whitespace (space, tab, newline) |
| `\b` | Word boundary |
| `[abc]` | Any character in the set |
| `[^abc]` | Any character NOT in the set |

### Anchors & quantifiers

| Pattern | Matches |
|---------|---------|
| `^` | Start of string |
| `$` | End of string |
| `*` | 0 or more |
| `+` | 1 or more |
| `?` | 0 or 1 |
| `{n}` | Exactly $n$ |
| `{n,m}` | Between $n$ and $m$ |

### Groups & alternation

| Pattern | Matches |
|---------|---------|
| `\|` | Either/or (`cat\|dog`) |
| `(...)` | Capture group |
| `(?:...)` | Non-capturing group |
| `\1`, `\2` | Backreference to captured groups |

> [!example] Practical regex patterns
> ```bash
> # Email-like pattern
grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" contacts.txt
>
> # IP address
grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" access.log
>
> # Date (YYYY-MM-DD)
grep -E "[0-9]{4}-[0-9]{2}-[0-9]{2}" records.txt
>
> # Empty lines
grep -E "^$" file.txt
> ```

---

<span class="at-kicker">Pipelines</span>

## Composing Filters

The power of Unix tools lies in composition via pipes:

```bash
# Extract unique error codes from logs
cat app.log \
  | grep "ERROR" \
  | cut -d' ' -f3 \
  | sort \
  | uniq -c \
  | sort -nr \
  | head -20

# Find large files, format output
find /data -type f -size +100M \
  | xargs ls -lh \
  | awk '{print $5, $9}' \
  | sort -hr

# Process CSV: extract, transform, aggregate
cat sales.csv \
  | cut -d',' -f2,5 \
  | grep "2024" \
  | tr ',' '\t' \
  | sort -k2 -nr
```

> [!info] The Unix philosophy
> 1. Write programs that do one thing and do it well.
> 2. Write programs to work together.
> 3. Write programs to handle text streams, because that is the universal interface.

---

<span class="at-kicker">Shell Shortcuts</span>

## Working Faster in the Terminal

```bash
!ls          # Run the last command starting with 'ls'
!!           # Run the previous command (useful with sudo: sudo !!)
!-2          # Run the second-to-last command
Ctrl+R       # Reverse search through command history
Ctrl+A       # Move cursor to beginning of line
Ctrl+E       # Move cursor to end of line
Ctrl+U       # Clear from cursor to beginning
Ctrl+K       # Clear from cursor to end
Alt+.        # Insert last argument of previous command
```

### Environment variables

```bash
printenv              # List all environment variables
export VAR=value      # Set variable for current shell and children
unset VAR             # Remove variable
PATH=$PATH:/new/bin   # Append to PATH
```

> [!tip] `tldr` over `man`
> `tldr` (Too Long; Didn't Read) provides practical examples of commands, unlike `man` which
> provides exhaustive reference. Install via `npm install -g tldr` or `pip install tldr`.

---

<span class="at-kicker">Network Utilities</span>

## Quick Diagnostics

```bash
ping google.com          # Test host reachability
ip addr                  # Show network interfaces and IPs
ss -tlnp                # Show listening TCP ports and processes
traceroute google.com    # Trace packet route
netstat -an             # Show all network connections
dig google.com          # DNS lookup
curl -I https://api.com  # HTTP headers
wget -O - https://api.com/data.csv   # Download to stdout
```

## Interesting facts

- The pipe (`|`) was invented by Doug McIlroy in 1964 and added to Unix in 1973. McIlroy later
  said it was the most important Unix innovation because it enabled composition.
- `grep` stands for "g/re/p" — "globally search for a regular expression and print" from the
  `ed` editor.
- A single well-crafted pipeline can replace hundreds of lines of Python for log analysis tasks.
  Performance is often competitive because each tool is a compiled C program.

## Interview questions

1. Explain the difference between `grep`, `egrep`, and `fgrep`. When would you use each?
2. How does `xargs` solve the "argument list too long" problem?
3. Write a pipeline that finds the 10 most frequent words in a text file.
4. What is the difference between capturing `(...)` and non-capturing `(?:...)` groups in regex?
5. How would you remove all blank lines from a file using only standard Unix tools?
6. Explain why `find ... -print0 | xargs -0` is safer than `find ... | xargs`.

## Related pages

> [!grid]
>
>> [!card] Remote Access
>> [[ssh|SSH & Tunneling]] · [[ssh-tunneling|SSH Tunneling]]
>
>> [!card] Terminal
>> [[tmux|Tmux]] · [[vim|Vim]]
>
>> [!card] Programming
>> [[python/python-patterns|Python Patterns]] · [[python/pandas-patterns|Pandas Patterns]]
>
>> [!card] DevOps
>> [[../software-engineering/devops-sre|DevOps & SRE]] · [[../software-engineering/docker|Docker]] · [[../software-engineering/kubernetes|Kubernetes]]
