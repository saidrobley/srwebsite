let hamburger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let menu = document.querySelector('.m-menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('show');
    hamburger.classList.add('displayNone');
    times.classList.add('displayBlock');

});
times.addEventListener('click', () => {
    menu.classList.remove('show');
    hamburger.classList.remove('displayNone');
    times.classList.remove('displayBlock');
});

/*hamburger.addEventListener('click', () => {
    times.style.display = "block";
    hamburger.style.display = "none";
    menu.style.display = "block";

});

times.addEventListener('click', () => {
    hamburger.style.display = "block";
    times.style.display = "none";
    menu.style.display = "none";
}); */