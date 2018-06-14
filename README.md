work-api
trabalho

git checkout ---> bug pull
git pull | conferir atualizações
git status 
git commit -m "descricao"
git push | direciona ao git
git add
ctrl C = bug


Mostrar para o Lucas
https://www.videolan.org/developers/vlc.html


<!--Código para automção do carousel-->
<script>  
   
var myIndex = 0;
carousel();

function plusDivs(n) {
     showDivs(slideIndex += n);
   }

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500);  

     
 $('.carousel').carousel();
}

</script>

https://projeto-the-dags-juanbg10.c9users.io/index.html