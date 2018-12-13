 // Lytter efter scroll og hvis der bliver scrollet, kører den function der hedder fixedHeader
    document.addEventListener('scroll', fixedHeader);

    // Starter funktionen
        function fixedHeader(){
            // Finder elementerne med ID'et header og fp-section, og deklarerer dem som variabler
            var header = document.getElementById('header'),
                section = document.getElementById('fp-section'),

                // Finder ud af, hvor mange pixels der er blevet scrollet fra top. Chrome bruger document.documentElement
                dst = document.documentElement.scrollTop,

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