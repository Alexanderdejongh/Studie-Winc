/*
broodje kaas
broodje kaas en ham
broodje gezond
broodje oude kaas
broodje tonijnsalade
broodje kip kerrie

Dutch Cheese sandwich
bread 
cheese 
tomatoes
bread

 */

var ingredients = [
    "bread",
    "cheese",
    "tomatoes and cucumber",
    "topping",
    "cooked eggs",
    "ham",
    "turkey",
    "no eggs",
];

function displayIngedients() {
    console.log("The ingedients are:", ingredients);
}

//displayIngedients();

function sandwichDutchCheese() {
    console.log(
        "Take a piece of",
        ingredients[0],
        "put butter on one side of the",
        ingredients[0]
    );
    console.log(
        "Take the",
        ingredients[1],
        "and",
        ingredients[2],
        "put it on the,",
        ingredients[0]
    );
    console.log(
        "Take the",
        ingredients[3],
        "and put the last piece of",
        ingredients[0],
        "on top"
    );
    displayIngedients();
}
//sandwichDutchCheese();

function sandwichBLT() {
    console.log(
        "Take a piece of",
        ingredients[0],
        "put butter on one side of the",
        ingredients[0]
    );
    console.log(
        "Take the",
        ingredients[1],
        ",",
        ingredients[5],
        "and",
        ingredients[2],
        "put it on the,",
        ingredients[0],
        "add",
        ingredients[4]
    );
    console.log(
        "Take the",
        ingredients[3],
        "and put the last piece of",
        ingredients[0],
        "on top"
    );
}
//sandwichBLT();

function makeSandwich(choice1, choice2, choice3) {
    console.log(
        "Take a piece of",
        ingredients[0],
        "put butter on one side of the",
        ingredients[0]
    );
    console.log(
        "Take the",
        choice1,
        ",",
        choice2,
        "and",
        ingredients[2],
        "put it on the,",
        ingredients[0],
        "add",
        choice3
    );
    console.log(
        "Take the",
        ingredients[3],
        "and put the last piece of",
        ingredients[0],
        "on top"
    );
}
//makeSandwich(ingredients[1], ingredients[6], ingredients[7]);
//makeSandwich(ingredients[1], ingredients[6], ingredients[4]);

/*var money = {
    euro: "€",
    totalAmount: "50",
};
var discount = 0.5;
*/
/*
function setup() {
    var totalAmount = ["€", 50];
}

function calculateDiscountedPrice(totalAmount, discount) {
    var discount = 0.5;
    console.log(price);
    var price = totalAmount * discount;
    return price;
}
*/

function CheckDiscountedPrice(totalAmount, discount) {
    if (totalAmount >= "25") {
        var price = totalAmount * discount;
        return price;
    } else if (totalAmount <= 25) {
        var price = totalAmount;
        return price;
    }
}

console.log(CheckDiscountedPrice("100", "0.5"));

//calculateDiscountedPrice(money.totalAmount, discount);

/*
        myFunction = function(parameters) {
            // function body
        };

        const myFunction = (parameters) => {
            // function body
        };
        */