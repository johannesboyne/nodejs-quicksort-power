#!/usr/local/bin/node

var quick = require('./quicksort'),
	sorthelper = require('./sortinghelper');

var hm 	= sorthelper.randomArray(100000000);
console.log('=> one hundred million');
console.time('100000000_quicksort'); quick.sort(hm); console.timeEnd('100000000_quicksort');
console.log('');
