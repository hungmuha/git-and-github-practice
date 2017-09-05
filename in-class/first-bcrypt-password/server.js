var bcrypt = require('bcrypt');

var myPassword = "poop";
var otherPassword = "not_poop";

bcrypt.genSalt(function(err, salt){
	console.log("Salt: " + salt);
	bcrypt.hash(myPassword, salt, function(err, hash) {
		console.log("Salty hash: " + hash);
		bcrypt.compare(myPassword, hash, function(err, res) {
			console.log("My password and has match: " + res);
		});
		bcrypt.compare(otherPassword, hash, function(err, res) {
			console.log("Other password and has match: " + res);
	});
});
});

