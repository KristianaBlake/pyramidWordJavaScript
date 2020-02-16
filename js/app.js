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


		// let noSpaces = {};
		// let lowerCaseWord = "";
		// let freq = [];
		// let startingFreq = 0;
		// // let incFreq = [];

		// if (!string){

		// 	return false;

		// } else {

		// 	for (let i = 0; i < string.length; i++){
		// 		 if (string[i] != " "){
		// 		 	noSpaces += string[i];
		// 		 } else {
		// 		 	return false;
		// 		 } 
		// 	}

		// }


// 		// turns the new string into lower case 
// 		lowerCaseWord = noSpaces.toLowerCase()

// 		for (let i = 0; i < lowerCaseWord.length; i++){

// 			// returns the character at the specified index from lowerCaseWord
// 			let reptChar = lowerCaseWord.charAt(i);
// 			// if a character is repeated, it increasing the number and pushes
// 			// it into the freq array

// 			if (freq[reptChar]){
// 				freq.push(freq[reptChar]++)
// 				console.log(freq);
// 			} else {
// 				// or if the character is not recognized, initialize
// 				// its value at 1 
// 				freq[reptChar] = 1;
// 			}


// 			change values to numbers 

// 			for(i = 0; i < freq.length; i++){

// 				console.log(freq[i]);
// 				if(freq.includes(i) === startingFreq){
// 					startingFreq++;
// 					console.log(startingFreq);
// 				} else {
// 					return false;
// 				}

// 			}

// 		}
// 		parseInt(freq)

// 		console.log(typeof freq);

// 		console.log(incFreq);


// 		// for(i = 0; i < incFreq.length; i++){
// 		// 	if(incFreq[i] != startingFreq){

// 		// 		return false;

// 		// 	} else {

// 		// 		startingFreq++;
// 		// 		console.log(startingFreq);
// 		// 		return true;f
// 		// 	}

// 		}
// 	}
// }	



$('form').on('submit', (event) => {
	event.preventDefault();



	// this reminds me that I clicked on the button
	const inputBox = $('#input-box');
	console.log('clicked');


	let string = $('#input-box').val()
	console.log( $('#input-box').val() );
	
	console.log(check.isIncreasing(string));
})


