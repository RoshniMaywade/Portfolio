/*============ toggle icon===========*/

let nemuIcon =document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.calssList.toggle('fa-x');
    navbar.classList.toggle('active');
}



/*=============== scroll section active link ===========*/

let section = document.querySelectorAll('section');
let navLinks = documentSelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(link=>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });
  
    /*=============== sticky navbar===========*/
    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/*====================== remove toggle icon and navbar ======*/
menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');

};


/*====================== scroll reveal======*/
ScrollReveal({ 

    distance:'80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('home-contect, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,.contact form',{
    origin:'buttom'});
    ScrollReveal().reveal('home-contect h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('home-contect p, .about-content', { origin: 'right' });


 /*====================== type js======*/

 const typed = new Typed('.multiple-text',{
    String: ['Fronted Developer','Web Designer','Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
 })

