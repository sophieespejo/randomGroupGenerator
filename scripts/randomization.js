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
    debugger
    // //so the loop goes thru the length of arr
    // let groupsNum = Math.ceil(rNumArr.length / size);
    for(let i = 0; i < rNumArr.length; i+= size)
    {
        let chunk = rNumArr.slice(i, i +size);
        newArr.push(chunk);
    }

    console.log(newArr);
    // // console.log(newArr.length);

    createGroups(newArr, groupNames);
}

function sortArrayByNumberOfGroups(rNumArr, groupsNum)
{
    let newArr = [];
    for(let i =0; i<groupsNum; i++)
    {
        let groupArr = [];
        newArr.push(groupArr);
    }
    // debugger
    let j = 0
    for ( let i = 0; i < rNumArr.length; i++ ) {
        
        newArr[j].push(rNumArr[i])
        j++;

        if (j >= groupsNum) {
            j = 0;
        }

    }
    


    console.log(newArr);
    // let groupSize = Math.ceil(rNumArr.length / groupsNum);
    // while(rNumArr.length)
    // {
    //     newArr.push(rNumArr.splice(0, groupSize))
    // }


    // debugger
    // for(let i = 0; i < rNumArr.length; i += groupSize)
    // {
    //     let chunk = rNumArr.slice(i, i + groupSize);
    //     newArr.push(chunk);
    // }
    // console.log(newArr);
     createGroups(newArr, groupNames);


    //remaining students
    // for(let i = 0; i < groupsNum; i++)
    // {
    //     let chunk = rNumArr.slice(i, 1);
    //     newArr[i].push(chunk);
    // }

    return newArr;
}

function createDesiredNumOfArrs(numberWanted)
{

}
export {randomNamesIntoArray, sortArrayBySize, rNumArr, sortArrayByNumberOfGroups, newArr}