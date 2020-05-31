function showCandle() {
	var candle = document.getElementById("elementCandle");
	var visulka = document.getElementById("elementVisulka");
	var icon = document.getElementById("elementIcon");
	var products = document.getElementById("products");

	var btnSmallCandle = document.getElementById("btnSmallCandle");
	var btnSmallVisulka = document.getElementById("btnSmallVisulka");
	var btnSmallCandle = document.getElementById("btnSmallCandle");

	var thumbnailsBig = document.getElementById("thumbnailsBig");

	candle.classList.remove("hidden");
	visulka.classList.add("hidden");
	icon.classList.add("hidden");

	products.classList.remove("hidden");

	btnSmallCandle.classList.add("hidden");
	btnSmallVisulka.classList.remove("hidden");
	btnSmallIcon.classList.remove("hidden");

	thumbnailsBig.classList.add("hidden");

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

	btnSmallCandle.classList.remove("hidden");
	btnSmallVisulka.classList.add("hidden");
	btnSmallIcon.classList.remove("hidden");

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

	btnSmallCandle.classList.remove("hidden");
	btnSmallVisulka.classList.remove("hidden");
	btnSmallIcon.classList.add("hidden");

	// (this).toggleClass('active');
}