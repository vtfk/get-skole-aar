![Tests](https://github.com/vtfk/get-skole-aar/workflows/Tests/badge.svg)
[![NPM](https://img.shields.io/npm/v/get-skole-aar.svg)](https://www.npmjs.com/package/get-skole-aar)
[![Coverage Status](https://coveralls.io/repos/github/vtfk/get-skole-aar/badge.svg?branch=main)](https://coveralls.io/github/vtfk/get-skole-aar?branch=main)
[![Code Climate](https://codeclimate.com/github/vtfk/get-skole-aar/badges/gpa.svg)](https://codeclimate.com/github/vtfk/get-skole-aar)

# get-skole-aar

Returns school year

## Installation

```sh
$ npm i get-school-year
```

## Usage

```JavaScript
const getSchoolYear = require('get-school-year')

getSchoolYear('2020-08-15') //=> 2020/2021
getSchoolYear('2020-02-01') //=> 2019/2020
getSchoolYear('2019-04-01') //=> 2018/2019
```

## License

[MIT](LICENSE)