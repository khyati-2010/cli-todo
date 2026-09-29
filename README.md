# Filesystem Todo CLI

A simple CLI based todo application built with Node.js.
Todos are stored in a `todos.json` file using Node.js's filesystem (fs) module.

## Features

* Add a todo
* Delete a todo
* Mark a todo as done
* Store todos in `todos.json`

## Setup

Clone the repository and run:

```bash
npm install
```

## Usage

### Add a todo

```bash
node index.js add "Learn Node.js"
```

### Delete a todo

```bash
node index.js delete 1
```

### Mark a todo as done

```bash
node index.js done 1
```

## Data Format

Todos are stored in `todos.json`:

```json
[
  {
    "id": 1,
    "name": "Learn Node.js",
    "done": true
  }
]
```
