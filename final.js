$("#search").click(function(){
    var input=$("#flowers").val();
    
    if (input==="beebalm"){
        $("#beebalmimg").css("border"," solid yellow 20px");
        }
    if (input==="indian grass"){
        $("#indianimg").css("border","solid yellow 20px");
        }
        
    if (input==="milkweed"){
        $("#milkweedimg").css("border","solid yellow 20px");
    }
    
      if (input==="black eyed susan"){
        $("#blackeyedimg").css("border","solid yellow 20px");
    }
    
     if (input==="coneflower"){
        $("#coneflowerimg").css("border","solid yellow 20px");
    }
    
     if (input==="columbine"){
        $("#columbineimg").css("border","solid yellow 20px");
    }
    
     if (input==="thimbleweed"){
        $("#thimbleweedimg").css("border","solid yellow 20px");
    }
        });
        
        
$("#beebalmimg").click(function(){
    $("#beebalmimg").css("border","solid black 10px");
});

$("#indianimg").click(function(){
    $("#indianimg").css("border","solid black 10px");
});

$("#milkweedimg").click(function(){
    $("#milkweedimg").css("border","solid black 10px");
});

$("#blackeyedimg").click(function(){
    $("#blackeyedimg").css("border","solid black 10px");
});

$("#coneflowerimg").click(function(){
    $("#coneflowerimg").css("border","solid black 10px");
});

$("#columbineimg").click(function(){
    $("#columbineimg").css("border","solid black 10px");
});

$("#thimbleweedimg").click(function(){
    $("#thimbleweedimg").css("border","solid black 10px");
});


