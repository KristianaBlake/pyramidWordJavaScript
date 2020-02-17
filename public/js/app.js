
const check = {

	isIncreasing(string) {

		let checkWord = string.trim().toLowerCase()

		let freq = {};

		for (i = 0; i < checkWord.length; i++){
			// freq.checkWord[i] = 1;
			let key = checkWord[i];
	

			if (freq[key]){
				freq[key]++
			} else {
				freq[key] = 1;
			}
		}

		// storing the values from the object "freq" and storing 
		// them into the variable values 
		let values = Object.values(freq)

		// this is sorting the values in increasing order 
		values.sort(function(a, b){
			return a - b;
		})

		let startingFreq = 1 
		for (i = 0; i < values.length; i++){
			if (values[i] === startingFreq){
				startingFreq++
			} else {
				return false;
			}
		}

		return true;

	}
}


$('form').on('submit', (event) => {
	event.preventDefault();

	// this reminds me that I clicked on the button
	const inputBox = $('#input-box');
	console.log('clicked');


	let string = $('#input-box').val()
	console.log( $('#input-box').val() );
	
	console.log(check.isIncreasing(string));
})


