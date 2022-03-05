const numbers = [3, 5, 4, 223, 45, 32, 90, 78, 56, 11];
//slice
const numberSliced = numbers.slice(5, 8);
// console.log(numberSliced);

//splice used to remove an element from an array
// const numberSpliced = numbers.splice(3, 3);
// console.log(numberSpliced);
// console.log(numbers);

//again splice can be used to delete elements and add elements simultaneously
const numberSpliced2 = numbers.splice(4, 0, 'karim', 'rahim');
console.log(numberSpliced2);
console.log(numbers)