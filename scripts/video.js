const images = [...document.querySelectorAll('.chaihona__video-link')];

images.forEach(image => {
    if (window.innerWidth < 768) {
        image.setAttribute('href', '#');
    }
})