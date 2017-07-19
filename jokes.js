$("#button1").click( function(){
 $("#joke-1").html("nacho cheese");
});

$("#button2").click( function(){
    $("#joke-2").append("It gets jalapeño face!");
});

// Task 3: Create a click handler that appends a paragraph with "It was two-tired" in it.
$("#button3").click(function(){
    $("#joke-3").append("It was two-tired");
});



// Task 4: Create a click handler for joke-4 that changes the attribute src from the current image to this image --> "http://i.imgur.com/ZCIkkze.jpg"
$("#button4").click(function(){
    $("img").attr("src","http://i.imgur.com/ZCIkkze.jpg");
});




// Bonus: Create a button for each one of these jokes. When the user clicks a button the action should occur

