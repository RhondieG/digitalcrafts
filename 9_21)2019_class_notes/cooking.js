// Create an object to hold information on your favorite recipe. 
// It should have properties for title (a string), servings (a number), 
// ingredients (an array of strings), and a function called cook
// The cook function should print the following:
//  "Currently cooking [title] that will serve [servings] people. It will combine the following ingredients in a pot..."
// Loop through the array of ingredients
// After the function is complete, call the function cook function through the object



var favRecipe = {
  title : "Beef Stew",
  servings : 5,
  ingredients: ["Beef", "Water", "Oil", "Cabbage", "Carrots", "Secrets Seasoning"],
  cook : function(){
        console.log("Currently Cooking " + this.title + " that will serve " + this.servings + " people it will combine the folling ingredients in a pot...")

        for(var i=0; i<this.ingredients.length; i++){
            console.log(this.ingredients[i])
        }
  }   
};

favRecipe.cook();