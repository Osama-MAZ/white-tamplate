

const sections = document.querySelectorAll('body section');
const navLi = document.querySelectorAll('nav .nav-link ul li');

window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if ( pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if ( li.classList.contains(current)) {
            li.classList.add('active');
        }
    })
})


// console.log(sections);
// console.log(navLi);




