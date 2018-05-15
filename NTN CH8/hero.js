const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    alert(JSON.stringify(hero)); // convert object to JSONstring and display in alert dialog
    return hero;
    }

    //THIS IS FOR THE PASSWORD
    hero.realName = form.realName.value;

    //THIS IS FOR THE CHECKBOXES
    hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
if (form.powers[i].checked) {
hero.powers.push(form.powers[i].value);
}
}

//THIS GOES WITH THE RADIO BUTTONS
hero.category = form.category.value;

//THIS IS TO MAKE THE AGE WORK
hero.age = form.age.value;

//THIS IS FOR THE DROPDOWN
hero.city = form.city.value;

//THIS IS FOR THE TEXT INPUT
hero.origin = form.origin.value;

//THIS CAN GIVE FEEDBACK BEFORE A USER SUBMITS THE FORM
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);
function validateInline() {
const heroName = this.value.toUpperCase();
if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
    
}

function disableSubmit(event) {
    if(event.target.value === ''){
    document.getElementById('submit').disabled = true;
    } else {
    document.getElementById('submit').disabled = false;
    }
    }
    



