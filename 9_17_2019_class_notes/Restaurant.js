//Group Exercise - Tip Calculator

//When we are at a restaurant, in American culture we give waiters tips based on the quality of service. We are going to design an app that scores a restaurant waiter/waitress's service and give them a tip based on the total.

//Step 1) Points Calculator

//Design a away for calculating the amount of points the waiter has earned. Each of the following activities will score the waiter/waitress a 1 point each:
//- Did the waiter greet you?
//- Did they bring bread/water to start?
//- They check on drink refills?
//- Did they check if the food was ok?
//- Were they prompt in getting the check?

//Step 2) Design A Tip Calculator

//Design a way for calculating the tip. The tip should take the total bill and given the waiter/waitress a percentage based on the points. The tip should be calculated as follows:
//0 points - 1% tip.
//1 points - 2% tip
//2 points - 4% tip
//3 points - 7% tip
//4 points - 10 % tip
//5 points - 15% tip

//1st Part of Question:

function greetMe(waiter){
	if(waiter == true){
		return 1;
	}
		return 0;
}

function breadWater(waiter){
	if(waiter == true){
		return 1;
	}
		return 0;
}


function drinkRefills(waiter){
	if(waiter == true){
		return 1;
	}
		return 0;
}

function goodFood(waiter){
	if(waiter == true){
		return 1;
	}
		return 0;
}

function getCheck(waiter){
	if(waiter == true){
		return 1;
	}
		return 0;
}

//2nd Part of question:

function totalPoints(greetParameter, breadParameter, drinkParameter, goodParameter, getCheckParameter){
var totalPoints = 0;
var greetBooleanValue  = greetMe(greetParameter);
var breadBooleanValue = breadWater(breadParameter);
var drinkBooleanValue = drinkRefills(drinkParameter);
var goodBooleanValue = goodFood(goodParameter);
var getCheckBooleanValue = getCheck(getCheckParameter);

totalPoints = greetBooleanValue  + breadBooleanValue + drinkBooleanValue + goodBooleanValue + getCheckBooleanValue;
	return totalPoints;
}

// 3rd part of question:

var totalPointServer = totalPoints(true, false, false, true, true);
console.log(totalPointServer);

if (totalPointServer == 0)
{
console.log("1%");
}
else if (totalPointServer == 1)
{
console.log("2%");
}
else if (totalPointServer == 2)
{
console.log("4%");
}
else if(totalPointServer == 3)
{
console.log("7%");
}
else if(totalPointServer == 4)
{
console.log("10%");
}
else if(totalPointServer == 5)
{
console.log("15%");
}
