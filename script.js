"use strict";

var playAgain = document.getElementById('playagain');
playAgain.style.display = "none";
var win = document.getElementById('right');
var loss = document.getElementById("wrong");

function guessTheNumber() {
	var answer = Math.floor(Math.random()*11);

	for(var i = 1; i <= 3; i++) {
		var guessedNumber = prompt("Guess any number from 0 - 10\nYou will get 3 chance to win the game\nEnter a number :");
		if(guessedNumber != '') {

			if(guessedNumber > answer) {
				alert('Correct answer is smaller!!');
			} else if(guessedNumber < answer) {
				alert('Correct answer is greater!!');
			} else if(guessedNumber == answer) {
				win.style.display = "block";
				win.innerHTML = "You win :)";
				playAgain.style.display = "block";
				break;
			} else {
			alert('Put a number');
		}
	} else {
		alert('Put a number');
	}

		if(i == 3) {
			loss.style.display = "block";
			loss.innerHTML="You loss:(";
			playAgain.style.display = "block";
			
		}
	}

}

guessTheNumber();

playAgain.addEventListener('click', () => {
	playAgain.style.display = 'none';
	win.style.display = 'none';
	loss.style.display = 'none';
	setTimeout(guessTheNumber, 30);
});
