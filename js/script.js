
let navBar = document.querySelector('.navbar__wrapper');
let navBarLogo = document.querySelector('.navbar__logo');
let windowWidth = window.innerWidth; 

//NavBar action on scroll 
window.addEventListener('resize', ()=>{
    if(window.innerWidth !== windowWidth){
        windowWidth = window.innerWidth; 
    }else {
        return;
    }
    windowWidth < 768 ? navBarLogo.classList.add('navBar_logo--onscroll') : navBarLogo.classList.remove('navBar_logo--onscroll');

});
window.onload = ()=> {
    windowWidth < 768 ? navBarLogo.classList.add('navBar_logo--onscroll') : navBarLogo.classList.remove('navBar_logo--onscroll');

    window.onscroll = ()=> {
    
        windowWidth < 768 ? navBarLogo.classList.add('navBar_logo--onscroll') : navBarLogo.classList.remove('navBar_logo--onscroll');
        if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100 ){
            navBar.classList.add('navbar--onscroll');
  
        } else {
            navBar.classList.remove('navbar--onscroll');
           // navBarLogo.classList.remove('navBar_logo--onscroll');
            navBar.getElementsByClassName.position = 'relative';
    
        } 
    
    }
    

}





// window.onscroll = ()=> {
    

//     if(document.documentElement.scrollTop > 2 || document.body.scrollTop > 2 ){
//         navBar.classList.add('navbar--onscroll');
//         if (windowWidth < 768) navBarLogo.style.display = 'none'  ; 
        
//     } else {
//         navBar.classList.remove('navbar--onscroll');
//         navBarLogo.style.display = 'block';
//         navBarLogo.style.postion = 'relative';

//     } 

// }
