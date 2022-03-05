const numbers = [5, 3, 7, 9, 4, 0, 2, 8, 7];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['sabbir', 'razzak', 'anwar', 'rahim', 'buchuk'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

//reverse()
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

//sorted and reversed
// const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

//number sorting fun
const bigNumbers = [23, 5, 46, 37, 8, 45, 98, 66, 123, 4];
const bigNumbersSorted = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(bigNumbersSorted);