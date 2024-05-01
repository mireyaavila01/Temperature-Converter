"use strict"

const fahrenheitOutput = document.getElementById("fahrenheitOutput");
const celsiusInput = document.getElementById("celsiusInput");

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");




window.onload = init;


function init() {
    convertBtn.onclick = onConvertBtnClicked;
    resetBtn.onclick = onResetBtnClicked;

}

function onConvertBtnClicked() {

    //calculation    


    if (isNaN(celsiusInput.value)) {
        fahrenheitOutput.value = "";
        messagePara.innerHTML = "Error celsius value is invalid";
        return;
    }

    else {
        let celsius = Number(celsiusInput.value);
        let fahrenheit = (celsius * (9 / 5) + 32);
 

    fahrenheitOutput.value = fahrenheit;

    }
}
   



function onResetBtnClicked() {
    celsiusInput.value = "";
    fahrenheitOutput.value = "";
    messagePara.innerHTML = "";
}