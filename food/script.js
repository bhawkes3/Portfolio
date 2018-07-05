//use fetch to retrieve an API
function getFood(){
    
    fetch("http://food2fork.com/api/search?key={d611934e9c32166b791fbd39a3badfd2}&q=shredded%20chicken")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}




// http://food2fork.com/api/get THIS URL WILL GET RECIPES
// api key: d611934e9c32166b791fbd39a3badfd2