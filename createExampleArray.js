// Creates a file with an array of random numbers ready to be sorted!
const fs = require('fs')

const array = []
const ARRAY_LENGTH = 1000000

function fillArrayWithRandomNumbers(array, arrayLength = 1) {
	for (let index = 0; index < arrayLength; index++) {
		array.push(Math.floor(Math.random() * arrayLength))
	}
}

fillArrayWithRandomNumbers(array, ARRAY_LENGTH)
console.log(array)

fs.writeFile('./randomNumbersArray.json', JSON.stringify(array, null, 4), err => {
	if (err) console.error('Writing file error: ', err)
})