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

    var bm = document.getElementById('burger-menu');

    bm.onclick = function(){
        var nav = document.getElementById('nav');
        bm.classList.toggle("open");
        if(bm.classList.contains("open")){
            nav.style.display = "block";
            setTimeout(
                function(){
                    nav.style.opacity = 1;
                    }, 1);
        }
        else if (bm.classList.contains("open") == false){
            nav.style.opacity = 0;
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

            // Tjekker om scroll-afstanden fra top er højere end headerens højde (82px)
            if(dst < header.offsetHeight || bst < header.offsetHeight){
                // Sætter headerens afstand fra top til 0.
                header.style.top = "0px";
                header.style.position = "absolute";
                /*header.style.display = "none";*/
            }
            // Tjekker om scroll-afstanden fra top er større end headerens højde, men mindre end forside-sektionens højde
            if(dst > header.offsetHeight  && dst < section.offsetHeight || bst > header.offsetHeight && bst < section.offsetHeight){
                // Sætter headerens afstand fra top - til minus headerens egen størrelse (-82px)
                header.style.top = "-" + header.offsetHeight + "px";
                /*header.style.display = "block";*/
            }
            // Tjekker om scroll-afstanden er større end forside-sektionens højde
            if (dst > section.offsetHeight || bst > section.offsetHeight){
                // Sætter headerens afstand fra top til 0.
                header.style.top = "0px";
                // Sætter headerens position til fixed.
                header.style.position = "fixed";
            }
        }
});