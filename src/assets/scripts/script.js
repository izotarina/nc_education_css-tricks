let bigArticle = document.querySelector('#bigArticle');
let sidebarBlock = document.querySelector('#sidebarBlock');
let articlesAndSidebar = document.querySelector('#articlesAndSidebar');

window.addEventListener(`resize`, event => {
    if (window.innerWidth < 800) {
        bigArticle.classList.remove('_big');
    } else {
        bigArticle.classList.add('_big');
    }
}, false);

document.addEventListener('scroll', event => {
    let topArticles = articlesAndSidebar.getBoundingClientRect().top;

    if (topArticles < 0) {
        sidebarBlock.classList.remove('_invisible');
    } else {
        sidebarBlock.classList.add('_invisible');
    }
}, false);