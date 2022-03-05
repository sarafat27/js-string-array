function addNumbers(num1, num2) {
    // console.log(arguments[3]);
    let sum = 0;
    for (const num of arguments) {
        sum = sum + num;
    }
    return sum;
}
const result = addNumbers(15, 18, 56, 89);
// console.log(result);

function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('md', 'arafat', 'hossain', 'sunny');
console.log(name);