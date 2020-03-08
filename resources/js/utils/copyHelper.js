const clipboard = new ClipboardJS('.btn-copy');
const copyBtnsUI = document.querySelectorAll('.btn-copy');
const tableShortLinksUI = document.querySelectorAll('.urls-table__link');
const urlInputUI = document.querySelector('.url-shortener__input');

copyBtnsUI.forEach(copyBtn => {
    copyBtn.dataset.clipboardText = `${window.location.origin}/${copyBtn.dataset.clipboardText}`; 

    copyBtn.addEventListener("click", function(e) {
        e.srcElement.className += ' btn-success';
        e.srcElement.innerText = 'Copied';
    });
});

tableShortLinksUI.forEach(shortLink => {
    shortLink.text = `${window.location.origin}/${shortLink.text}`;
});

const copyBtn = document.querySelector('.btn-copy');

navigator.clipboard.readText()
    .then(text => {
        urlInputUI.value = text;
    });
