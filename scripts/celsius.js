"use strict"


const fahrenheitInput = document.getElementById("fahrenheitInput");
const celsiusOutput = document.getElementById("celsiusOutput");

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");



window.onload = init;

function init() {
    convertBtn.onclick = onConvertBtnClicked;
    resetBtn.onclick = onResetBtnClicked;
}

function onConvertBtnClicked() {

    //the calculations

    if (isNaN(fahrenheitInput.value)) {
        celsiusOutput.value = "";
        messagePara.innerHTML = "Error fahrenheit value is invalid";
        return;
    }

    else {
        let fahrenheit = Number(fahrenheitInput.value);
        let celsius = (fahrenheit - 32) * (5 / 9);


        // the result 

        celsiusOutput.value = celsius;
    
    }
}


function onResetBtnClicked() {
    fahrenheitInput.value = "";
    celsiusOutput.value = "";
    messagePara.html = "";

}