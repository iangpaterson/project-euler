/*
  Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function fibonacciSeq(num) {
  // create the array 1 to num
  let myArray = [];
  for (let i = 1; i < num; i++) {
    myArray.push(i);
  }
  console.log(myArray); // [1,2...num]
  
  // create the Fibonacci sequence up to num
  let myNewArray = [myArray[0], myArray[1]];
  for (let j = 2; j < myArray.length - 1; j++) {
    myNewArray[j] = myNewArray[j-2] + myNewArray[j-1];
  }
  console.log(`The Fibonacci sequence is ${myNewArray}`);

  // calculate the sum of all even numbers in the sequence up to num
  let runningTotal = 0;
  for (let k = 0; k < myNewArray.length; k++) {
    if (myNewArray[k] % 2 == 0) {
      runningTotal += myNewArray[k];
    }
  }
  //let answer = runningTotal.toExponential();
  console.log(`The sum of all even numbers in the Fibonacci sequence up to ${num} is ${runningTotal}`);
  console.log(myNewArray);
}
fibonacciSeq(34);

/*function fibonacciSeq(maxNo) {
    let theSeq = [1,2];
	for (let i = 0; i < maxNo; i++) {
		theSeq[i+2] = theSeq[i] + theSeq[i+1];
	}
	console.log(`The Fibonacci sequence of numbers that does not exceed ${maxNo} is ${theSeq}`);
}
fibonacciSeq(30);*/