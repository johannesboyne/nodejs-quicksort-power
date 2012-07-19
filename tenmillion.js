#!/usr/local/bin/node

var quick = require('./quicksort'),
	sorthelper = require('./sortinghelper');

var tm 	= sorthelper.randomArray(10000000);
console.log('=> ten million');
console.time('10000000_quicksort'); quick.sort(tm); console.timeEnd('10000000_quicksort');
console.log('');
