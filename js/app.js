
// arrange the letters in increasing frequency 
// 	starting with 1 and continuing without gaps and without duplicates


// make sure that only pyramid words return true and 
// non-pyramid words return false 

// if freq equals increasing array then return true 
// if freq does not equal increasing array then return false


const check = {


}



$('form').on('submit', (event) => {
	event.preventDefault();

	// this reminds me that I clicked on the button
	const inputBox = $('#input-box');
	console.log('clicked');


	let pyramidWord = $('#input-box').val()
	console.log( $('#input-box').val() );

	
	check.getFrequency(pyramidWord)
	console.log( check.getFrequency(pyramidWord), "<-- getFrequency value" ); // returns undefined 
})


