window.addEventListener(`resize`, event => {
    let bigArticle = document.querySelector('#bigArticle');
    if (window.innerWidth < 800) {
        bigArticle.classList.remove('_big');
    } else {
        bigArticle.classList.add('_big');
    }
}, false);
