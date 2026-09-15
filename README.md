# Simple Node.js Static File Server

A lightweight, zero-dependency (aside from `dotenv`) static file server built with Node.js native `http`, `fs`, and `path` modules using ES Modules.

## Features

- Serves static HTML files dynamically based on URL paths.
- Safe path resolution to prevent path traversal issues.
- Environment variable support via `dotenv` for custom port configuration.
- Automatic server restarts during development using `nodemon`.

## Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

## Project Structure

```text
your-project-folder/
├── folder/
│   └── index.html
├── .env
├── server.js
├── package.json
└── README.md
```
