
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
   var str = " ";

   str += "<div class='row'>";
    for (i = 1; i <= numberOfDaysInMonth + firstDayOfWeek; i++)
        {
            if ((i-1) % 7 == 0 && i > 0)
            {
                str += "</div>";
                str += "<div class='row'>";
                str += "<div id='" + i + "' class='day'>";

                if (i - firstDayOfWeek > 0)
                {               
                    str += i - firstDayOfWeek; 
                }

                str += "</div>";
                
            }
            else{
                str += "<div id='" + i + "' class='day'>";

                if (i - firstDayOfWeek > 0)
                {               
                    str += i - firstDayOfWeek; 
                }

                str += "</div>";
            }
        }
    
    str += "</div>";

    str += "<br><br><br><ul>";
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    str += "</ul>";
    
    console.log(str);
    $("#results").html(str);
    }

    window.addEventListener("load", function(e){
    var avail = document.querySelectorAll(".day")
  
    for(var i=0; i < avail.length; i++)
        {
            avail[i].addEventListener("click", function selectDay(e)
            {            
                if (this.style.backgroundColor == '')
                {
                    this.style.backgroundColor = "green";
                }            
                
                else if (this.style.backgroundColor == "green")
                {
                    this.style.backgroundColor = "red";
                }
               
                else
                {
                    this.style.backgroundColor = '';
                }
            
            });
        }
        
    document.getElementById("yes").addEventListener("click", function()
    {
        var obj = ".day";
        obj.style.backgroundColor , "green";
       // document.querySelectorAll(".day").style.backgroundColor = "green";
        
    })

    document.getElementById("no").addEventListener("click", function() 
    {
        document.querySelectorAll(".day").style.backgroundColor = "red";
    })
        
    });


    