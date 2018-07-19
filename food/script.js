//THIS IS THE BEAUTIFUL JAVASCRIPT FOR MY WONDERFUL NEW APP, FOOD FRIEND


//this function builds the URL based on what the user typed in
function buildURL() {
  //set the base URL for reaching out to the food site
  const baseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=";

  //grab the input that the user submitted
  let input = document.getElementById("food-search-input").value;

  // build a loop to change the spaces in the users search to make it into a valid URL
  let i = 0, strLength = input.length;
  for(i; i < strLength; i++) {
    input = input.replace(" ", "%2c+");
  }
  
  //concatanates the new part of the URL to make the completed, searchable URL
  let newUrl = baseUrl + input;

  //this function is done. This passes the URL onto the next function as a parameter to go and grab the recipes
  getFood(newUrl)
}


//go and get the information using the API
function getFood(url){
//headers
let myInit = { method: 'GET',
  mode: 'cors',               
  headers:{
   'Content-Type': 'application/json', "X-Mashape-Key": "mGG04GkkePmshJ71JzidhcbIzhXSp1NaMpZjsnwvytXfiBOWU8", "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
  }}
  //go and grab the 
  fetch(url, myInit)
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(myJson) {

  //stores the 10 food items in an array
  let foodArray = response.results;
    
    /*
    let key = Object.keys(response);
            // let nav = '<ul>';
            // nav += "<li id = 'home'>Home</li>";
            for (let i = 0, n = key.length; i < n; i++) {
                let foodItem = key[i];
               let box = document.createElement("div");
               box.setAttribute("class" , "result-box");
               let h2 = document.createElement("h2");
               let pTime = document.createElement("p");
               let servings = document.createElement("p");
               let hText = document.createTextNode();
               let timeText = document.createTextNode();
               let servingText = document.createTextNode();
               pTime.setAttribute("class" , "p-time");
               servings.setAttribute("class" , "servings");
               h2.appendChild(hText);
               pTime.appendChild(timeText);
               servings.appendChild(servingText);
               box.appendChild(h2);
               box.appendChild(pTime);
               box.appendChild(servings);
               let resultList = document.getElementById("result-list");
               resultList.appendChild(box);
            };
            
*/
  
    console.log(myJson);
  });
}


// "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&query=burger&type=main+course"