# Overview

The `isBrowser` function determines if the current JavaScript runtime environment is a web browser. This is useful for writing code that needs to behave differently when running in a browser versus a server environment like Node.js.

# API

##### Parameters

- None.

##### Return Value

- `true`: If the runtime environment is a web browser.
- `false`: Otherwise.

# Examples

1. Checking if the current environment is a web browser

```typescript
import isBrowser from 'path-to-isBrowser';

if (isBrowser()) {
  console.log('Running in a web browser.');
} else {
  console.log('Not running in a web browser.');
}
```
