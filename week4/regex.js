var nameInput = document.querySelector("#name");
var submitInput = document.querySelector("input[value='submit']");

var regEx = /[\w \']{1,}/i;

submitInput.addEventListener('click', function(e){

	if(regEx.test(nameInput.value))
  {
  	nameInput.style.backgroundColor = "white";
  }
  else
  {
  	nameInput.style.backgroundColor ="red";
  }

})