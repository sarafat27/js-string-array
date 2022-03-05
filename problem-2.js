const friends = [
    'asif chy',
    'md rakib islam',
    'md sarafat Hossain',
    'jahid ahmed',
    'MD abdul karim'
];
// for (const friend of friends) {
//     if (friend.startsWith('md')) {
//         console.log(friend);
//     }
// }

//by using function
function getMd(array, part) {
    const newName = [];
    for (const friend of array) {
        if (friend.toLowerCase().includes(part.toLowerCase())) {
            newName.push(friend);
        }
    }
    return newName;
}

const result = getMd(friends, 'MD');
console.log(result);