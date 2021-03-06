# centimeterstoinches.js

JavaScript conversion of centimeters to inches.

[![Build Status](https://travis-ci.org/joshause/centimeterstoinches.svg?branch=master)](https://travis-ci.org/joshause/centimeterstoinches)
[![Codacy](https://api.codacy.com/project/badge/grade/5830a3190dd848b0a23ecc1dc31394a2)](https://www.codacy.com/app/joshua-ause/centimeterstoinches)
[![npm](https://img.shields.io/npm/v/centimeters-to-inches.svg)](https://www.npmjs.com/package/centimeters-to-inches)
[![npm](https://img.shields.io/npm/dm/centimeters-to-inches.svg)](https://www.npmjs.com/package/centimeters-to-inches)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Install

```
$ npm install centimeters-to-inches
```

## Usage

### Node.js

```js
var CentimetersToInches = require("centimeters-to-inches");
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

Jasmine

```bash
$ npm test
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
