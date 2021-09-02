// 这个js建议放在body第一行
document.body.innerHTML += ('<div id="loader-wrapper"><div id="loader"></div><div class="loader-section section-left"></div><div class="loader-section section-right"></div><div id="load_title"> </div></div>');
window.onload = function () {
    //直接用等于可能覆盖原来的class，所以采用 原内容+空格loaded。就算body原来没有class也不会报错
    document.body.className += ' loaded';
}