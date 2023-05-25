document.getElementById('more-btn').onclick = function () { location = 'https://www.malwarebytes.com/blog/news/2023/05/zip-domains' };
document.getElementById('back-btn').onclick = function () {
    if (history.length == 1) { window.close(); } else { history.back() };
};