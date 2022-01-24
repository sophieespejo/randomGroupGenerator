import {saveToLocalStorageByPersonName, GetLocalStorage, groupNames} from "./localStorage.js";
import {addPersonNameToListOnDom} from "./components.js";

let addedName = document.getElementById('addedName'),
    addBtn = document.getElementById('addBtn'),
    injectHere = document.getElementById('injectHere');

addBtn.addEventListener('click', function(e){
    saveToLocalStorageByPersonName(addedName.value);
    addPersonNameToListOnDom(addedName.value, groupNames);
    addedName.value = "";
})

GetLocalStorage();