# OneFx

This project is the OneFx server to enable blazing-fast full-stack web development with React, GraphQL, KOA, TypeScript, AVA, Webpack, etc.

```bash
npm install

# test
# run all tests
npm run test
# run a single test file
npm run ava ./path/to/test-file.js
```

To run a single test case, follow instructions [here](https://github.com/avajs/ava/blob/master/docs/01-writing-tests.md#running-specific-tests).

## debug

- `npm run build` to build locally
- `npm link` to register locally
- run `npm link onefx`in the path of target project to soft link the lib to project to test

## Scripts

- `npm run build`: build source code from `src` to `dist`
- `npm publish`: publish code to npm
- `npm run changelog-patch` bump version patch (bug fixes)
- `npm run changelog-minor` bump version minor (new features)
- `npm run changelog-major` bump version major (breaking change)
