# Vite browser polyfill problem

When running this vite project and opening http://localhost:3000 you get an error:

```
globalThis.js:1 Uncaught ReferenceError: global is not defined
    at globalThis.js:1
    at wrapper.js?v=79ef5480:11
    at polling-xhr.js:7
    at wrapper.js?v=79ef5480:11
    at index.js:2
    at wrapper.js?v=79ef5480:11
    at socket.js:1
    at wrapper.js?v=79ef5480:11
    at index.js:1
    at wrapper.js?v=79ef5480:11
```

See `src/main.ts` for the call to socket.io-client.

This error occurs in the package engine.io-client which is a dependency of socket.io-client.
But engine.io-client defines in its browser field of the package.json that ./globalThis.js shall be replaced by ./globalThis.browser.js.
This seems not to be concerned when building/serving this app.