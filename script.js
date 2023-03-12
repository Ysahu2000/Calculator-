// get the output screen element
let outputScreen = document.getElementById("result");

// function to display a number or operator on the screen
function Display(num) {
    outputScreen.value += num;
}

// function to clear the screen
function Clear() {
    outputScreen.value = "";
}

// function to calculate the result
function Calculate() {
    let result = eval(outputScreen.value);
    outputScreen.value = result;
}

// function to delete the last character
function Delet() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
