
// arrange the letters in increasing frequency 
	// starting with 1 and continuing without gaps and without duplicates


// make sure that only pyramid words return true and 
// non-pyramid words return false 

// if freq equals increasing array then return true 
// if freq does not equal increasing array then return false


const check = {

	// freq: null,

	getFrequency(pyramidWord) {

		let freq = [];

		for (let i = 0; i < pyramidWord.length; i++ ){

			let character = pyramidWord.charAt(i);

			if (freq[character]){
				freq[character]++;
			} else {
				freq[character] = 1;
			}
		}

		// prints freq - console stops printing after this line 
		console.log(freq);
		this.isIncreasing(freq);

	},

	isIncreasing(freq) {

		let word = [];

		for (let i = 0; i < freq.length -1 ; i++) {
			if (freq[i + 1] - freq[i] === 1 || freq[i + 1] - freq[i] === -1) {
				return true;
			} else {
				return false; 
			}
		}	

	}

}



$('form').on('submit', (event) => {
	event.preventDefault();

	// this reminds me that I clicked on the button
	const inputBox = $('#input-box');
	console.log('clicked');


	let pyramidWord = $('#input-box').val()
	console.log( $('#input-box').val() );
	check.getFrequency(pyramidWord)
	console.log( check.getFrequency(pyramidWord) );
})

