"use strict"


const fahrenheitInput = document.getElementById("fahrenheitInput");
const celsiusOutput = document.getElementById("celsiusOutput");

const convertBtn = document.getElementById("convertBtn");



window.onload = init;

function init(){
    convertBtn.onclick = onConvertBtnClicked
}

function onConvertBtnClicked(){

    
     
//the calculations

    let fahrenheit = Number(fahrenheitInput.value);

    

    if (isNaN(fahrenheitInput)){
        celsiusOutput.value = "";
     messagePara.innerHTML = "Error fahrenheit value is invalid";
    return;   
    }
    
 let celsius = (fahrenheit - 32 ) * (5 / 9);


// the result 
   
    celsiusOutput.value = celsius;
    messagePara.innerHTML = "";
}


