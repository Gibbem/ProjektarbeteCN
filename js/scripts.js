

// // ^Detta har Calle gjort

// function toggleMenu() {
//     const navElement = document.querySelector('nav.navigation-menu')
//     if (navElement.classList.contains('show')) {
//         navElement.classList.remove('show')
//     } else {
//         navElement.classList.add('show')
//     }
// }
// img/product1-mobile.jpg
// <img class="slideshow__image" src="img/product1-mobile.jpg" />
// imgElement == <img />


const imgList = [
    'img/product1-mobile.jpg',
    'img/product2-mobile.jpg',
    'img/product3-mobile.jpg',
    'img/product4-mobile.jpg',
    'img/product5-mobile.jpg',
    'img/product6-mobile.jpg',
    'img/product7-mobile.jpg',
    'img/product8-mobile.jpg',
    'img/product9-mobile.jpg',
    'img/product10-mobile.jpg'
]

function placeImage(url) {
  const sliderElement = document.querySelector('.slideshow-container')
  const imgElement = document.createElement('img')
  imgElement.setAttribute('class', 'slideshow__image')
  imgElement.setAttribute('src', url)
  sliderElement.append(imgElement)
}

placeImage('img/product1-mobile.jpg')
