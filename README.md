nodejs-quicksort-power
======================

node.js' Power! Running a quick sort algorithm with an unordered list.

I used the quicksort algorithm from http://www.sourcecodesworld.com/articles/java/java-data-structures/Optimizing_Quicksort.asp
the random array list looks like `[ 8, 2, 9, 6, 7, 3, 1, 0, 5, 4 ]` (only much longer ;)
look at the src! To execute it on your local machine, use the `run.sh`!

```shell
=> ten
10_quicksort: 0ms

=> one hundred
100_quicksort: 1ms

=> one thousand
1000_quicksort: 0ms

=> ten thousand
10000_quicksort: 2ms

=> one hundred thousand
100000_quicksort: 9ms

=> a million
1000000_quicksort: 109ms

=> ten million
10000000_quicksort: 1378ms

FATAL ERROR: JS Allocation failed - process out of memory (one hundred million digits)
```

Yeah what a pity, there we got a restriction. Sorting a one hundred million digits long array is too much. If anyone has got a solution, please share it!

So, have fun with it!