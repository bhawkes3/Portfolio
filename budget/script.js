function tutorial(){
    alert('Tap the "Add New" button to create a new category, or tap on the "actual" section to add an expense');
}
function newExpense(){
    var current = document.getElementById('actual1').innerText;
    if (current == "" || NaN) {
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
    document.getElementById('actual1').innerHTML = concat;
}

function newItem(){
    var name = prompt('Please enter the name of your new item');
    var planned = parseFloat(prompt('please enter the amount you plan to spend this month'));
    var actual = parseFloat(prompt("How much have you already spent?"));
    var newbox = createBox(name, planned, actual);

    //appends the new section to the body
    var mainsec = document.getElementById('main-sec');
    mainsec.appendChild(newbox);
}
//this function creates a new box for the user to use
        /*THESE ARE THE STEPS OF EACH INDIVIDUAL SECTION:
            1.Create a div element
            2.Apply a class to the div
            .Create an H3 element
            .put a value of "name" in the h3 element
            .Create a p element
            .put the user's value in the p element
            .style the p element
            .append h3 to div
            .append p to div
            .repeat 3 times
            .append all 3 divs to section
            0.append section to body (other function) */
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
    npp.setAttribute("class", "p-box");
    var nplanned = document.createTextNode(planned);
    npp.appendChild(nplanned);
    nph3.appendChild(n2);
    newPlanned.appendChild(nph3);
    newPlanned.appendChild(npp);
    newSec.appendChild(newPlanned);


    //creates the 'new actual' box
    var newActual = document.createElement('div');
    newActual.setAttribute("class", "f-actual");
    newActual.setAttribute("onclick", 'newExpense()');
    var nah3 = document.createElement('h3');
    var n3 = document.createTextNode('Actual');
    var nap = document.createElement('p');
    nap.setAttribute("class", "p-box");
    var nactual = document.createTextNode(actual);
    nap.appendChild(nactual);
    nah3.appendChild(n3);
    newActual.appendChild(nah3);
    newActual.appendChild(npp);
    newSec.appendChild(newActual);

    // styles our new box
    newSec.setAttribute("class", "fixedBox");

    //returns this lovely new box
    return newSec;
}

// Make an array or 2 with the values stored in them. Make the ID's the name of the item.