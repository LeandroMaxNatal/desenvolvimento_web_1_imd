function plusBtn() {
	var x = document.getElementById('textField');
	x.value = x.value + "+";
}

function minusBtn() {
	var x = document.getElementById('textField');
	x.value = x.value + "-";
}

function multiplicationBtn() {
	var x = document.getElementById('textField');
	x.value = x.value + "*";
}

function divideBtn() {
	var x = document.getElementById('textField');
	x.value = x.value + "/";
}

function leftBracketBtn() {
	var x = document.getElementById('textField');
	x.value = x.value + "(";
}

function rightBracketBtn() {
	var x = document.getElementById('textField');
	x.value = x.value + ")";
}

function dotBtn() {
	var x = document.getElementById('textField');
	x.value = x.value + ".";	
}

function calculateBtn() {
	var x = document.getElementById('textField');
	// x.value = x.value + ")";
	// console.log();
	document.getElementById('resultado').innerHTML = eval(x.value);
}