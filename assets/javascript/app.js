$(document).ready(function(){
	var questions = ["What is 2+2?","What is 2+3?", "What is 1+1"];
	var answers1 = [1,2,3,4];
	var answers2 = [5,6,7,8];
	var answers3 = [4,3,2,1];
	var answers4 = [6,7,8,9];
	var secondsValue = 5;
	var entireDIV = "";
	console.log("hello");
		
	var theInterval = setInterval(function(){
		triviaGame()}
		,1000);
		
	function stopInterval(){
		clearInterval(theInterval);	
	}
	
	function triviaGame(){
		for( var i = 0; i < questions.length; i++){
			$("#question").html(questions[i]);
			$("#answer1").html(answers1[i]);
			$("#answer2").html(answers2[i]);
			$("#answer3").html(answers3[i]);
			$("#answer4").html(answers4[i]);
			}
			secondsValue = secondsValue - 1;
			$("#timeremaining").html("Time Remaining: " + secondsValue + " seconds");
			if(secondsValue == 0){
				stopInterval();
				var newDialog = $("<dialog>");
				newDialog.html("You Lose");
				$("#result-box").prepend(newDialog);
				newDialog.show();
				setTimeout(function(){
					newDialog.remove();}, 2000);
				console.log("hello");
			};
				
	}		
});