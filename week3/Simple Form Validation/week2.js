// JavaScript Document

window.addEventListener("load", function(e){

var inputs = document.querySelectorAll('input[type="text"]');
var inputError = document.querySelectorAll('span');
var inputLabel = document.querySelectorAll('label');

var submitInput = document.querySelector('input[value="submit"]');

for (let i = 0; i < inputs.length; i++) {
inputs[i].addEventListener('blur', function(e){
    e.preventDefault(); 

    if( this.value === "")
    { 
        inputError[i].innerHTML = "*";
        inputError[i].setAttribute("class","error");
        inputLabel[i].setAttribute("class", "error");
    }
    else
    {
        inputError[i].innerHTML = "";
        inputLabel[i].setAttribute("class","ok");

        submitInput.addEventListener('click', function(e){
            if (this.value != "" &&
                document.querySelector('input[id="email"]').value === document.querySelector('input[id="confirm-email"]').value)
             {
                 document.getElementById('confirmation').style.display = "block";
                 document.getElementById("confirmation").innerHTML = "Hello";
             }
         
 })//submitInput.addEventListener CLOSE
    }
    
    
})//inputs[i].addEventListener CLOSE
} //for loop CLOSE
})//window.addEventListener CLOSE
