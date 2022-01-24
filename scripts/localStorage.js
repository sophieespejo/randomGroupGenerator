
import {updateNamesOnDom} from "./components.js";
let groupNames = [];


function GetLocalStorage()
{
    let localStorageData = localStorage.getItem('addedNames');
    if(localStorage.getItem('addedNames'))
    {
        groupNames = JSON.parse(localStorageData);
    }
    else{
        saveToLocalStorage();
    }
    updateNamesOnDom(groupNames);
    return groupNames;
}

function saveToLocalStorage()
{
    localStorage.setItem('addedNames', JSON.stringify(groupNames));
}

function saveToLocalStorageByPersonName(personName)
{
    groupNames.push(personName);
    localStorage.setItem('addedNames', JSON.stringify(groupNames));
}

function removeFromLocalStorage(personName){
    //find index of city name in favorites array
    let nameIndex = groupNames.indexOf(personName);
    // console.log("city index:"+ cityIndex);
    //found city name in array favorites
    groupNames.splice(nameIndex, 1);
    //updates local storage
    saveToLocalStorage();
}

export {saveToLocalStorageByPersonName, GetLocalStorage,  removeFromLocalStorage, groupNames}