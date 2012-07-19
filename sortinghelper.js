// Sorting helper for the quicksort test.

// Fisher Yates algo to perform the
// mixing/shuffle
function fisherYates (myArray) {
	var i = myArray.length;
	if ( i == 0 ) return false;
	while ( --i ) {
		var j = Math.floor( Math.random() * ( i + 1 ) );
		var tempi = myArray[i];
		var tempj = myArray[j];
		myArray[i] = tempj;
		myArray[j] = tempi;
	}
}

// building a random array
// with this implementation it is 'comparative' fast.
module.exports.randomArray = function (n) {
	var array = [], t_a;
	for (var i = n - 1; i >= 0; i--) {
		array.push(i);
	};
	t_a = fisherYates(array);
	return array;
}