function getPin() {
    const pin = Math.round(Math.random() * 100000);
    const pinString = pin + "";
    if(pinString.length == 5) {
        return pin;
    }
    else {
        console.log("got less than 4 digin number and calling again", pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    console.log(pin);
    document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if(isNaN(number)) {
        if(number == 'C') {
            calcInput.value = "";
        }
        // console.log(numbers);
    }
    // console.log(numbers);
    else {
        const currentCalc = calcInput.value;
        const newCalc = currentCalc + number;
        calcInput.value = newCalc;
    }
})

function verifyPin() {
    // console.log("going to verify your secrets lol!")
    const pin = document.getElementById("display-pin").value;
    const typedNumbers = document.getElementById("typed-numbers").value;
    const successMessage = document.getElementById("notify-success");
    const failError = document.getElementById("notify-fail");

    if(pin == typedNumbers) {
        successMessage.style.display = "block";
        failError.style.display = "none";
        console.log("matched bro..congratulations!!YAY");
    }
    else {
        successMessage.style.display ="none"
        failError.style.display = "block";
        console.log("opps!sorry:)");
    }
}