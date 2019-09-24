

var vendingMachine = {
    items : [
                        {snack: "Snickers", price : 1.25},
                         {snack: "Popcorn", price : 1.00}, 
                         {snack: "Chewing Gum", price : .25}, 
                         {snack: "Nuts", price : .50}, 
                         {snack: "Cookies", price: 1.70}, 
                         {snack: "Cup Noodles", price : 2.25}],
    currency : [
                        {coin: "Nickel", value : .05},
                        {coin: "Dime", value : .10},
                        {coin: "Quater", value : .25},
                        {coin: "Dollar", value : 1.00} ],

    showPrice : function()
        {
            for( var i = 0; i < this.items.length; i++)
            {
                var pullItems = this.items[i];
                console.log('Snacks:  ' + pullItems.snack + " Price: " + pullItems.price);
            }
        },

 customers : [
    { name: 'Sarah', total: ["Nickle", "Dollar", "Quarter"], snackpurchase: "Popcorn"},
    { name: 'Mitch', total: ["Nickle", "Dime", "Dime"], snackpurchase: "Cup Noodles"},
    { name: 'Devin', total: ["Dollar", "Dollar", "Quarter"], snackpurchase: "Cookies"},
    { name: 'Marvin', total: ["Nickle", "Quarter", "Quarter"], snackpurchase: "Snickers" },
    { name: 'Rhonda', total: ["Nickle", "Nickel", "Quarter"], snackpurchase: "Chewing Gum" },
    { name: 'Terry', total: ["Nickle", "Dime", "Quarter"], snackpurchase: "Cookies" },
    { name: 'Alan', total: ["Dollar", "Dollar", "Dime"], snackpurchase: "Nuts" } ],

checkCurrency : function()
{

},

totalCurrency : function()
{

},
purchase : function()
{

}
};

vendingMachine.showPrice();