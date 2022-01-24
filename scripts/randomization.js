import { groupNames } from "./localStorage.js";
import {createGroups} from "./components.js";


let rNumArr = [];
let newArr;

function randomNamesIntoArray(groupNames)
{
    while (rNumArr.length < groupNames.length)
    {
        let rNum = Math.floor(Math.random() * groupNames.length);
        if(!rNumArr.includes(rNum))
        {
            rNumArr.push(rNum)
        }
    }
    // console.log(rNumArr);
    return rNumArr;
}

function getRandomStudent(groupNames)
{
    let rNum = Math.floor(Math.random() * groupNames.length);

}


function sortArrayBySize(rNumArr, size){
    let newArr = [];
    //so the loop goes thru the length of arr
    while(rNumArr.length)
    {
        //slice rNumArr starting at 0 to size and pushes it to an array
        newArr.push(
            rNumArr.splice(0, size)
        )
    }
    // console.log(newArr);
    // console.log(newArr.length);
    createGroups(newArr, groupNames);
}

function sortArrayByNumberOfGroups(rNumArr, groupsNum)
{
    let newArr = [];
    let groupSize = Math.ceil(rNumArr.length / groupsNum);
    while(rNumArr.length)
    {
        newArr.push(rNumArr.splice(0, groupSize))
    }
    console.log(newArr);
    createGroups(newArr, groupNames);

    return newArr;
}
export {randomNamesIntoArray, sortArrayBySize, rNumArr, sortArrayByNumberOfGroups, newArr}