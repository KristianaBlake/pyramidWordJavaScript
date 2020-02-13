
// arrange the letters in increasing frequency 
// 	starting with 1 and continuing without gaps and without duplicates


// make sure that only pyramid words return true and 
// non-pyramid words return false 

// if freq equals increasing array then return true 
// if freq does not equal increasing array then return false


const check = {

	isIncreasing(string) {

		let newWord = "";
		let lowerCaseWord = "";

		if (!string){

			return false;

		} else {

			for (let i = 0; i < string.length; i++){
				 if (string[i] != " "){
				 	newWord += string[i];
				 	console.log(newWord);
				 } else {
				 	return false;
				 }
				 
			}

		}

		lowerCaseWord = newWord.toLowerCase()
		console.log(lowerCaseWord);





	}

}


$('form').on('submit', (event) => {
	event.preventDefault();

	// this reminds me that I clicked on the button
	const inputBox = $('#input-box');
	console.log('clicked');


	let string = $('#input-box').val()
	console.log( $('#input-box').val() );

	
	check.isIncreasing(string)
	console.log( check.isIncreasing(string), "<-- isIncreasing value" ); // returns undefined 
})


