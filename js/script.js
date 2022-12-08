
let navBar = document.querySelector('.navbar__wrapper'); 


window.onscroll = ()=> {
    
    if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100 ){
        navBar.classList.add('navbar--onscroll');
    }else {
        navBar.classList.remove('navbar--onscroll');
    } 

}
