const images = document.querySelectorAll('.referance__image')


images.forEach( (item) => {
    const text = item.querySelector('.referance__image-text')
    item.addEventListener('mouseover', () => {
        item.classList.add('referance__image--active')
        text.classList.add('referance__image-text--active');
    })
    item.addEventListener('mouseleave', () => {
        item.classList.remove('referance__image--active')
        text.classList.remove('referance__image-text--active');
    })
})