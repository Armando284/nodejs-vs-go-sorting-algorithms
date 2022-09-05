# Node Js Vs Go Sorting Algorithms

A test of speed for sorting algorithms bubble sort and merge sort in Node Js and Go

## Installations

You need Node Js and Golang installed on your computer to run this tests.

## How to use

1. Run `node createArray.js XXXX` where XXXX is the length of the array with random numbers you want to use on the sorting algorithms, this will create a json file on the `./inputs` folder with the created array.

2. Run `node sort.js` to see Node Js performance. This will run Bubble Sort and Merge Sort on different arrays loaded from the previously created json file, display the times of each algorithm on the terminal and save the sorted array in the `./outputs` folder.

3. Run `go run sort.go` to see Golang's performance. This will run Bubble Sort and Merge Sort on different arrays loaded from the previously created json file, display the times of each algorithm on the terminal and save the sorted array in the `./outputs` folder.
