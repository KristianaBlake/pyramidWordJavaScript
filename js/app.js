// arrange the letters in increasing frequency 
// 	starting with 1 and continuing without gaps and without duplicates


// make sure that only pyramid words return true and 
// non-pyramid words return false 

// if freq equals increasing array then return true 
// if freq does not equal increasing array then return false


const check = {

	isIncreasing(string) {

		let checkWord = string.trim().toLowerCase()
		// console.log(checkWord);
		// let entries = JSON.parse(checkWord)
		// console.log(entries);

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

		console.log(freq);

		let values = Object.values(freq)

		values.sort(function(a, b){
			return a - b;
		})


		console.log(values);

		let startingFreq = 1 
		for (i = 0; i < values.length; i++){
			// console.log("values[i] " + values[i]);
			// console.log("startingFreq " + startingFreq);
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


