
const nav = document.querySelector('header')
window.addEventListener('scroll', function () {


    if (this.window.pageYOffset > 50) {
        nav.style.padding = '0'
    } else {
        nav.style.padding = '10px'
    }


})

const hiddenNav = document.getElementById('hiddenNav')
const haburger = document.getElementById('taggleHeader')

haburger.addEventListener('click', () => {
    console.log(hiddenNav.style.display);
})

