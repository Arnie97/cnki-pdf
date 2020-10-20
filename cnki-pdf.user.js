// ==UserScript==
// @name        CNKI PDF Download
// @description 中国知网 PDF 下载
// @author      Arnie97
// @version     2020.10.20
// @license     MIT
// @grant       none
// @namespace   https://github.com/Arnie97
// @homepageURL https://github.com/Arnie97/cnki-pdf
// @supportURL  https://greasyfork.org/scripts/368399
// @include     *://*/detail/detail.aspx*
// ==/UserScript==

((_, $) => {
    if (!_.title.endsWith('中国知网')) {
        return;
    }

    $('ul.operate-btn>li>a:first-child').forEach(i => {
        if (!i.text.includes('整本下载')) {
            return;
        }
        i.innerHTML = '<i></i> CAJ 下载';
        let li = i.parentNode;
        li.parentNode.insertBefore(li.cloneNode(true), li.nextSibling);

        i.innerHTML = '<i></i> PDF 下载';
        i.href = i.href.replace('nhdown', 'pdfdown');

        // change the button icon
        li.classList.add('btn-dlpdf');
        li.classList.remove('btn-dlcaj');
    });
})(document, selector => Array.from(document.querySelectorAll(selector)));
