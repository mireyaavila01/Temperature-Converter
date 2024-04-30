"use strict"

const fahrenheitOutput = document.getElementById("fahrenheitOutput");
const celsiusInput = document.getElementById("celsiusInput");

const convertBtn = document.getElementById("convertBtn");

    


window.onload = init;


function init () {
    convertBtn.onclick = onConvertBtnClicked;

}

function onConvertBtnClicked(){
     
//calculation    

    let celsius = Number(celsiusInput.value);
/*
if (isNaN(celsiusInput)){
        fahrenheitOutput.value = "";
     messagePara.innerHTML = "Error celsius value is invalid";
    return; 
    }
    */


    let fahrenheit = (celsius * (9/5) + 32);

//the result

    fahrenheitOutput.value = fahrenheit;

    messagePara.innerHTML = ""; 
}

