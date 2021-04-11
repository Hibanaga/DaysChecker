

import users from './users.js';


//TASK 10: Find unique skills all users


//version 1: 
const getSortedUniqueSkills = users => {
    return users.reduce((skillsArr,{skills}) => {
        skillsArr.push(skills);
        return skillsArr.flat();
    },[])
    .filter((skill,idx,skillsArr) => skillsArr.indexOf(skill) === idx)
    .sort(); 
}


//version 2:
// const getSortedUniqueSkills = users => {
//     return users.reduce((skillsArr,{skills}) => [...skillsArr,...skills],[])
//     .filter((skill,idx,skillsArr) => skillsArr.indexOf(skill) === idx)
//     .sort(); 
// }


console.log(getSortedUniqueSkills(users));
 

