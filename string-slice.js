//split()
const anthem = 'Amar Sonar Bangla Ami Tomai valobashi';
const devide = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

//slice()
const smallSlice = anthem.slice(5, 12);
// console.log(smallSlice); 

//substr()
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// substring()
const randomPart = anthem.substring(5, 12);
// console.log(randomPart);

//concat()
const first = 'our';
const second = 'city';
// const full = first + second;
const full = first.concat(second).concat('ctg')
// console.log(full);

// join()
const words = ['alom', 'bekub', 'chagol', 'damish'];
// const allJoined = words.join('');
// const allJoined = words.join(' ');
// const allJoined = words.join(',');
const allJoined = words.join('.com ');
console.log(allJoined);