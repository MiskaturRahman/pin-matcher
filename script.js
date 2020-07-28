const generateNumber = document.getElementById("generateNumber");
generateNumber.addEventListener('click', function () {
    //generate number

    const RandomNumber = (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

    //display generated number to input box
    const displayRNumber = document.getElementById("displayRandomNumber").value;
    document.getElementById("displayRandomNumber").value = RandomNumber;
})

//enter generated pin
function enterNumber(number) {
    const displayNumber = document.getElementById("enterNumber").value;
    document.getElementById("enterNumber").value = displayNumber + number;
}

//clearData from input
function clearData() {
    document.getElementById("enterNumber").value = "";
}

//delete one input at a time
function deleteNumber() {
    const displayValue = document.getElementById("enterNumber").value;
    if (displayValue != "") {
        document.getElementById("enterNumber").value = displayValue.slice(0, -1);
    }
}


const submit = document.getElementById("submit");
submit.addEventListener('click', function () {
    if (document.getElementById("displayRandomNumber").value == document.getElementById("enterNumber").value) {
        alert("Pin matching successful");

    }
    else {
        alert("no match");
    }
})

