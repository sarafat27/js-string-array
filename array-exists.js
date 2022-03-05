function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['asif', 'rakib', 'arafat', 'atik', 'sabbir'];
const myBigBuddy = megaFriend(56447);
// console.log(myBigBuddy);

//checking any array element exists or not
if (friends.indexOf('fox') != -1) {
    console.log('fox exists');
}
else {
    console.log("fox doesn't exist");
}
//includes()
if (friends.includes('atik')) {
    console.log('atik exists by includes');
}
//concat()
const first = ['1', '3', '5', '7'];
const second = ['2', '4', '6', '8'];
const combined = first.concat(second);
console.log(combined);