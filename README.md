# calunar
Util for calculating lunar date.

[![NPM](https://badge.fury.io/js/article-parser.svg)](https://badge.fury.io/js/article-parser) ![Travis](https://travis-ci.org/ndaidong/article-parser.svg?branch=master)

### Installation

```
npm install calunar
```

### Usage

```
import Calunar from 'calunar';

let lunarDate = Calunar.solar2Lunar(25, 11, 2011, 7);
console.log(lunarDate); // return 1/11/2011
```

### API

##### solar2Lunar(dd, mm, yy, timeZone)

Comvert solar date dd/mm/yyyy to the corresponding lunar date.

```
Calunar.solar2Lunar(9, 2, 2016, 7); // return 2/1/2016
```

##### jdFromDate(dd, mm, yy)

Compute the (integral) Julian day number of day dd/mm/yyyy, i.e., the number of days between 1/1/4713 BC (Julian calendar) and dd/mm/yyyy.

Formula from http://www.tondering.dk/claus/calendar.html

```
Calunar.jdFromDate(12, 10, 1812); // return 2383164
```

##### jdToDate(jd)

Convert a Julian day number to day/month/year. Parameter jd is an integer.

```
Calunar.jdToDate(2383164); // return [12, 10, 1812]
```


## Test

```
npm install
mocha
```

 _* Ensure that you have [mocha](https://mochajs.org/) installed_


# License

The MIT License (MIT)
