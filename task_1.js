
import users from './users.js';


// TASK 1: RETURN ARRAYS OF NAMES;
// version 1: map()
const getUserNames = users => users.map(({name}) => name)


//version 2: reduce();
// const getUserNames = users => {
//     return users.reduce((namesArr,{name}) => {
//         namesArr.push(name);
//         return namesArr
//     },[]);
// }

//version 3: forEach() 
// const getUserNames = users => {
//     let userNames = [];
//     users.forEach(({name}) => userNames.push(name));
//     return userNames;
// }

console.table((getUserNames(users)));
