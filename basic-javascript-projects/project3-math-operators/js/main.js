function additionDemo(){  //these first four functions show addition, subtraction, multiplication, and division, respectively
    var theSum = 9 + 10;
    var firstBit = "9+10=";
    document.getElementById("math1").innerHTML = (firstBit + theSum);
}

function subtractionDemo(){
    var theSubtraction = 14-6;
    document.getElementById("math2").innerHTML = ("14-6=" + theSubtraction);
}

function multiplicationDemo(){
    var theMultiplication = 14 * 30;
    
    document.getElementById("math3").innerHTML = ("14*30=" + theMultiplication);
}

function divisionDemo(){
    var theDivision = 130/6;
    document.getElementById("math4").innerHTML = ("130/6=" + theDivision);
}

function largeMathDemo(){ //this function shows a longer math problem
    var theAnswer = 11 * 6 / 15 - 3 + 30 * 2
    document.getElementById("math5").innerHTML = "eleven ties six divided by fifteen minus three plus thirty times two is " + theAnswer;
}

function modulusOperator() { //this function gives you the remainder of a division problem
    var theModOp = 11 % 100;
    document.getElementById("math6").innerHTML = "the remainder of 11 / 100 is ." + theModOp;
}

function negationOperator() { // this function returns you the negation of an operator
    var initOperator = 11;
    document.getElementById("math7").innerHTML = "the negation operator of 11 is " + -initOperator;
}

function incrementNumber() { //this functiono increments a variable by one
    var Increment = 5;
    Increment++;
    document.getElementById("math8").innerHTML = "5 incremented by 1 is " + Increment;
}

function decrementNumber() { // this function decrments a variable by one
    var decrement = 5;
    decrement--;
    document.getElementById("math9").innerHTML = "5 decremented by 1 is " + decrement;
}

function randNum() { // this function returns a random number fromm one to one-hundred
    window.alert(Math.random() * 100);

}

function roundNum() { // this function utilizes the javascript math object. Specifically it rounds a number to the nearst whole number. 
    theRoundNum = 6.7;
    theRoundNum = Math.round(theRoundNum);
    document.getElementById("math10").innerHTML = "6.7 rounded to the nearest whole number is " + theRoundNum;
}