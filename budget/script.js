'use strict'
//This is a simple tutorial for users to click to see how to use the app
function tutorial(){
    alert('Tap the "Add New" button to create a new category, or tap on the "actual" section to add an expense');
}

//This funcion allows the user to add an expense to their current value
function newExpense(id){
    var current = document.getElementById(id).innerText;
    if (current == "" || current == "$NaN") {
        current = 0;
     } else {
            //strips the '$' sign off of the front string
            var current = current.substr(1);
        }
    //converts the passed in string into a number
    var newCurrent = parseFloat(current);

    //recieves user input and turns it into a number
    var expense = parseFloat(prompt('Please enter your amount'));

    var money = '$'
    var display = parseFloat(expense + newCurrent);
    parseFloat(display);
 
    //concatenates a '$' on the front of the number
    var concat = money.concat(display);
    document.getElementById(id).innerHTML = concat;
    
    totalActualDisplay();
}

// //this function will display the total value of all planned elements
// function totalPlannedDisplay(){
//     let display = document.getElementsByClassName("f-planned").value;

//     //display to the user
//     document.getElementById('totalPDisplay').innerHTML = display;
// }

// //this function will display the total value of all actual elements
function totalActualDisplay(){
    var classList = document.getElementsByClassName("AActualAddup");
    //this loop adds up all the values passed in
    let display = 0;
    for (let i = 0; i >= classList.length; i++) {
        display += parseFloat(classList[i].substr(1));
    };

    //display to the user
    document.getElementById('totalADisplay').innerHTML = display;
}

function newItem(){
    var name = prompt('Please enter the name of your new item');
    if (name == null || name == "") {
        return;
    } else{}
    var planned = parseFloat(prompt('please enter the amount you plan to spend this month'));
    var actual = parseFloat(prompt("How much have you already spent?"));
    var newbox = createBox(name, planned, actual);

    //appends the new section to the body
    var mainsec = document.getElementById('main-sec');
    mainsec.appendChild(newbox);

    // totalActualDisplay();
    // totalPlannedDisplay();
}
//this function creates a new box for the user to use
        /*THESE ARE THE STEPS OF EACH INDIVIDUAL SECTION:
            1.Create a div element
            2.Apply a class to the div
            3.Create an H3 element
            4.put a value of "name" in the h3 element
            5.Create a p element
            6.put the user's value in the p element
            7.style the p element
            8.append h3 to div
            9.append p to div
            10.repeat 3 times
            11.append all 3 divs to section
            12.append section to body (other function) */
function createBox(name, planned, actual) {

    //this creates the section to wrap it all
    var newSec = document.createElement('section');

    //creates the 'new name' box
    var newName = document.createElement('div');
    newName.setAttribute("class", "f-name");
    var nnh3 = document.createElement('h3');
    var n1 = document.createTextNode('Name');
    var nnp = document.createElement('p');
    nnp.setAttribute("class", "p-box");
    var nname = document.createTextNode(name);
    nnp.appendChild(nname);
    nnh3.appendChild(n1);
    newName.appendChild(nnh3);
    newName.appendChild(nnp);
    newSec.appendChild(newName);


    //creates the 'new planned' box
    var newPlanned = document.createElement('div');
    newPlanned.setAttribute("class", "f-planned");
    var nph3 = document.createElement('h3');
    var n2 = document.createTextNode('Planned');
    var npp = document.createElement('p');
    // npp.setAttribute("class", "p-box", "PActualAddup");
    npp.classList.add("p-box", "PActualAddup");
    var nPlanned = document.createTextNode("$" + planned);
    npp.appendChild(nPlanned);
    nph3.appendChild(n2);
    newPlanned.appendChild(nph3);
    newPlanned.appendChild(npp);
    newSec.appendChild(newPlanned);


    //creates the 'new actual' box
    var newActual = document.createElement('div');
    newActual.setAttribute("class", "f-actual");
    var nah3 = document.createElement('h3');
    var n3 = document.createTextNode('Actual');
    var nap = document.createElement('p');
    // nap.setAttribute("class", "p-box", "AActualAddup");
    nap.classList.add("p-box", "AActualAddup")
    // nap.setAttribute("name", "AActualAddup");
    nap.setAttribute("id", name);
    nap.setAttribute("onclick", 'newExpense(this.id)');
    var nactual = document.createTextNode("$" + actual);
    nap.appendChild(nactual);
    nah3.appendChild(n3);
    newActual.appendChild(nah3);
    newActual.appendChild(nap);
    newSec.appendChild(newActual);

    // styles our new box
    newSec.setAttribute("class", "fixedBox");

    //returns this lovely new box
    return newSec;
}

// Make an array or 2 with the values stored in them. Make the ID's the name of the item.