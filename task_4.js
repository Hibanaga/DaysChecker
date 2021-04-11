

import users from './users.js';


//TASK 4: Find is inactive users

//version 1: filter()
const getInactiveUsers = users => users.filter(({isActive}) => !isActive);


//version 2: reduce()
// const getInactiveUsers = users => {
//     return users.reduce((userArr,user) => {
//         let {isActive} = user;
//         if (!isActive) {
//             userArr.push(user);
//         }
//         return userArr
//     },[]);
// }

console.table(getInactiveUsers(users));
