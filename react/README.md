# Social-sandbox
# Public free apis list - https://publicapis.dev/

---

## 🛠 Troubleshooting & Performance Fixes

If you encounter issues like slow performance, unexpected behavior, or Vite not responding correctly, try the following fixes:

### 🧹 Clean Dependencies & Cache
Sometimes, stale dependencies or Vite's cache can cause problems. To remove and reinstall everything, run:

```sh
rm -rf node_modules .vite
npm install
```

```sh
pkill -f vite
```

---

# Project Scripts Guide

This file provides an explanation of the scripts used in the `package.json` file.

## Development & Build Scripts

### Run a project in different modes

```shell
npm run start:dev    #  Runs the project in development mode using Vite.
npm run start:stage  # Starts the project in staging mode (same as development mode for now).
npm run start:prod   #  Starts the project in production mode.
```

### Build project

```shell
npm run build:dev    # Compiles TypeScript (`tsc -b`) and builds the project for development mode.
npm run build:stage  # Compiles TypeScript and builds the project for staging mode.
npm run build:prod   # Compiles TypeScript and builds the project for production mode.
npm run preview      # Serves the production build locally using Vite.
```

## Linting & Formatting

```shell
npm run lint       # Runs ESLint to check for code issues.
npm run lint:fix   # Runs ESLint and automatically fixes issues in `.ts`, `.tsx`, `.js`, and `.jsx` files.
npm run prettier   # Run Prettier to format all files
npm run depcheck   # Check for unused or missing dependencies
```

## Testing

### Run all tests:
```shell
npm run test        # Run Vitest tests
npm run test:all    # Run both Jest and Vitest tests
```

### Jest Tests:
```shell
npm run jest        # Run all Jest tests
npm run jest:watch  # Run Jest in watch mode
npm run jest:coverage # Run Jest with coverage report
```

### Vitest Tests:
```shell
npm run vitest        # Run all Vitest tests
npm run vitest:watch  # Run Vitest in watch mode
npm run vitest:coverage # Run Vitest with coverage report
```

## End-to-End Testing with Cypress
```shell
npm run cypress:open  # Open the Cypress test runner
npm run cypress:run   # Run all Cypress tests in the terminal
```
