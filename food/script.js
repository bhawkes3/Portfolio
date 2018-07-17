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
  fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=chicken%2C+broccoli", myInit)
  .then(function(response) {

    console.log(response.results[0].title);
    
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
            

    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}


// "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&query=burger&type=main+course"