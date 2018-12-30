function sumOfMultiples(num) {
	let sum = 0;
	for (let i = 0; i < num; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	console.log(`The sum of all multiples of 3 or 5 below ${num} is ${sum}`);
}
sumOfMultiples(1000);