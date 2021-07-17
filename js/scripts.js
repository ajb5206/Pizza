function PizzaOrder(toppings, sizes) {
this.toppings = toppings;
this.sizes = sizes;
}

PizzaOrder.prototype.price = function(){
	let total = Toppings.price + Sizes.price;
	return total;

}

function Toppings(name, price) {
let cheese = {name: "Cheese", price: 1.00 };
let pepperoni = {name: "Pepperoni", price: 1.00};
let artichoke = {name: "Artichoke", price: 2.00};
let anchovy = {name: "Anchovy", price: 2.50};
}

function Sizes(name, price) {
	let tenInch = {name: "10inch", price: 10.00};
	let twelveInch = {name: "12inch", price: 15.00};
	let sixteenInch= {name: "16inch", price: 20.00};
}

$(document).ready(function() {
	$("form#newOrder").submit(function(event) {
		event.preventDefault();
		let userToppings = $("input#toppings").val();
		let userSize = $("input#size").val();
		let userBill = total;
	});
});
