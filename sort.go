package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"time"
)

// BUBBLE SORT
func BubbleSort(array []int) []int {
	for i := 0; i < len(array); i++ {
		for j := 0; j < len(array)-i-1; j++ {
			if array[j] > array[j+1] {
				array[j], array[j+1] = array[j+1], array[j]
			}
		}
	}
	return array
}

// MERGE SORT
func merge(left []int, right []int) []int {
	final := []int{}
	i := 0
	j := 0
	for i < len(left) && j < len(right) {
		if left[i] < right[j] {
			final = append(final, left[i])
			i++
		} else {
			final = append(final, right[j])
			j++
		}
	}
	for ; i < len(left); i++ {
		final = append(final, left[i])
	}
	for ; j < len(right); j++ {
		final = append(final, right[j])
	}
	return final
}

func mergeSort(array []int) []int {
	if len(array) < 2 {
		return array
	}
	left := mergeSort(array[:len(array)/2])
	right := mergeSort(array[len(array)/2:])
	return merge(left, right)
}

func saveResults(method string, array []int) {
	var filePath string = "./outputs/go" + method + ".json"
	file, _ := json.MarshalIndent(array, "", " ") //this parse the array into a writable object
	err := ioutil.WriteFile(filePath, file, 0644)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Sorted array by method = %s saved here %s !", method, filePath)
	fmt.Println()
}

func main() {
	data, err := ioutil.ReadFile("./inputs/randomNumbersArray.json")
	if err != nil {
		log.Fatal(err)
	}

	var numbers []int
	var numbers2 []int
	json.Unmarshal(data, &numbers)
	json.Unmarshal(data, &numbers2)
	// BUBBLE SORT
	bubbleStart := time.Now()
	bubbleResult := BubbleSort(numbers)
	fmt.Printf("Bubble sort %s", time.Since(bubbleStart))
	fmt.Println()
	// MERGE SORT
	mergeStart := time.Now()
	mergeResult := mergeSort(numbers2)
	fmt.Printf("Merge Sort %s", time.Since(mergeStart))
	fmt.Println()
	// Save sort results
	saveResults("BubbleSort", bubbleResult)
	saveResults("MergeSort", mergeResult)
}
