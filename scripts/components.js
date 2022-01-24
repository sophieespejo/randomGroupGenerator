import {groupNames, removeFromLocalStorage} from "./localStorage.js";

// let nameBtns = document.getElementsByClassName("list-group-items");
function addPersonNameToListOnDom(personName)
{
    //create button
    let nameBtn = document.createElement("button");
    nameBtn.type = "button";
    nameBtn.className = "list-group-item list-group-item-action";
    nameBtn.textContent = personName;
    nameBtn.addEventListener('click', function(e){
        removeFromLocalStorage(nameBtn.textContent);
        this.remove();
    })
    // let nameBtns = document.getElementsByClassName("list-group-items");
    // giveValuesToNameBtns(nameBtns, groupNames);
    //append btn to row
    injectHere.append(nameBtn);
    // return nameBtns;
}

function updateNamesOnDom(groupNames)
{
    for(let i = 0; i<groupNames.length; i++)
    {
        addPersonNameToListOnDom(groupNames[i]);
        // nameBtn[i].value = i;
    }
}

// function giveValuesToNameBtns(nameBtns,groupNames)
// {
//     for(let i = 0; i<groupNames.length; i++)
//     {
//         // addPersonNameToListOnDom(groupNames[i]);
//         nameBtns[i].id = i;
//     }
// }

export {addPersonNameToListOnDom, updateNamesOnDom}