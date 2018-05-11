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



