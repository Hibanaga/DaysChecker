

import users from './users.js';


//TASK 8: Find the User with friend

//version 1: filter() with map()
const getUsersWithFriend = (users,friendName) => users.filter(({friends}) => friends.includes(friendName)).map(({name}) => name);


//version 2:  reduce()
// const getUsersWithFriend = (users,friendName) => {
//     return users.reduce((nameArr,{friends,name}) => {
//         if (friends.includes(friendName)) {
//             nameArr.push(name);
//         }
//         return nameArr;
//     },[])
// }

console.log(getUsersWithFriend(users,'Briana Decker'))
