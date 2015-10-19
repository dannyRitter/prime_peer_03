$(document).ready(function(){
	
	$("#generateProperty").on("click", function(){
		$("#container").append("<div class='propertyID'></div>");
			console.log("this works");
			var $el = $("#container").children().last();
				$el.append("<div>Property ID: " + randomNumber(228, 9644) + "</div>");
				$el.append("<div>" + randomNumber(2507, 9247) + " Sq. Ft.</div>");
				$el.append("<div>$" + randomNumber(4, 25) + " / sq.ft.</div>");
				$el.append("<div><button class='remove'>Remove</button></div>");
 		$el.hide().slideDown("fast");
 	});

	$("#container").on("click", ".remove", function(){
		$(this).parent().parent().slideUp("fast");

	});

});

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
};