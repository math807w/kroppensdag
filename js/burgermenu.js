var bmiw = document.getElementById('burger-menu-icon-wrapper');

    bmiw.onclick = function(){
        var nav = document.getElementById('nav'),
            h = document.getElementById('header'),
            bm = document.getElementById('burger-menu');
        bm.classList.toggle("open");
        if(bm.classList.contains("open")){
            nav.style.display = "block";
            h.style.backgroundColor = "#445763";
            setTimeout(
                function(){
                    nav.style.opacity = 1;
                    }, 1);
        }
        else if (bm.classList.contains("open") == false){
            nav.style.opacity = 0;
            h.style.backgroundColor = "transparent";
            setTimeout(
                function(){
                    nav.style.display = "none";
                }, 250);
        }
    } 