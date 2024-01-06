vitest browser mode tap reporter snapshot access error

```sh
$ pnpm i


$ pnpm test run
...
 ❯ test/repro.test.ts (1)
   × repro

  [ Failed Tests 1 ]

 FAIL  test/repro.test.ts > repro
Unknown Error: Access denied to "/inaccesible/path". See Vite config documentation for "server.fs": https://vitejs.dev/config/server-options.html#server-fs-strict.
 ❯ WebSocket.emit node:events:517:28
 ❯ WebSocket.emit node:domain:489:12
 ❯ Receiver.emit node:events:517:28
 ❯ Receiver.emit node:domain:489:12

 Test Files  1 failed (1)
      Tests  1 failed (1)


$ pnpm test run -- --reporter=tap
...

TAP version 13
1..1
not ok 1 - test/repro.test.ts # time=3.00ms {
    1..1
    not ok 1 - repro # time=2.00ms
        ---
        error:

  [ Unhandled Error ]

TypeError: Cannot read properties of undefined (reading 'replace')
 ❯ yamlString node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/reporters.7Y4WN6gc.js:2038:18
 ❯ TapReporter.logErrorDetails node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/reporters.7Y4WN6gc.js:2062:30
 ❯ node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/reporters.7Y4WN6gc.js:2095:18
 ❯ TapReporter.logTasks node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/reporters.7Y4WN6gc.js:2086:30
 ❯ TapReporter.logTasks node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/reporters.7Y4WN6gc.js:2078:14
 ❯ TapReporter.onFinished node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/reporters.7Y4WN6gc.js:2112:10
 ❯ node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/node.wTZytysZ.js:8443:51
 ❯ Vitest.report node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/node.wTZytysZ.js:8441:38
 ❯ node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/node.wTZytysZ.js:8176:18
 ❯ Vitest.runFiles node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/node.wTZytysZ.js:8179:12
 ❯ Vitest.start node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/node.wTZytysZ.js:8074:7
 ❯ startVitest node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/vendor/node.wTZytysZ.js:15085:5
 ❯ start node_modules/.pnpm/vitest@1.1.3_@vitest+browser@1.1.3/node_modules/vitest/dist/cli.js:143:17
```
