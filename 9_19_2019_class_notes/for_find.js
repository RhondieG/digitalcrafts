//We are going to have an array of items
//We are going to create a function with 2 parakmeters
//The first parameter will be an array to search
//The second parameter will be a value to find

//Inside the function, use a for loop to go through the array
//and return true if it findes the second parameter inside the array
//otherwise return false


var items = ["Cat","Dog", "Snake", "Ferret", "Big Foot"];
var findItem = "Big Foot";


function findAnimal(arryToSearch,findAnimalInArray){
	for (var i=0; i<arrayToSearch.lengtyh;i++){
		if(arrayToSearch[i] == findAnimalInArray){
			return true;
		}
	}
	return false;
}

var results = findAnimal(items,findItems)
console.log(results);
