let hamburger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let menu = document.querySelector('.m-menu');

hamburger.addEventListener('click', () => {
    times.style.display = "block";
    hamburger.style.display = "none";
    menu.style.display = "block";
    //hamburger.classList.toggle('hide');
    // hamburger.style.display = "none";
    // times.classList.toggle('show');
    // menu.classList.toggle('show');
    //  times.className('show');

});

times.addEventListener('click', () => {
    hamburger.style.display = "block";
    times.style.display = "none";
    menu.style.display = "none";
});