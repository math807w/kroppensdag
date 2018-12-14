    document.addEventListener('scroll', fixedHeader);

        function fixedHeader(){
            var header = document.getElementById('header'),
                section = document.getElementById('fp-section'),
                dst = document.documentElement.scrollTop,

            if (dst >= section.offsetHeight){
                header.style.top = "0px";
                header.style.position = "fixed";
            }
            else if(dst < section.offsetHeight){
                header.style.top = "-" + header.offsetHeight + "px";
            }
        }