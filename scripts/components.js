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

        // debugger
        numOfGroups.forEach( (innerArr ) => 
        {
            let mainCol = document.createElement('div');
            mainCol.className = "col-2 text-center yellowBg";
            //create row
            let groupRow = document.createElement('div');
            groupRow.className = "row";
            //create groupTxt
            let groupTxt = document.createElement('p');
            groupTxt.className = "groupTxt";
            groupTxt.textContent = "Group";
            //append p to row
            groupRow.append(groupTxt);
            //append groupRow to mainCOl
            mainCol.append(groupRow);
            //create second row
            let listRow = document.createElement('div');
            listRow.className = "row";
            //create ul
            let ul = document.createElement('ul');
            ul.className = "no-bullets";
            innerArr.forEach ( (item) => 
            {
                let li = document.createElement('li');
                li.className = "nameTxt"
                li.textContent = groupNames[item];
                ul.append(li);
            })
            listRow.append(ul);
            //append list row to main col
            mainCol.append(listRow);
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