const myFavDate = new Date('1971-12-16');
// console.log(myFavDate);
const anotherDate = new Date(1971, 3, 26, 11, 53, 2, 3);
// console.log(anotherDate);

if (myFavDate.getTime() < anotherDate.getTime) {
    console.log('date is earlier')
}