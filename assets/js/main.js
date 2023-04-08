const openMenu = document.querySelector(".fa-bars");
const menu = document.querySelector(".nav_bar-mobile");

openMenu.addEventListener("click",open);
menu.addEventListener("click",open);

function open() {
    menu.classList.toggle("show")
}

window.addEventListener("scroll", reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveral');

        for(var i = 0 ; i < reveals.length ; i++){
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealTop < windowHeight - revealpoint){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }
        }
    }