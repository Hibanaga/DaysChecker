
import users from './users.js';


//TASK 6: find array range ages

//version 1: filter()
const getUsersWithAge = (users,min,max) => users.filter(({age}) => age >= min && age <= max);

//version 2: reduce() 
// const getUsersWithAge = (users,min,max) => {
//     return users.reduce((filrtredArr,user) =>{
//         let {age} = user;
//         if (age >= min && age <= max) {
//             filrtredArr.push(user);
//         }
//         return filrtredArr;
//     },[])
// }

console.table(getUsersWithAge(users,20,30));
