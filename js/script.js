document.addEventListener("DOMContentLoaded", function() {

/* --------------------SMOOTH SCROLL FUNKTION -------------------- */

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

/* -------------------- Burger Menu -------------------- */

    var bmiw = document.getElementById('burger-menu-icon-wrapper'),
        bm = document.getElementById('burger-menu');

    bmiw.onclick = function(){
        var nav = document.getElementById('nav'),
            h = document.getElementById('header');
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
    
/* -------------------- Sticky header -------------------- */
    // Lytter efter scroll og hvis der bliver scrollet, kører den function der hedder fixedHeader
    document.addEventListener('scroll', fixedHeader);

    // Starter funktionen
        function fixedHeader(){
            // Finder elementerne med ID'et header og fp-section, og deklarerer dem som variabler
            var header = document.getElementById('header'),
                section = document.getElementById('fp-section'),

                // Finder vinduets højde (i px), svarende til enheden vh (Viewport height) i CSS
                vh = window.innerHeight,

                // Finder ud af, hvor mange pixels der er blevet scrollet fra top. Chrome bruger document.documentElement
                dst = document.documentElement.scrollTop;

                // Finder ud af, hvor mange pixels der er blevet scrollet fra top. Safari bruger document.body
                bst = document.body.scrollTop;

            // Tjekker om scroll-afstanden er større end forside-sektionens højde
            if (dst >= section.offsetHeight || bst >= section.offsetHeight){
                // Sætter headerens afstand fra top til 0.
                header.style.top = "0px";
                // Sætter headerens position til fixed.
                header.style.position = "fixed";
            }
            else if(dst < section.offsetHeight || bst < section.offsetHeight){
                header.style.top = "-" + header.offsetHeight + "px";
            }
        }
        /* -------------------- PEEKABOO -------------------- */

    function yScrollHandler(){
        var win = document.getElementById("peekaboo");
        if((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight){
        //win.style.webkitTransition = "right 0.7s ease-in-out 0s";
        win.style.transition = "right 0.7s ease-in-out 0s";
        win.style.right = "0";
        } /*else {
        win.style.transition = "right 0.7s ease-in-out 0s";
        win.style.right = "-452px";
        }*/
    }
    window.onscroll = yScrollHandler;


        /* -------------------- Intro parallax animation -------------------- */
    function introAnimation(){
        var paper = document.getElementsByClassName('paper-rip')[0],
        tw = document.getElementById('title-wrapper');
        pil = document.getElementById('forside-pil-ned');
        paper.style.height = "140px";
        tw.style.marginBottom = "0px";
        setTimeout(
            function(){
            pil.style.zIndex = ("1");
            }, 1500);
    }
    setTimeout(
        function(){
    introAnimation();
        }, 250);

    

});

