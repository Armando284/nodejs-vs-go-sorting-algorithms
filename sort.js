// Start of the program
const fs = require('fs/promises')
const { performance } = require('perf_hooks')

async function loadArrayData() {
	try {
		const data = await fs.readFile('./inputs/randomNumbersArray.json', { encoding: 'utf8' })
		return JSON.parse(data)
	} catch (err) {
		console.error('Reading file error:', err)
	}
}

// BUBBLE SORT
function bubbleSort(array) {
	//Outer pass
	for (let i = 0; i < array.length; i++) {
		//Inner pass
		for (let j = 0; j < array.length - i - 1; j++) {
			//Comparing values in ascending order
			if (array[j + 1] < array[j]) {
				//Swapping values
				[array[j + 1], array[j]] = [array[j], array[j + 1]]
			}
		}
	}
	return array
}

// MERGE SORT
function merge(left, right) {
	const array = []
	// Break out of loop if any one of the array gets empty
	while (left.length && right.length) {
		// Pick the smaller among the smallest element of left and right sub arrays 
		if (left[0] < right[0]) {
			array.push(left.shift())
		} else {
			array.push(right.shift())
		}
	}
	// Concatenating the leftover elements
	// (in case we didn't go through the entire left or right array)
	return [...array, ...left, ...right]
}

function mergeSort(array) {
	const half = array.length / 2
	// Base case for exiting recursion
	if (array.length < 2) {
		return array
	}
	const left = array.splice(0, half)
	return merge(mergeSort(left), mergeSort(array))
}

function saveResult(method, array) {
	const filePath = `./outputs/node${method}.json`
	fs.writeFile(filePath, JSON.stringify(array, null, 4), err => {
		if (err) console.error('Writing file error: ', err)
	}).then(() => console.log(`Sorted array by method = ${method} saved here ${filePath} !`))
}

function main() {
	loadArrayData().then(data => {
		const array = data
		const array2 = [...array]
		// BUBBLE SORT
		console.log('Bubble Sort Started!')
		console.time('BubbleSort')
		const bubbleResult = bubbleSort(array)
		console.timeEnd('BubbleSort')
		// MERGE SORT
		console.log('Merge Sort Started!')
		console.time('MergeSort')
		const mergeResult = mergeSort(array2)
		console.timeEnd('MergeSort')
		// Save sorted arrays
		saveResult('BubbleSort', bubbleResult)
		saveResult('MergeSort', mergeResult)
	})
}

main()
