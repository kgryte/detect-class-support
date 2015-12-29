Class Support
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Detect native [`class`][class] support.


## Installation

``` bash
$ npm install detect-class-support
```


## Usage

``` javascript
var isClassSupported = require( 'detect-class-support' );
```

#### isClassSupported()

Detects if a runtime environment supports ES2015 [`class`][class].

``` javascript
var bool = isClassSupported()
// returns <Boolean>
```


## Examples

``` javascript
var isClassSupported = require( 'detect-class-support' );

var bool = isClassSupported();
if ( bool ) {
	console.log( 'Environment has native class support.' );
} else {
	console.log( 'Environment lacks native class support.' );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g detect-class-support
```


### Usage

``` bash
Usage: hasclass [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```


### Examples

``` bash
$ hasclass
# => returns 'true' || 'false'
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/detect-class-support.svg
[npm-url]: https://npmjs.org/package/detect-class-support

[build-image]: http://img.shields.io/travis/kgryte/detect-class-support/master.svg
[build-url]: https://travis-ci.org/kgryte/detect-class-support

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/detect-class-support/master.svg
[coverage-url]: https://codecov.io/github/kgryte/detect-class-support?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/detect-class-support.svg
[dependencies-url]: https://david-dm.org/kgryte/detect-class-support

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/detect-class-support.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/detect-class-support

[github-issues-image]: http://img.shields.io/github/issues/kgryte/detect-class-support.svg
[github-issues-url]: https://github.com/kgryte/detect-class-support/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[class]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
