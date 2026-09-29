# Todo App (TypeScript + Express)

A server-rendered todo list built with Express 5 and EJS, written in TypeScript. Tasks are kept in memory and managed through plain HTML form posts. There is no client-side JavaScript app.

## Features

- Add a task with a title and a type: **Personal** or **Work**
- Mark a task as completed, or toggle it back
- Delete a task
- Empty-state message when there are no tasks

Tasks are stored in memory only (see `src/services/task.service.ts`), so they are lost whenever the server restarts.

## Tech stack

| Area | Used |
|------|------|
| Language | TypeScript 5 (`strict` mode, compiled to CommonJS / ES2020) |
| Server | Express 5, body-parser |
| Views | EJS templates |
| Styling | `public/css/style.css`, plus Bootstrap 5.3 and Font Awesome 6 loaded from CDNs in `views/index.ejs` |

## Folder structure

```
.
├── public/
│   └── css/style.css                  # Static assets served at /
├── views/
│   └── index.ejs                      # The only page (task list + form)
├── src/
│   ├── server.ts                      # Entry point: starts the HTTP server
│   ├── app.ts                         # Express app setup (views, static files, body parsing, routes)
│   ├── config/index.ts                # Runtime config (port)
│   ├── routes/task.routes.ts          # URL to controller mapping
│   ├── controllers/task.controller.ts # Request handlers
│   ├── services/task.service.ts       # TaskManager: in-memory task storage
│   ├── models/task.model.ts           # Task base class, PersonalTask, WorkTask
│   └── interfaces/                    # ITask, ITaskManager
├── tsconfig.json                      # Compiles src/ to dist/
└── package.json
```

`views/` and `public/` sit outside `src/` because the TypeScript compiler doesn't copy them. At runtime, `dist/app.js` resolves both with `../views` and `../public`.

## Routes

| Method | Path | Action |
|--------|------|--------|
| GET | `/` | Render the task list |
| POST | `/add` | Create a task from the form fields `title` and `type` (`work` or `personal`) |
| POST | `/toggle/:id` | Toggle a task's completed state |
| POST | `/delete/:id` | Delete a task |

Every POST redirects back to `/`.

## Prerequisites

- Node.js 18 or newer (the minimum Express 5 and body-parser 2 require)
- npm

## Setup

```bash
git clone https://github.com/CodeWith-vivek/typescript-todo.git
cd typescript-todo
npm install
```

## Environment variables

There is no `.env` file or `.env.example`, and the app doesn't load `.env` files. Set variables in your shell instead.

| Name | Purpose | Default |
|------|---------|---------|
| `PORT` | Port the HTTP server listens on | `3000` |

## Development

```bash
npm run dev
```

This compiles once with `tsc` and then starts the server. There is no file watcher or auto-reload, so run it again after each change.

## Build and run

```bash
npm run build   # tsc: compiles src/ into dist/
npm start       # node dist/server.js
```

Then open http://localhost:3000, or the port you set in `PORT`.

## Tests

No tests have been written yet. `npm test` is still the npm placeholder and exits with an error.

## Deployment

The repo has no deployment configuration: no Dockerfile, CI workflow or hosting config. To run it on any Node.js host:

1. `npm install`
2. `npm run build`
3. `npm start`, with `PORT` set if the host requires it

The server has to run from the project root layout, so that `dist/`, `views/` and `public/` stay side by side. Tasks are kept in memory, so they don't persist across restarts or get shared between multiple instances.

## License

ISC (as declared in `package.json`; the repo has no LICENSE file).
