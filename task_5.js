
import users from './users.js';



//TASK 5: find user from Email

//version 1: filter();
const getUserWithEmail = (users,findEmail)=> users.filter( ({email}) => email.toLowerCase() === findEmail.toLowerCase())[0];


//version 2: reduce()
// const getUserWithEmail = (users,findEmail)=> {
//     return users.reduce((resultObj,user) => {
//         let {email} = user
//         if (email.toLowerCase() === findEmail.toLowerCase()) {
//             resultObj = user
//         }
//         return resultObj;
//     },{});
// };




console.dir(getUserWithEmail(users, 'elmahead@omatom.com'));
