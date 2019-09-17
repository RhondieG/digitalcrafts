// The formula for the LTV - Lifetime Value of a customer in business
//LTV = (ARPA * Gross Margin)/ CCR
// ARPA: Average Revenue Per Account (The average MRR across all of your active customers)
//Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). This is typically extrememly
// high in 
// Customer Churn Rate: The rate at which your customers are cancelling their subscriptions.]




var ltvFunction = function(ARPA, MM, churn) {
	var LTV = (ARPA*MM)/churn;

	return LTV;
}

console.log(ltvFunction(56,10,2));

console.log("Steve thinks the LTV should be" + ltvFunction(5,10,2));

console.log("John thinks the LTV should be" + ltvFunction(2,4,2));






var mypie = 3.14;


var pieFunction  = function(pie,radius)  {
	var Circle =(pie*radius*radius);

	return Circle;

}

console.log(pieFunction(mypie,30));
