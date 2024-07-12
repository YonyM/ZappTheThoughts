
/*const burgermenu = document.getElementById('burgermenu');
const menu = document.getElementById('menu');

let open = false;


if (burgermenu && menu) {

    burgermenu.addEventListener('click', () => {
        open = !open
        if (open) {
            menu.style.display = 'flex'
        }

        else {
            menu.style.display = 'none'
        }
    });

}*/

const burgerMenu = document.querySelector('.burgermenu');
const menu = document.querySelector('.menu');

const poppup = document.querySelector('.poppup')
const contentline = document.querySelector('.content-line')

poppup.addEventListener('mouseenter', function() {
    contentline.style.width = '200px';
})
poppup.addEventListener('mouseleave', function() {
    contentline.style.width = '20px';
})


burgerMenu.addEventListener('click', function() {

    if (!menu.classList.contains('open')) {
        menu.classList.add('open');
    }
    else {
        menu.classList.remove('open')
    }
    
})