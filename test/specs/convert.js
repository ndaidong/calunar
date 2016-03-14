/**
 * Testing
 * @ndaidong
 */
/* global describe it */
/* eslint no-undefined: 0*/
/* eslint no-array-constructor: 0*/
/* eslint no-new-func: 0*/

import path from 'path';
import chai from 'chai';

chai.should();
var expect = chai.expect;

var rootDir = '../../src/';

var LunarConvertor = require(path.join(rootDir, 'calunar'));

describe('.solar2Lunar(dd, mm, yy, timeZone)', () => {

  let samples = [
    {
      solar: '25/11/2011',
      lunar: '1/11/2011'
    },
    {
      solar: '25/12/2011',
      lunar: '1/12/2011'
    },
    {
      solar: '21/11/2012',
      lunar: '8/10/2012'
    },
    {
      solar: '12/3/2013',
      lunar: '1/2/2013'
    },
    {
      solar: '9/7/2014',
      lunar: '13/6/2014'
    },
    {
      solar: '18/12/2015',
      lunar: '8/11/2015'
    },
    {
      solar: '6/2/2016',
      lunar: '28/12/2015'
    },
    {
      solar: '9/2/2016',
      lunar: '2/1/2016'
    }
  ];

  const TIMEZONE = 7;

  samples.forEach((item) => {
    let solar = item.solar.split('/');
    let lunar = item.lunar.split('/');
    let dd = Number(solar[0]);
    let mm = Number(solar[1]);
    let yy = Number(solar[2]);
    let dde = Number(lunar[0]);
    let mme = Number(lunar[1]);
    let yye = Number(lunar[2]);
    let result = LunarConvertor.solar2Lunar(dd, mm, yy, TIMEZONE);
    let ddr = Number(result[0]);
    let mmr = Number(result[1]);
    let yyr = Number(result[2]);
    let sd = [ dd, mm, yy ].join('/');
    let ld = [ dde, mme, yye ].join('/');
    let ad = [ ddr, mmr, yyr ].join('/');
    it(`${sd} solar => ${ld} lunar`, (done) => {
      expect(ad).to.equal(ld);
      done();
    });
  });
});
