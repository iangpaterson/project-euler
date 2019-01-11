/*
	Largest palindrome product
	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
	Find the largest palindrome made from the product of two 3-digit numbers.
*/

const productArray = []; //	the product of all 3-digit integers
let productStrings = []; // convert all products to strings
let palindromesAsStrings = []; // reverse each individual string
let potentialPalindromes = []; // convert all reversed products to integers
let actualPalindromes = []; // all actual Palindromes

//	Build the array for the product of all 3-digit integers
for (let i = 999; i > 99; i--) {
	for (let j = 999; j > 99; j--) {
		productArray.push(i * j);
	}
}
// create new array with all products (potentialPalindromes) as strings
productStrings = productArray.map(String);

// Build a new array with the numbers reversed as integers
for (let k = 0; k < productStrings.length; k++) {
	palindromesAsStrings[k] = productStrings[k].split("").reverse().join("");
	potentialPalindromes[k] = parseInt(palindromesAsStrings[k],10);
}

for (let l = 0; l < potentialPalindromes.length; l++) {
	if (potentialPalindromes[l] == productArray[l]) {
		actualPalindromes.push(potentialPalindromes[l]);
	}
}

let answer = Math.max(...actualPalindromes); // reveal the highest Palindrome
console.log(`The largest Palindrome is ${answer}`);