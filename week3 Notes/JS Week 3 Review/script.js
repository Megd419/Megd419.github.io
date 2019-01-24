window.addEventListener("load", init);

var buttons, people;

function init(e)
{

	people=[];
	buttons={};
	
	buttons.first = document.querySelector("input[name='firstName']");
	buttons.last = document.querySelector("input[name='lastName']");
	buttons.submit = document.querySelector("#submit");
	buttons.output = document.querySelector("#output");
	
	buttons.submit.addEventListener("click", addName);	
	
}

function addName(e)
	{
		people.push({firstName:buttons.first.value, lastName:buttons.last.value});
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