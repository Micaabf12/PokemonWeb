window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})



const nav = document.getElementById('nav')
const bg_menu = document.getElementById("back-menu")

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.getElementById('nav').classList.add('show');
    document.getElementById('back-menu').classList.add('back-menu');
}

bg_menu.addEventListener('click',e => {
  if(e.target.id === 'back-menu'){
    nav.classList.remove('show');
    bg_menu.classList.remove('back-menu');
  }
})