// Get the input id by getElementById...
let inputVal = document.getElementById('res');

// Display Function to display the value in input area...
function display(num) {
    inputVal.value += num;
}

// Clear function to clear the result area...
function clr() {
    inputVal.value = "";
}
// Delete the value one by one
function del() {
    inputVal.value = inputVal.value.slice(0,-1);
}

// Calculate function to calculate the result...
function calculate() {
    try {
        inputVal.value = eval(inputVal.value);
    }
    catch(err) {
        alert("invalid");
    }
}