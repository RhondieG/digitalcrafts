

var numbers = [3, 8, 12, 1, 6, 15, 3];

//Add All The Valudes In The Array and Print To Screen
var final = 0;

for(var i=0; i<numbers.length; i++){
	
final += numbers[i]

}

console.log(final);

//Using the for loop and if statements inside the for loop
//find the largest number in the array


var largestNumber = [0];

for(var i=0; i<numbers.length; i++){

	if(numbers[i]>largestNumber){
	largestNumber = numbers[i];
}
}

console.log(largestNumber);

//Step 1
//Creat a for loop that creates an array of 100 random numbers

//Step 2
//From the random number created above, find the smallest

var randomNumbers =[];

for(var i=0; i < 100; i++){
	var number = Math.floor(Math.random() * 100);
	randomNumbers.push(number);

}

console.log (randomNumbers)

var smallestNumber =randomNumbers[0];


for(var i=0; i<100; i++){

        if(randomNumbers[i]<smallestNumber){
        smallestNumber = randomNumbers[i];
}
}
console.log(smallestNumber)

