$(document).ready(function(){
	var questions = ["What is Javascript?","What symbol is used to enable jQuery?", "Where should you link your external CSS file in your HTML?", "What measure of time is used for the Javascript function setInterval & setTimeout?", "What does API stand for?", "Which one of the options below is a benefit of Twitter Bootstrap?", "Which statement below is the best explanation for understanding the scope of functions in Javascript?", "What does the $.ajax jQuery function do?" ];
	var correctAnswers = ["a dynamic computer programming language","$","in the head tag", "milliseconds", "Application Programming Interface", "makes web development faster and easier", "a function can only access globally defined variables created outside of its body", "perform an asynchronous HTTP request" ];
	var answers1 = ["a type of coffee","$", "in the style tag","seconds", "Additional Programming Information", "makes web development faster and easier","a function can access all variables defined in the script no matter where they are created", "finish your computer bootcamp homework"];
	var answers2 = ["a dynamic computer programming language","#","in the body tag", "minutes", "Application Programming Interface", "literally creates the website for you", "a function can only access globally defined variables created inside of its body", "delete an API"];
	var answers3 = ["an object-oriented language similar to C++",".","in the head tag", "hours", "Application Performing Interface", "teaches you how to use Twitter", "a function can only access globally defined variables created outside of its body", "restart your script"];
	var answers4 = ["the language for describing the presentation of Web pages, including colors, layout, and fonts.","jQ","in the div tag", "milliseconds", "Applets Presentation Information", "will make you breakfast", "a function is never able to access any defined variables in the script","perform an asynchronous HTTP request"];
	var secondsValue = 20;
	var originalSecondsValueHTML = "Time Remaining: " + 20 + " seconds"
	var i = 0;
	var newDialog = $("<dialog>");	
	var userAnswer = "";	
	var correctAnswersCount = 0;
	var wrongAnswersCount = 0;
	
	questionAnswers();
	var myInterval = setInterval(function(){
			triviaGame();}
	,1000);
	
	

		
	function stopInterval(){
		clearInterval(myInterval);
	}
	
	function questionAnswers(){
			$("#question").html(questions[i]);
			$("#answer1").html(answers1[i]);
			$("#answer2").html(answers2[i]);
			$("#answer3").html(answers3[i]);
			$("#answer4").html(answers4[i]);
	}
	
	
	function triviaGame(){
			secondsValue = secondsValue - 1;
			$("#timeremaining").html("Time Remaining: " + secondsValue + " seconds");
			if(secondsValue === 0){
				stopInterval();
				wrongAnswersCount++;
				newDialog.html("Time's Up<br>Correct answer is " + correctAnswers[i]);
				$("#result-box").prepend(newDialog);
				newDialog.show();
				setTimeout(function(){
					newDialog.remove();
					restartGame();	
				}, 2000);
			};
			$(".answers").unbind('click').bind('click', function(event){
				console.log(event);
				userAnswer = event.target.innerHTML;
				//console.log(userAnswer);
				//console.log(correctAnswers[i]);
					if(userAnswer == correctAnswers[i]){
						correctAnswersCount++;
						stopInterval();
						//console.log("correct");
						newDialog.html("Correct!");
						$("#result-box").prepend(newDialog);
						newDialog.show();
						setTimeout(function(){
							newDialog.remove();
							restartGame();
						}, 2000);
					}
					else{
						wrongAnswersCount++;
						stopInterval();
						//console.log("wrong");
						newDialog.html("Incorrect!<br>Correct answer is " + correctAnswers[i]);
						$("#result-box").prepend(newDialog);
						newDialog.show();
						setTimeout(function(){
							newDialog.remove();
							restartGame();
						}, 2000);
					}	
					
			});
			
	}
	
	function ifElseAction(dialogString,score){
		score++;
		stopInterval();
		
		newDialog.html(dialogString);
		$("#result-box").prepend(newDialog);
		newDialog.show();
		setTimeout(function(){
			newDialog.remove();
			restartGame();
		}, 2000);
	}

	function restartGame(){
		i++;
		if(i < questions.length){
			secondsValue=20
			$("#timeremaining").html(originalSecondsValueHTML);
			//console.log(secondsValue);	
			questionAnswers();
			myInterval = setInterval(function(){
			triviaGame();}
	,1000);
		}
		else{
			stopInterval();
			setTimeout(function(){
				$("#timeremaining").hide();
				$("#question").hide();
				$(".answers").hide();
				$("ol").hide();
				newDialog.html("Game Over<br>You answered " + correctAnswersCount + " question(s) correctly<br>You answered " + wrongAnswersCount + " question(s) incorrectly<br>Press any key to restart");
				$("#result-box").prepend(newDialog);
				newDialog.show();
				$(document).one("keypress", function(){
					newDialog.remove();
					$("#timeremaining").show();
					$("#question").show();
					$(".answers").show();
					$("ol").show();
					i = -1;
					correctAnswersCount = 0;
					wrongAnswersCount = 0;
					restartGame();
				});
			},200);
		}
	}
});