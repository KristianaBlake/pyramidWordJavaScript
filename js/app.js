
// arrange the letters in increasing frequency 
	// starting with 1 and continuing without gaps and without duplicates 

const check = {
	
	word(pyramidWord) {
		let freq = {};
		for (let i = 0; i < pyramidWord.length; i++ ){
			let character = pyramidWord.charAt(i);
			if (freq[character]){
				freq[character]++;
			} else {
				freq[character] = 1;
			}
		}

		return freq;
		console.log(freq);
	}

}



$('form').on('submit', (event) => {
	event.preventDefault();

	// this reminds me that I clicked on the button
	const inputBox = $('#input-box');
	console.log('clicked');


	let pyramidWord = $('#input-box').val()
	console.log( $('#input-box').val() );
	check.word(pyramidWord)
	console.log( check.word(pyramidWord) );
})

