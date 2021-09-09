

// ^Detta har Calle gjort

function toggleMenu() {
    const navElement = document.querySelector('nav.navigation-menu')
    if (navElement.classList.contains('show')) {
        navElement.classList.remove('show')
    } else {
        navElement.classList.add('show')
    }
}
