

import users from './users.js';


//TASK2: Return users with different eye color
//version: 1 filter()
const getUserWithEyeColor = (users,color) => users.filter(({eyeColor}) => eyeColor.toLowerCase() === color.toLowerCase());


//version: 2 reduce()
// const getUserWithEyeColor = (users,color)=> {
//     return users.reduce((usersArr,user) => {
//         let {eyeColor} = user;
//         if (eyeColor.toLowerCase() === color.toLowerCase()){
//             usersArr.push(user);  
//         }
//         return usersArr
//     },[]);
// }

//version 3: forEach() 
// const getUserWithEyeColor = (users,color)=> {
//    const usersWithEyeColor = [];
//    users.forEach(user => {
//         if (user.eyeColor.toLowerCase() === color.toLowerCase()) {
//             usersWithEyeColor.push(user)
//         }
//    });
//    return usersWithEyeColor
// }

console.table(getUserWithEyeColor(users,"blue"));
