"use strict"
//trying to learn how scoping and closures work with functions
function myName(name){
	//declare a function 

	function speak(words){
		return words + name;
	}

	return speak;
}

var personSpeak = myName('Idrees');

personSpeak('My name is ')


function grain(amt) {

	function ofThings(anything) {
		return amt + anything;
	}
	return ofThings;
}


var foodie = grain(10000);

foodie(' grain of rice was eaten by just me alone and I have no shame whatsoever *raughs maniacally*');


// Testing with arithmetic

function isfactorial() {

	function fact(y) {
		var m = 1;
		var total = 1;
		while (m <= y) {
			total = total * m;
			m++;
		}
		return total;
	}


	return fact;
}

var fact = isfactorial();

fact(5);