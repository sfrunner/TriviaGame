$(document).ready(function(){
	var questions = ["What is 2+2?","What is 2+3?", "What is 1+1"];
	var correctAnswers = [4,5,2];
	var answers1 = [1,5,3];
	var answers2 = [5,6,7];
	var answers3 = [4,3,2,];
	var answers4 = [6,7,2];
	var secondsValue = 15;
	var originalSecondsValueHTML = "Time Remaining: " + 15 + " seconds"
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
				newDialog.html("Time's Up<br>Correct Answer is " + correctAnswers[i]);
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
						newDialog.html("Incorrect!<br>Correct Answer is " + correctAnswers[i]);
						$("#result-box").prepend(newDialog);
						newDialog.show();
						setTimeout(function(){
							newDialog.remove();
							restartGame();
						}, 2000);
					}	
					
			});
			
	}
	
	function restartGame(){
		i++;
		if(i < questions.length){
			secondsValue=15
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
				newDialog.html("Game Over<br>You answered " + correctAnswersCount + " question(s) correctly<br>You answered " + wrongAnswersCount + " question(s) incorrectly<br>Press any key to restart");
				$("#result-box").prepend(newDialog);
				newDialog.show();
				$(document).keypress(function(){
					newDialog.remove();
					$("#timeremaining").show();
					$("#question").show();
					$(".answers").show();
					i = -1;
					correctAnswersCount = 0;
					wrongAnswersCount = 0;
					restartGame();
				});
			},2000);
		}
	}
});