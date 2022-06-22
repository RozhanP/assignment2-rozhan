//IIFE
(function()
{

    function Start()
    {
        console.log("App Started!");
        $("a.delete").on("click",function(event)
        {
            if(!confirm("Are you sure you want to delete the item?"))
            {
                event.preventDefault();
                location.href = "/contact-list";
            }

        });
    }
    window.addEventListener("load",Start);
    

})();