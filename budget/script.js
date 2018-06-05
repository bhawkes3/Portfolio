function tutorial(){
    alert('Tap the "Add New" button to create a new category, or tap on the "actual" section to add an expense');
}
function newExpense(){
    var current = document.getElementById('actual1').innerText;
    var expense = prompt('Please enter your amount');
    var money = '$'
    var concat = money.concat(expense);
    var display = concat + current;
    document.getElementById('actual1').innerHTML = display;
}

function newItem(){
    var name = prompt('Please enter the name of your new item');
    var planned = prompt('please enter the amount you plan to spend this month');
    var actual = prompt("How much have you already spent?");


}

// Make an array or 2 with the values stored in them. Make the ID's the name of the item.