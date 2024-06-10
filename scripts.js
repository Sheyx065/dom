
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function toggleLine(element) {
    var links = document.getElementsByClassName('nav-link');
  
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('underline');
    }
   
    element.classList.add('underline');
}

window.addEventListener('resize', function() {
    if (window.innerWidth < 600) {
        closeNav();
    }
});
