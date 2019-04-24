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
module.exports ={
  "extends": "eslint-config-rivet"
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
const { dest, series, src, watch } = require("gulp");
const eslint = require("gulp-eslint");

function lintJS() {
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
