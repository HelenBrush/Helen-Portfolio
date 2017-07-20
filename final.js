$("#search").click(function(){
    var input=$("#flowers").val();
    
    if (input==="beebalm"){
        $("#beebalmimg").css("border"," solid yellow 20px");
        }
    if (input==="indian grass"){
        $("#indianimg").css("border","solid yellow 20px");
    }
        
        });
        
        
$("#beebalmimg").click(function(){
    $("#beebalmimg").css("border","solid black 10px");
});
