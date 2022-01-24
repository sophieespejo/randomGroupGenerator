import {groupNames, removeFromLocalStorage} from "./localStorage.js";
import {newArr} from "./randomization.js";

let nameBtns = document.getElementsByClassName("list-group-items");

function addPersonNameToListOnDom(personName, groupNames)
{
    //create button
    let nameBtn = document.createElement("button");
    nameBtn.type = "button";
    nameBtn.className = "list-group-item list-group-item-action";
    nameBtn.textContent = personName;
    // nameBtn.value = personName;
    nameBtn.addEventListener('click', function(e){
        removeFromLocalStorage(nameBtn.value);
        this.remove();
    })
    // for(let i =0; i<nameBtns.length; i++)
    // {
    //     nameBtns[i].value = i;
    // }
    //append btn to row
    injectHere.append(nameBtn);
    return nameBtns;
}

function updateNamesOnDom(groupNames)
{
    for(let i = 0; i<groupNames.length; i++)
    {
        addPersonNameToListOnDom(groupNames[i]);
    }
}

function createGroups(numOfGroups, groupNames)
{
    // for each group 
    // for(let i = 0; i<numOfGroups.length; i++)
    // {
    //     //create col
    //     let mainCol = document.createElement('div');
    //     mainCol.className = "col-2";
    //     //create ul
    //     let ul = document.createElement('ul');
    //     ul.className = "list-group";
    //     ul.textContent = "Here";
    //     mainCol.append(ul);
    //     injectGroupsHere.append(mainCol);

        debugger
        numOfGroups.forEach( (innerArr ) => 
        {
            let mainCol = document.createElement('div');
            mainCol.className = "col-2";
            //create ul
            let ul = document.createElement('ul');
            ul.className = "list-group";
            ul.textContent = "Group:";
            innerArr.forEach ( (item) => 
            {
                let li = document.createElement('li');
                li.textContent = groupNames[item];
                ul.append(li);
            })
            mainCol.append(ul);
            injectGroupsHere.append(mainCol);
        })
    // }

        //for each item in each group

        //     // let innerArr = [];
        //     // innerArr = numOfGroups[j];
        //     // for(let k = 0; k < numOfGroups[j][k].length; k++)
        //     // {
        //     //     li.textContent =  numOfGroups[j][k];
}

        //     li.textContent = numOfGroups[j];


        //     // for(let k = 0; k < numOfGroups[j][k].length; k++)
        //     // {

        //     // }
        //     //appent li to ul
        // }
        //append ul to col
    


export {addPersonNameToListOnDom, updateNamesOnDom, createGroups}