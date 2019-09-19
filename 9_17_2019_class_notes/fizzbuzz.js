//In this assignment, we are going to have a for loop that iterates over 20 numbers
//if the number at the current i is divisible by both 2 and 3, console.log("FizzBuzz");
//if the number at the current i is only divisible by 2, console.log("Fizz");
//if the number at the current i is only disisible by 3, console.log("Buzz");

//For division (if divisible), its if (number % orther_number)



for(var i=0; i<20; i++){

	if(i%2==0 && i%3==0){
		console.log(i+"FizzBuzz");
	}else if (i%2==0){
		console.log(i+"Fizz");
	}else if (i%3==0){
		console.log(i+"Buzz");
	}
}




