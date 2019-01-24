window.addEventListener("load", function(e){

    var nameLabel = document.querySelector('#name label');
    var nameInput = document.querySelector('#name input');
    var nameError = document.querySelector('#name span');

    var ageInput = document.querySelectorAll('#age input');

    var statusInput = document.querySelector('input[name="awesomeness"]')

    var submitInput = document.querySelector('input[value="submit"]');

    nameInput.addEventListener('blur', function(e){
        e.preventDefault();
        console.log(nameInput.value, 
            document.querySelector('input[name="age"]:checked').value, 
            statusInput.checked);

        if(nameInput.value==="")
        {
            nameError.innerHTML = "*";
            nameError.setAttribute("class","error");
            nameLabel.setAttribute("class","error");
        }
        else
        {
            nameError.innerHTML = "";
            nameError.setAttribute("class","ok");
            nameLabel.setAttribute("class","ok");
        }
    })

    ageInput[0].addEventListener("click", disable, true);
    ageInput[1].addEventListener("click", disable, true);

    function disable(e)
    {
        if(document.querySelector('input[name="age"]:checked').value==="old")
        {
            statusInput.disabled = true;
            statusInput.checked = false;
        }
        else
        {
            statusInput.disabled = false;
            statusInput.checked = true;
        }
    }
})