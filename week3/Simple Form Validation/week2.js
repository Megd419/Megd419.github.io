// JavaScript Document

window.addEventListener("load", function(e){

var inputs = document.querySelectorAll('input[type="text"]');
var inputError = document.querySelectorAll('span');
var inputLabel = document.querySelectorAll('label');

var submitInput = document.querySelector('input[value="submit"]');

for (let i = 0; i < inputs.length; i++) {
inputs[i].addEventListener('blur', function(e){
    e.preventDefault(); 
       console.log(inputError[i]);
    if( this.value === "")
    { 
        inputError[i].innerHTML = "*";
        inputError[i].setAttribute("class","error");
        inputLabel[i].setAttribute("class", "error");
    }
    else
    {
        console.log(inputError[i]);
        inputError[i].innerHTML = "";
    }
    
})//inputs[i].addEventListener CLOSE
} //for loop CLOSE
})//window.addEventListener CLOSE
