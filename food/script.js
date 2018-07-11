//function that will get food
function getFood(){
  
  var myInit = { method: 'GET',
  mode: 'cors',               
  headers:{
   'Content-Type': 'application/json', "X-Mashape-Key": "mGG04GkkePmshJ71JzidhcbIzhXSp1NaMpZjsnwvytXfiBOWU8", "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
 }
};

//set the base url
const baseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search";



//go and get the information using the API
  fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=chicken%2C+onion%2C+garlic", myInit)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

// "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&query=burger&type=main+course"