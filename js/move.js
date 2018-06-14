/*
 * descrição: API Google Search
 * autor: Juan Bertoluzzi Garcia
 * entrada: Nome para busca.
 * saida: Assuntos com o nome para busca.
 */
function Api() {
    var cx = '007833354045512050991:kcbhcpzkuai';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
}

/*
 * descrição: Slide de imagens
 * autor: Allan Silva Bezerra
 * entrada:  
 * saida: 
 */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
}

/*
 * descrição: Lista de Colaboradores
 * autor: Lucas de Mello Rocha
 * entrada:  
 * saida: 
 */
