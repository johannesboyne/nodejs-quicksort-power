#!/usr/local/bin/node

var quick = require('./quicksort'),
	sorthelper = require('./sortinghelper');

var t 	= sorthelper.randomArray(10),
	h 	= sorthelper.randomArray(100),
	k 	= sorthelper.randomArray(1000),
	tk 	= sorthelper.randomArray(10000),
	hk	= sorthelper.randomArray(100000),
	m 	= sorthelper.randomArray(1000000);

console.log('=> ten');
console.time('10_quicksort'); quick.sort(t); console.timeEnd('10_quicksort');
console.log('');
console.log('=> one hundred');
console.time('100_quicksort'); quick.sort(h); console.timeEnd('100_quicksort');
console.log('');
console.log('=> one thousand');
console.time('1000_quicksort'); quick.sort(k); console.timeEnd('1000_quicksort');
console.log('');
console.log('=> ten thousand');
console.time('10000_quicksort'); quick.sort(tk); console.timeEnd('10000_quicksort');
console.log('');
console.log('=> one hundred thousand');
console.time('100000_quicksort'); quick.sort(hk); console.timeEnd('100000_quicksort');
console.log('');
console.log('=> a million');
console.time('1000000_quicksort'); quick.sort(m); console.timeEnd('1000000_quicksort');
console.log('');
