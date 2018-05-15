//THIS IS A JAVASCRIPT WILL GATHER OUR FORM(S)
    //const form = document.forms[0];

//THIS IS THE EQUIVALENT OF THE CODE ABOVE ACCORDING TO CH6
    //const form = document.getElementsByTagname('form')[0];

//IF WE DON'T WANT TO USE NUMERICAL INDEX, WE COULD USE THE NAME ATTRIBUTE
    //const form = document.forms.search;
//THIS METHOD COULD PRESENT A PROBLEM AS IT COULD GRAB THE WRONG THING

//THIS IS A SAFER WAY TO DO THE SAME THING
const form = document.forms['search'];

//THIS RETURNS ALL THE ELEMENTS CONTAINED IN THE FORM
const [input,button] = form.elements;

//
const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);

//BLURS A SEACRCH BAR
input.addEventListener('blur', () => alert('blurred'), false);

//THE 5 LINES BELOW WILL LOOK AT A FORM AFTER IT IS SUBMITTED, BEFORE IT IS SENT TO BE PROCESSED
const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search() {
alert(' Form Submitted');
}
//YOU CAN ALSO PREVENT THE FORM FROM BEING SUBMITTED BY USING THE preventDefault() METHOD WE USED LAST CHAPTER

//this function should display what you searched for 
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
    }

//THIS WILL SET INPUTS VALUE TO 'SEARCH HERE' SO THAT WILL DISPLAY IN THE SEARCH BAR. 
input.value = 'Search Here';

//THIS WILL DISPLAY THE TEXT IN THE SEARCH BAR, BUT IF SOMEONE STARTS TYPING, THE TEXT WILL DISSAPER.
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
    input.value = ''
    }
    }, false);
    input.addEventListener('blur', function(){
    if(input.value === '') {
    input.value = 'Search Here';
    } }, false);
    //you can do this much easier by putting a 'placeholder' attribute in the input HTML tag

    
    