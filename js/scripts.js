function PizzaOrder(userToppings, userSizes) {
this.userToppings = userToppings;
this.userSizes = userSizes;
}

PizzaOrder.prototype.orderBill = function(){
	let toppingsPrice = 0;
	let sizesPrice = 0;
	if (userToppings === "Cheese") {
		toppingsPrice += 1;
	} else if (userToppings === "Pepperoni") {
		toppingsPrice += 1;
} else if (userToppings === " Artichoke") {
		toppingsPrice += 2.5;
} else {
	toppingsPrice += 2;
};

if (userSizes === "10inch") {
	sizesPrice += 10;
} else if (userSizes === "12inch") {
	sizesPrice += 15;
} else {
	sizesPrice += 20;
};
	let total = toppingsPrice + sizesPrice;
	return total;
};

$(document).ready(function() {
	$("form#newOrder").submit(function(event) {
		event.preventDefault();
		userToppings = $("#toppings").val();
		userSizes = $("#sizes").val();
		let pizzaOrder = new PizzaOrder(userToppings, userSizes);
		$("#userBill").text(pizzaOrder.orderBill());
		$("#orderTotal").show();
		$("#newOrder")[0].reset();
		console.log(pizzaOrder);
	});
});
