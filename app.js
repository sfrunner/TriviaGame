$(document).ready(function(){
	var questions = ["What is 2+2?","What is 2+3?", "What is 1+1"];
	var correctAnswers = [4,5,2];
	var answers1 = [1,5,3];
	var answers2 = [5,6,7];
	var answers3 = [4,3,2,];
	var answers4 = [6,7,2];
	var secondsValue = 20;
	var i = 0;
	var newDialog = $("<dialog>");	
	var userAnswer = "";	
	
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
				newDialog.html("Time's Up");
				$("#result-box").prepend(newDialog);
				newDialog.show();
				setTimeout(function(){
					newDialog.remove();}, 2000);
				restartGame();
			};
			$(".answers").unbind('click').bind('click', function(event){
				console.log(event);
				userAnswer = event.target.innerHTML;
				//console.log(userAnswer);
				//console.log(correctAnswers[i]);
					if(userAnswer == correctAnswers[i]){
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
						stopInterval();
						//console.log("wrong");
						newDialog.html("Wrong!");
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
		if(i < questions.length){
			i++;
			secondsValue=15
			//console.log(secondsValue);	
			questionAnswers();
			myInterval = setInterval(function(){
			triviaGame();}
	,1000);
		}
		else{
			console.log("Game Over");
		}
	}
});