window.onload = function () {
	var words=[
	'variable',
	'function',
	'object',
	'property',
	'method',
	'arrays',
	'elements',
	'truthy',
	'falsey',
	'alert',
	'confirm',
	'prompt',
	'tolowercase',
	'touppercase',
	'indexof',
	'javascript'
	];

	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

	var randomWord;
	var guess;
	var pastLetters = [];
	var remainingGuesses = 10;
	var wins = 0;
	var showNumGuesses = document.getElementById("guesses");
	var showWins = document.getElementById("wins");
	var showPastLetters = document.getElementById("lettersGuessed");
	var space;
	var charArray = [];
	var blankWord = [];
	var showWord = '';
	var correctLetters = [];

	showWins.innerHTML = 'Wins: ' + wins + '<br><br>';
	showNumGuesses.innerHTML = 'Number of Guesses Remaining: ' + remainingGuesses + '<br><br>';

	
		
		function play(){
			randomWord = words[Math.floor(Math.random()*words.length)];
			wordHolder = document.getElementById('currentWord');
			charArray = randomWord.split('');
			console.log(charArray);
			for (var i = 0; i < charArray.length; i++) {
					blankWord.push("_");
				}
			console.log(blankWord);
			correct = document.createElement('ul');
			randomWord = randomWord.replace(/\s/g, " ");
	    	console.log(randomWord);
			for (var i = 0; i < randomWord.length; i++) {
				correct.setAttribute('id', 'theWord');
				guess = document.createElement('li');
				guess.setAttribute('class', 'guess');
				if (randomWord[i] === " ") {
					guess.innerHTML = " ";
					space = 1;
				} else {
					guess.innerHTML = "_";
					showWord = document.getElementById("theWord");
				}
				wordHolder.appendChild(correct);
				correct.appendChild(guess);
			};
		}

		play();

		document.onkeyup = function(event){
			guess = String.fromCharCode(event.keyCode).toLowerCase();
			var inWord = charArray.indexOf(guess);
			console.log(inWord);
			console.log(guess);
			console.log(pastLetters);
			if(randomWord.length == correctLetters.length){
				alert("You WON! Click -Play Again-.");
			}else if(remainingGuesses == 0){
				alert("You are out of guesses.  You Lose.  Play again!");
			}else if(jQuery.inArray(guess, alphabet) == -1){
				alert("Please select a letter from the alphabet.");
			}else if(jQuery.inArray(guess, pastLetters) !== -1){
				alert("You have already guessed this letter");
			}else if(jQuery.inArray(guess, charArray) == -1){
				remainingGuesses--;
				showNumGuesses.innerHTML = 'Number of Guesses Remaining: ' + remainingGuesses + '<br><br>';
				pastLetters.push(guess);
				showPastLetters.innerHTML = 'Letters Already Guessed: ' + pastLetters + '<br><br>';
				console.log(pastLetters);
			}else{
				pastLetters.push(guess);
				showPastLetters.innerHTML = 'Letters Already Guessed: ' + pastLetters + '<br><br>';
				console.log(pastLetters);
				for (var i = 0; i < charArray.length; i++) {
					if(charArray[i]==guess){
					blankWord[i] = guess;
					var fillWord = blankWord.toString();
					correctLetters.push(guess);
					}
				}
				console.log(blankWord);
				fillWord = fillWord.replace (/,/g, " ");
				console.log(fillWord);
				showWord.innerHTML = fillWord;
				console.log(randomWord.length);
				console.log(correctLetters.length);
				console.log(wins);
				if(randomWord.length == correctLetters.length){
					wins++;
					showWins.innerHTML = 'Wins: ' + wins + '<br><br>';
				}
				console.log(wins);
			};

			
			
		}
	document.getElementById('reset').onclick = function() {
		correct.parentNode.removeChild(correct);
		remainingGuesses=10;
		pastLetters=[];
		correctLetters=[];
		blankWord=[];
		randomWord = words[Math.floor(Math.random()*words.length)];
		showNumGuesses.innerHTML = 'Number of Guesses Remaining: ' + remainingGuesses + '<br><br>';
		showPastLetters.innerHTML = 'Letters Already Guessed: ' + pastLetters + '<br><br>';
		wordLength = 0;
		play();

		
	}

}

