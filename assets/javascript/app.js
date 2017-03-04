$(document).ready(function(){
	
	//Global Variables
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
	var userAnswer;
	var myInterval;
	var correctAnswersCount = 0;
	var wrongAnswersCount = 0;
	var newLI;
	var newh3;
	
	//Full Program
	$(document).one("keypress",function(){
		for(var n = 1; n <= 4; n++){
			newLI = $("<li>");
			newLI.attr("id","BP-"+n);
			$("#answers-list").append(newLI);
			newh3 = $("<h3>");
			newh3.attr("id","answer"+n);
			newh3.attr("class","answers");
			$("#BP-"+n).append(newh3);		
		};
		$("#timeremaining").html("Time Remaining: " + secondsValue + " seconds");
		$("ol").show();
		questionAnswers();
		myInterval = setInterval(function(){
			triviaGame();
		},1000);
	});	
	

	//Function to stop myInterval
	function stopInterval(){
		clearInterval(myInterval);
	}
	
	//Function for printing question and answers
	function questionAnswers(){
		$("#question").html(questions[i]);
		$("#answer1").html(answers1[i]);
		$("#answer2").html(answers2[i]);
		$("#answer3").html(answers3[i]);
		$("#answer4").html(answers4[i]);
	}
	
	//Function for actual game itself
	function triviaGame(){
		secondsValue = secondsValue - 1;
		$("#timeremaining").html("Time Remaining: " + secondsValue + " seconds");
		if(secondsValue === 0){
			ifElseAction("Time's Up<br>Correct answer is " + correctAnswers[i],wrongAnswersCount++);
		};
		$(".answers").unbind("click").bind("click", function(event){
			console.log("Click!");
			userAnswer = event.target.innerHTML;
			if(userAnswer == correctAnswers[i]){
				ifElseAction("Correct!",correctAnswersCount++);
			}
			else{
				ifElseAction("Incorrect!<br>Correct answer is " + correctAnswers[i],wrongAnswersCount++);
			}		
		});	
	}
	
	//Function for universal actions when certain criteria is met
	function ifElseAction(dialogString,scoreAddition){
		stopInterval();
		scoreAddition;
		newDialog.html(dialogString);
		$("#result-box").prepend(newDialog);
		newDialog.show();
		setTimeout(function(){
			newDialog.remove();
			restartGame();
		}, 3000);
	}
	
	//Critera and Actions to Restart/Reset Game
	function restartGame(){
		i++;
		stopInterval();
		if(i < questions.length){
			secondsValue=20
			$("#timeremaining").html(originalSecondsValueHTML);	
			questionAnswers();
			myInterval = setInterval(function(){
				triviaGame();
			},1000);
		}
		else{
			stopInterval();
			$("#timeremaining, #question, .answers, ol").hide();
			newDialog.html("Game Over<br>You answered " + correctAnswersCount + " question(s) correctly<br>You answered " + wrongAnswersCount + " question(s) incorrectly<br>Press any key to restart");
			$("#result-box").prepend(newDialog);
			newDialog.show();
			$(document).one("keypress", function(){
				newDialog.remove();
				$("#timeremaining, #question, .answers, ol").show();					
				i = -1;
				correctAnswersCount = 0;
				wrongAnswersCount = 0;
				restartGame();
			});
		}
	}
});