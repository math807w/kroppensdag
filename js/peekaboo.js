function yScrollHandler(){
        var win = document.getElementById("peekaboo");
        if((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight){
        win.style.transition = "right 0.7s ease-in-out";
        win.style.display = "block";        
        setTimeout(
            function(){
                win.style.right = "0";
            }, 1);
        } 
    }
    window.onscroll = yScrollHandler;
