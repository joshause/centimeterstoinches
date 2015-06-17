# centimeterstoinches.js

JavaScript conversion of centimeters to inches.

[![Build Status](https://travis-ci.org/joshause/centimeterstoinches.svg?branch=master)](https://travis-ci.org/joshause/centimeterstoinches)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Usage

### Node.js

```js
var CentimetersToInches = require("./centimeterstoinches");
var cti = new CentimetersToInches();
cti.get(1);
// => 0.393700787402
```

### Browser

(Add necessary `<script>` tag reference to `centimeterstoinches.js`)

```js
// CentimetersToInches is autoloaded to window.CentimetersToInches
var cti = new CentimetersToInches();
cti.get(1);
// => 0.393700787402
```

## Tests

```bash
$ jasmine
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
