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

        //REGULAR EXPRESSION TESTS
        
        // FIRST NAME REGEX
        var str = inputs[0].value
        var patt = /^[a-zA-Z]+$/;
        var fname_res = patt.test(str);

        if (fname_res === false)
        {
            alert("Your first name must not include numbers or special characters");
        }

        //LAST NAME REGEX
        str = inputs[1].value
        patt = /^[a-zA-Z]+$/;
        var lname_res = patt.test(str);

        if (lname_res === false)
        {
            alert("Your last name must not include numbers or special characters");
        }

         //EMAIL REGEX
         str = inputs[2].value
         patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         var email_res = patt.test(str);
 
         if (email_res === false)
         {
             alert("Your email is in the incorrect format");
         }

         //EMAIL CONFIRMATION REGEX
         str = inputs[3].value
         patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         var confirm_res = patt.test(str);
 
         if (confirm_res === false)
         {
             alert("Your email confirmation is in the incorrect format");
         }

         //PHONE REGEX
         str = inputs[4].value
         patt = /^[2-9]\d{2}\d{3}\d{4}$/;
         var phone_res = patt.test(str);
 
        // document.querySelector("#phone-error").innerHTML = res;
 
         if (phone_res === false)
         {
             alert("Your phone number is in the incorrect format. Please enter your phone number in the following format: xxxxxxxxxx");
         }

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
            fname_res === true &&
            lname_res === true &&
            email_res === true &&
            confirm_res === true &&
            phone_res === true &&
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
                    str+="<br>";
                }
                str+= "<br>";
            }
            output.innerHTML += str; 
        }
    })//submitInput.addEventListener CLOSE}
    
    })//window.addEventListener CLOSE
    