function PizzaOrder(toppings, sizes) {
this.toppings = toppings;
this.sizes = sizes;
//this.price = Price();
}

PizzaOrder.prototype.orderBill = function(){
	let total = toppings[1] + sizes[1];
	return total;
}

let toppings = {
	cheese: 1,
	pepperoni: 1,
	artichoke: 2,
	anchovy: 2.5,
}

let sizes = {
	tenInch: 10,
	twelveInch: 15,
	sixteenInch: 20,
}

//function Sizes() {
//	let tenInch = {name: "10inch", price: 10.00};
//	let twelveInch = {name: "12inch", price: 15.00};
//	let sixteenInch= {name: "16inch", price: 20.00};
//}

//function Toppings() {
//let cheese = {name: "Cheese", price: 1.00 };
//let pepperoni = {name: "Pepperoni", price: 1.00};
//let artichoke = {name: "Artichoke", price: 2.00};
//let anchovy = {name: "Anchovy", price: 2.50};
//}


$(document).ready(function() {
	$("form#newOrder").submit(function(event) {
		event.preventDefault();
		let pizzaOrder = new PizzaOrder;
		//let userToppings = $("#toppings").val();
		//let userSize = $("#sizes").val();
		if($("input[id='toppings']").is(':checked')) {toppings.;};
		if($("input[value='sizes']").is(':checked')) {sizes[1];};
		
		$("#userBill").text(pizzaOrder.orderBill());

		$("#orderTotal").show();
	});
});
