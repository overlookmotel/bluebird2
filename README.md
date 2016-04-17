# bluebird2.js

# bluebird v2.x

## Current status

[![NPM version](https://img.shields.io/npm/v/bluebird2.svg)](https://www.npmjs.com/package/bluebird2)
[![Build Status](https://img.shields.io/travis/overlookmotel/bluebird2/master.svg)](http://travis-ci.org/overlookmotel/bluebird2)
[![Dependency Status](https://img.shields.io/david/overlookmotel/bluebird2.svg)](https://david-dm.org/overlookmotel/bluebird2)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/bluebird2.svg)](https://david-dm.org/overlookmotel/bluebird2)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/bluebird2/master.svg)](https://coveralls.io/r/overlookmotel/bluebird2)

## Usage

Exports [bluebird](https://www.npmjs.com/package/bluebird) Promise library v2.x.

Why on earth would you use this rather than bluebird itself? Well you probably wouldn't, and shouldn't.

Only reason is along with [bluebird3](https://www.npmjs.com/package/bluebird3) if you need to load both versions v2.x and v3.x of bluebird simultaneously, for example for running tests on a module which should work with either version.

```js
var Bluebird2 = require('bluebird2');
var Bluebird3 = require('bluebird3');
// Now you have both. Whoopee!
```

### `Bluebird.clone()`

This module adds one method to the Bluebird constructor: `.clone()`

`.clone()` returns a new independent instance of the Bluebird constructor.

```js
var Bluebird = require('bluebird2');
var BluebirdX = Bluebird.clone();

console.log(BluebirdX != Bluebird); // true
```

### `Bluebird.version`

The module adds `.version` property to the Bluebird constructor, containing the semver version of Bluebird.

```js
var Bluebird = require('bluebird2');
console.log(Bluebird.version); // e.g. '2.10.2'
```

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookmotel/bluebird2/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/bluebird2/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add an entry to changelog
* add tests for new features
* document new functionality/API additions in README
