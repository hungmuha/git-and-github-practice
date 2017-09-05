var number = 100;

function fizzBuzz() {
	for(i=0; i < number.length; i++)
		if(i / 2 + 1) {
			return console.log("Fizz");

		} else if (i / 2 + 3) {
			return console.log("Buzz");
		} else if (i / 2 +1 && 1 / 2 +3) {
			return console.log("FizzBuzz");
		}

}