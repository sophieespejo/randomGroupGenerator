import {saveToLocalStorageByPersonName, GetLocalStorage, groupNames} from "./localStorage.js";
import {addPersonNameToListOnDom, updateNamesOnDom} from "./components.js";
import {randomNamesIntoArray, sortArrayBySize, rNumArr, sortArrayByNumberOfGroups} from "./randomization.js";

let addedName = document.getElementById('addedName'),
    addBtn = document.getElementById('addBtn'),
    injectHere = document.getElementById('injectHere'),
    groupSizeBtn = document.getElementById('groupSizeBtn'),
    groupSizeTxt = document.getElementById('groupSizeTxt'),
    groupNumTxt = document.getElementById('groupNumTxt'),
    groupNumBtn = document.getElementById('groupNumBtn'),
    injectGroupsHere = document.getElementById('injectGroupsHere');

addBtn.addEventListener('click', function(e){
    saveToLocalStorageByPersonName(addedName.value);
    addPersonNameToListOnDom(addedName.value, groupNames);
    addedName.value = "";
})

groupSizeBtn.addEventListener('click', function(e){

    randomNamesIntoArray(groupNames);
    sortArrayBySize(rNumArr, groupSizeTxt.value);
    groupSizeTxt.value = "";
})

groupNumBtn.addEventListener('click', function(e)
{

    randomNamesIntoArray(groupNames);
    sortArrayByNumberOfGroups(rNumArr, groupNumTxt.value);
    groupNumTxt.value = "";
})


GetLocalStorage();

