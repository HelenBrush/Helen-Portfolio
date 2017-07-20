  var change=false;

$("body").click(function(){
    if(change===false){
        document.body.style.backgroundImage = "url('https://mail.google.com/mail/u/0/?ui=2&ik=21b75b9a14&view=att&th=15d5d797e8daa16f&attid=0.4&disp=safe&realattid=f_j5bpxs393&zw')";
        change=true;
    }
    if(change===true){
           document.body.style.backgroundImage = "url('https://mail.google.com/mail/u/0/?ui=2&ik=21b75b9a14&view=att&th=15d5d797e8daa16f&attid=0.1&disp=safe&realattid=f_j5bpvwov0&zw')";
            change=false;
    }
    
});
 
