let numbers = [3,15,2,8,42,7,19,1,25,11]
console.log(numbers);
let filteredNumbers = numbers.filter((number) => {
    if (number > 10) {
        return number;
    }
})
console.log(filteredNumbers);

// Doubling with map
let mappedNumbers = numbers.map((number) =>{
    return number * 2;
})
console.log(mappedNumbers);

// Calculating sum with reduce
let sumOfNumbers = numbers.reduce((sum, number) => 
   sum + number);
console.log(sumOfNumbers)

//sort ascending
let ascendingNumbers = numbers.sort((b,c) => {
    return b - c;
})
console.log(ascendingNumbers);
//sort descending
let descendingNumber = numbers.sort((b,c) => c - b)
console.log(descendingNumber);