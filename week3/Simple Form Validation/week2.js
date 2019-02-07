// JavaScript Document

window.addEventListener("load", function(e){

var inputs = document.querySelectorAll('input[type="text"]');
var inputError = document.querySelectorAll('span');
var inputLabel = document.querySelectorAll('label');
var people = [];

var submitInput = document.querySelector('input[value="submit"]');

var output = document.querySelector("#confirmation");

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
    }

})//inputs[i].addEventListener CLOSE
} //for loop CLOSE

submitInput.addEventListener("click", function(e){
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value === "")
    { 
        inputError[i].innerHTML = "*";
        inputError[i].setAttribute("class","error");
        inputLabel[i].setAttribute("class", "error");
    }
    }//for loop CLOSE


    if (inputs[2].value != inputs[3].value)
    {
    inputError[3].innerHTML = "*";
    inputError[3].setAttribute("class","error");
    inputLabel[3].setAttribute("class","error");
    }

    if  (inputs[0].value != "" && 
        inputs[1].value != "" &&
        inputs[2].value != "" &&
        inputs[3].value != "" &&
        inputs[4].value != "" &&
        inputs[2].value === inputs[3].value
        )

    {
    document.querySelector('#form').style.display = "none";
    document.querySelector('#confirmation').style.display = "block";

   

   people.push({"#first-name":inputs[0].value, "#last-name":inputs[1].value, "#email":inputs[3].value, "#phone":inputs[4].value});
    console.log(people);
		
		var str = "";
		for(var i=0; i < people.length; i++)
		{
			for(value in people[i])
			{
				str+=people[i][value];
                str+=" ";
            }
            str+= "<br>";
        }
		output.innerHTML += str; 
    }

})//submitInput.addEventListener CLOSE}

})//window.addEventListener CLOSE
