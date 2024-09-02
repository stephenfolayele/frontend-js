const navBar = document.querySelector('.navbar')
let navTop = navBar.offsetTop;

window.onscroll = function(){
    stickyNavScroll()
}

function stickyNavScroll(){
    console.log(navTop, window.scrollY);
    if (window.scrollY >= navTop) {
        navBar.classList.add('add-sticky')
    } else {
        navBar.classList.remove('add-sticky')
    }
}