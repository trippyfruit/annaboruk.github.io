function showCandle() {
	var candle = document.getElementById("elementCandle");
	var visulka = document.getElementById("elementVisulka");
	var icon = document.getElementById("elementIcon");
	var products = document.getElementById("products");

	candle.classList.remove("hidden");
	visulka.classList.add("hidden");
	icon.classList.add("hidden");

	products.classList.remove("hidden");

	// (this).toggleClass('active');
}

function showVisulka() {
	var candle = document.getElementById("elementCandle");
	var visulka = document.getElementById("elementVisulka");
	var icon = document.getElementById("elementIcon");
	var products = document.getElementById("products");

	candle.classList.add("hidden");
	visulka.classList.remove("hidden");
	icon.classList.add("hidden");

	products.classList.remove("hidden");

	// (this).toggleClass('active');
}

function showIcon() {
	var candle = document.getElementById("elementCandle");
	var visulka = document.getElementById("elementVisulka");
	var icon = document.getElementById("elementIcon");
	var products = document.getElementById("products");

	candle.classList.add("hidden");
	visulka.classList.add("hidden");
	icon.classList.remove("hidden");

	products.classList.remove("hidden");

	// (this).toggleClass('active');
}