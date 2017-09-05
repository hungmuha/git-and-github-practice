$("#poem").click( function() {

	console.log("hello");

	$.ajax ( {
		url: "http://shakeitspeare.com/api/poem",
		dataType: 'json',
		sucess: function(data) {

			data.forEach (function(l) {
				$("body").append("<p>" + l + "</p>");
			});
		}
	});

});

console.log("sanity check");