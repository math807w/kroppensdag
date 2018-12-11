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
});