// Query selector to select the type of currency...
const select = document.querySelectorAll('.currency');

// get all field using getelement by id...
const btn = document.getElementById('btn')
const num = document.getElementById('num');
const result = document.getElementById('result');

// console.log(select);
// fetch the currency...
fetch('https://api.frankfurter.app/currencies')
.then((data) => data.json()) // convert the js object...
.then((data) => {
    // console.log(data);
    display(data);
});

// Display function...
function display(data) {
    const entries = Object.entries(data); // convert the array
    // console.log(entries.length); 
    
    // display all currency Name using for loop...
    for(let i = 0; i < entries.length; i++) {
        // console.log(entries[i][0]);
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
}

// Add eventlistener for button...
btn.addEventListener("click",() => {
    let currency1 = select[0].value;
    let currency2 = select[1].value;

    let value = num.value;

    // To check condition if two currency have the same type mean it will show the alert message...
    if(currency1 != currency2) {
        convert(currency1, currency2, value);
    } else {
        alert("Please select Differnt currency Value...")
    }
})

// Convert Function for convert the currency value...
function convert(currency1, currency2, value) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
    .then((val) => val.json())
    .then((val) => {
        // console.log(val);
        // console.log(Object.values(val)[0]);
        result.value = Object.values(val.rates)[0];
    })
}