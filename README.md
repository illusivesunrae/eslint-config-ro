# eslint-config-ro
This package extends `eslint:recommended` (see [ESLint documentation](https://eslint.org/docs/user-guide/configuring#using-eslintrecommended)) with rules specific to creating projects within the Rivet extended universe.

## Installation

You can include this package in your project by installing it via `npm`:
```
npm install --save-dev eslint-config-rivet
```

## Usage

Next you will need to configure the configuration for your project using one of the following options:

1. `package.json`

```
{
  "eslintConfig": {
    "extends": "eslint-config-rivet"
  }
}
```

2. `.eslintrc`

```
{
  "extends": "eslint-config-rivet"
}
```

3. `.eslintrc.js`

```
module.exports = {
  'extends': 'eslint-config-rivet'
}
```

## Build tools

### Gulp
Many traditional Rivet projects use `Gulp` to handle their build processes. This `ESLint` configuration is ideal for integrating with `Gulp`.

First, you will need to make sure that `Gulp` and its `ESLint` build tool are installed.

```
npm install --save-dev gulp gulp-eslint
```

Next, you will need to incorporate this into your `Gulp` setup. Below is an example `gulpfile.js`, which shows how to include the build tool in your file and how to write the linting task.

```
const { src } = require("gulp");
const eslint = require("gulp-eslint");

function lintJSBuild() {
  return src(["src/js/**/*.js", "!node_modules/**"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function lintJSWatch() {
  return src(["src/js/**/*.js", "!node_modules/**"])
    .pipe(eslint())
    .pipe(eslint.format());
}

```

We recommend writing separate functions for linting `build` versus `watch` tasks. For lint functions related to your `build` tasks we recommend including `.pipe(eslint.failAfterError());`. This will cause your `build` to fail if it encounters any error-level rules.

### rollup
Some Rivet projects may use `rollup` to bundle code together (usually as part of the `npm run build` script). It is also fairly easy to incorporate `ESLint` into the `rollup`-related task, rather than `Gulp` directly.

```
const rollup = require('rollup');
const { eslint } = require('rollup-plugin-eslint');

function compileJS() {
  return rollup
    .rollup({
      input: './src/js/' + package.name + '.js',
      plugins: [
        eslint({ throwOnError: true })
    ]
    })
    .then(bundle => {
      return bundle.write({
        file: './docs/js/' + package.name + '.js',
        format: 'umd',
        name: package.addOnName,
        sourcemap: true
      });
    });
}

```

Again, because this is a `build`-related task, we recommend that you set the `throwOnError` option to `true`, as this will cause your `build` to fail if it encounters any error-level rules.

### Additional integrations

ESLint has [integrations available for most of the major, modern code editors](https://eslint.org/docs/user-guide/integrations#editors).