// ���js�������body��һ��
document.body.innerHTML += ('<div id="loader-wrapper"><div id="loader"></div><div class="loader-section section-left"></div><div class="loader-section section-right"></div><div id="load_title"> </div></div>');
window.onload = function () {
    //ֱ���õ��ڿ��ܸ���ԭ����class�����Բ��� ԭ����+�ո�loaded������bodyԭ��û��classҲ���ᱨ��
    document.body.className += ' loaded';
}