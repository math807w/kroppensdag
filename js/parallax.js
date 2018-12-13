/* -------------------- Intro parallax animation -------------------- */

function introAnimation(){
    var paper = document.getElementsByClassName('paper-rip')[0],
    tw = document.getElementById('title-wrapper'),
    pil = document.getElementById('forside-pil-ned');
    paper.style.height = "140px";
    tw.style.marginBottom = "0px";
    setTimeout(
        function(){
            pil.style.zIndex = ("1");
            document.getElementsByClassName('btn-face')[0].style.zIndex = ("1");
            document.getElementsByClassName('btn-instagram')[0].style.zIndex = ("1");
        }, 1500);
}
    setTimeout(
        function(){
            introAnimation();
        }, 250);