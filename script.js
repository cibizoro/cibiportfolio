


let sections = document.querySelectorAll('section');

let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
          
        }
    });
};
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Web Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
