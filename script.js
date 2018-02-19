var whichCalculator = prompt("Which calculator do you want to use? (b)asic, (a)dvanced, (c)BMI or (d)Trip Calculator?");

if (whichCalculator == "a" || whichCalculator == "b" || whichCalculator == "c" || whichCalculator == "d") {
	if(whichCalculator == "c"){
	var weight = prompt("Tell me your weight in kilograms please.");
	var height = prompt("Tell me your height in metres please");
	alert("Your BMI is " + weight/height/height);

	} else if (whichCalculator == "a" || whichCalculator == "b") {
		var firstNum = prompt("Type a number");
		var secondNum = prompt("Type another number");

		if (whichCalculator == "b") {
			var whichOperator = prompt("Should I (1)add, (2)multiple, (3)divide or (4)subtract?");
			switch(whichOperator){
				case "1":
					alert(firstNum + secondNum);
					break;
				case "2":
					alert(firstNum * secondNum);
					break;
				case "3":
					alert(firstNum / secondNum);
					break;
				default:
					alert(firstNum - secondNum);
			}
		} else if(whichCalculator == "a"){
			var whichOperator = prompt("Should I (1)add, (2)multiple, (3)divide, (4)subtract, (5)power or (6)square root?");
			switch(whichOperator){
				case "1":
					alert(firstNum + secondNum);
					break;
				case "2":
					alert(firstNum * secondNum);
					break;
				case "3":
					alert(firstNum / secondNum);
					break;
				case "4":
					alert(firstNum - secondNum);
					break;
				case "5":
					alert(Math.pow(firstNum, secondNum));
					break;
				default:
					alert("The square root of " + firstNum + " is " + Math.sqrt(firstNum) + " and the square root of " + secondNum + " is " + Math.sqrt(secondNum));
			}
		} 
	} else{

	}
}else{
	alert("Not valid!");
}






