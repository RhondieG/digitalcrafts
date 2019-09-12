// The formula for the LTV - Lifetime Value of a customer in business
//LTV = (ARPA * Gross Margin)/ CCR
// ARPA: Average Revenue Per Account (The average MRR across all of your active customers)
//Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). This is typically extrememly
// high in 
// Customer Churn Rate: The rate at which your customers are cancelling their subscriptions.]


var ARP = 200;
var GM  = 400;
var CCR = 50; 
var LTV = ARP * GM/CCR;

console.log(LTV);
