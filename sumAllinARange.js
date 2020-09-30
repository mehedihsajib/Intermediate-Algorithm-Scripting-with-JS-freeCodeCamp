// PROBLEM: Sum of all in range

// INSTRUCTION: 
	// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
	// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


// SOLUTION-1:
function sumAll(arr) {
  var maxNum = Math.max(arr[0], arr[1])
  var minNum = Math.min(arr[0], arr[1])
  var sum = 0;
  for (var i = minNum; i <= maxNum; i++) {
    sum += i
  }
  return sum;
}
sumAll([1, 4]);



// SOLUTION-1:
function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);