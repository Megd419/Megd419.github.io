window.addEventListener("load", function(e){

var link = document.querySelectorAll('a');

for(var i =0; i < link.length; i ++)
{
link[i].addEventListener("click", function(e){
    e.preventDefault();
    e.target.style.color=e.target.dataset.color;
});
}


//************************************************************** 
/* var link = document.querySelectorAll('a');

   function add(a=0,b=0)
   {
        return a +b;
   }

   console.log(add(100,100));

   link[0].addEventListener("click", function(){
       e.preventDefault();
       add(5,6);
   });
   */
   //**************************************************************
   
    /* link[0].addEventListener("click", function(e){clicker(e)});
     link[0].addEventListener('click', alerter);

    function clicker(e)
    {
        e.preventDefault();
        console.log(this);
    };

    function alerter(e)
    {
        e.preventDefault();
        alert("Yo!");
    }

    link[1].addEventListener("click", function(e)
    {
        e.preventDefault();
        link[0].removeEventListener('click', clicker);
    });
*/

});