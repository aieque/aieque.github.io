var gurkor = 0.5;
var increase = 0;

$(document).ready(function() {
	
	addPurchase("Ica Nära", 15);
	addPurchase("Coop Konsum", 15);
	addPurchase("Ica Supermarket", 15);
	addPurchase("Netto", 15);
	
	$("#gurka").click(function() {
		increase = 10 * Math.max((increase / 9), 1);
	});
});

function tick() {	
	if(increase > 0) increase -= 0.1;
	if(increase < 0) increase += 0.1;
	
	gurkor += increase / 360;
	renderGurka();
	
	$("#gurkor").text("Gurkor: " + Math.floor(gurkor));
}

function renderGurka() {
	$("#gurka").each(function() {
		var deg = gurkor * 360;
		var rotate = 'rotate(' + deg + 'deg)';
		$(this).css({ '-webkit-transform': rotate, '-moz-transform': rotate, '-o-transform': rotate, '-ms-transform': rotate, 'transform': rotate });
	});
}

function addPurchase(name, price) {
	var p = {};
	p.price = price;
	p.name = name;
	$("table").append("<tr><th>" + name + "</th><th>" + price + " gurkor</th><th><button type=\"button\">Köp!</th></tr>");
}

setInterval(tick, 10);
